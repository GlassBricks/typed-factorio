import { Attribute, Concept, TableType, TupleType, Type, UnionType } from "../FactorioRuntimeApiJson"
import { RuntimeGenerationContext } from "./index"
import { assertNever } from "../util"
import ts from "typescript"
import { getInnerType, RWUsage } from "../types"
import assert from "assert"

export class ConceptUsageAnalysis {
  usages
  usagesToPropagate
  referencedBy
  readWriteTypeNames: Map<Concept, { read: Type; write: Type }>
  tableOrArrayConcepts

  constructor(concepts: Concept[]) {
    this.usages = new Map<Concept, RWUsage>(concepts.map((e) => [e, RWUsage.None]))

    this.usagesToPropagate = new Map<Concept, RWUsage>()
    this.referencedBy = new Map<Concept, Set<Concept>>(concepts.map((e) => [e, new Set()]))
    this.readWriteTypeNames = new Map<Concept, { read: Type; write: Type }>()

    this.tableOrArrayConcepts = new Map<Concept, { table: TableType; array: TupleType }>()
  }
}

export function recordUsage(context: RuntimeGenerationContext, type: Type, usage: RWUsage): void {
  assert(usage)
  if (typeof type === "string") return recordBasicUsage(context, type, usage)
  function analyzeAttribute(a: Attribute) {
    if (usage === RWUsage.Read) {
      if (a.read_type) recordUsage(context, a.read_type, usage)
    } else if (usage === RWUsage.Write) recordUsage(context, a.write_type ?? a.read_type!, usage)
    else if (usage === RWUsage.ReadWrite) {
      if (a.read_type) recordUsage(context, a.read_type, usage)
      if (a.write_type) recordUsage(context, a.write_type, usage)
    }
  }
  switch (type.complex_type) {
    case "type":
    case "array":
    case "dictionary":
    case "LuaCustomTable":
    case "LuaLazyLoadedValue":
      return recordUsage(context, type.value, usage)
    case "literal":
    case "builtin":
      return
    case "union":
      return type.options.forEach((t) => recordUsage(context, t, usage))
    case "function":
      return type.parameters.forEach((p) => recordUsage(context, p, RWUsage.Read))
    case "LuaStruct":
      return type.attributes.forEach(analyzeAttribute)
    case "table": {
      type.parameters.forEach((p) => recordUsage(context, p.type, usage))
      type.variant_parameter_groups?.forEach((group) => {
        group.parameters.forEach((p) => recordUsage(context, p.type, usage))
      })
      return
    }
    case "tuple":
      return type.values.forEach((v) => recordUsage(context, v, usage))
    default:
      assertNever(type)
  }
}

function recordBasicUsage(context: RuntimeGenerationContext, typeName: string, usage: RWUsage): void {
  const concept = context.concepts.get(typeName)
  if (!concept) return
  const { usagesToPropagate, usages } = context.conceptUsageAnalysis
  const currentKnownUsage = usages.get(concept)!
  const newUsages = usage & ~currentKnownUsage
  if (newUsages) {
    usagesToPropagate.set(concept, (usagesToPropagate.get(concept) || RWUsage.None) | newUsages)
  }
}

export function analyzeConcept(context: RuntimeGenerationContext, concept: Concept): void {
  recordReferencesTo(concept.type)
  const existing = context.manualDefs.getDeclaration(concept.name)
  if (existing?.annotations.references) {
    for (const ref of existing.annotations.references) {
      recordReferencesTo(ref)
    }
  }
  if (existing?.annotations.usage) {
    const param = existing.annotations.usage[0]
    if (param.includes("r")) {
      recordUsage(context, concept.name, RWUsage.Read)
    }
    if (param.includes("w")) {
      recordUsage(context, concept.name, RWUsage.Write)
    }
  }

  function recordReferencesTo(type: Type): void {
    if (typeof type === "string") {
      const referencedConcept = context.concepts.get(type)
      if (!referencedConcept) return
      context.conceptUsageAnalysis.referencedBy.get(referencedConcept)!.add(concept)
      return
    }
    switch (type.complex_type) {
      case "type":
      case "array":
      case "dictionary":
      case "LuaCustomTable":
      case "LuaLazyLoadedValue":
        return recordReferencesTo(type.value)
      case "literal":
      case "builtin":
        return preprocessBuiltin()
      case "union":
        return type.options.forEach(recordReferencesTo)
      case "function":
        return // function parameters are always Read, so don't need to record dependencies
      case "LuaStruct":
        return type.attributes.forEach((a) => {
          if (a.read_type) recordReferencesTo(a.read_type)
          if (a.write_type) recordReferencesTo(a.write_type)
        })
      case "table": {
        type.parameters.forEach((p) => recordReferencesTo(p.type))
        type.variant_parameter_groups?.forEach((group) => {
          group.parameters.forEach((p) => recordReferencesTo(p.type))
        })
        return
      }
      case "tuple":
        return type.values.forEach(recordReferencesTo)
      default:
        assertNever(type)
    }
  }

  function preprocessBuiltin(): void {
    if (concept.name === "boolean" || concept.name === "string" || concept.name === "number") return
    const existing = context.manualDefs.getDeclaration(concept.name)
    if (existing?.kind === "type" && existing.node.type.kind === ts.SyntaxKind.NumberKeyword)
      context.numericTypes.add(concept.name)
  }
}

export function finalizeConceptUsageAnalysis(context: RuntimeGenerationContext): void {
  const { usagesToPropagate, usages } = context.conceptUsageAnalysis
  while (usagesToPropagate.size > 0) {
    const [concept, usage] = usagesToPropagate.entries().next().value
    usagesToPropagate.delete(concept)
    if (!usage) continue
    usages.set(concept, usages.get(concept)! | usage)
    recordUsage(context, concept.type, usage)
    const existing = context.manualDefs.getDeclaration(concept.name)
    if (existing?.annotations.readType && (usage & RWUsage.Read) !== 0) {
      recordUsage(context, stringsToType(existing.annotations.readType)!, RWUsage.Read)
    }
    if (existing?.annotations.writeType && (usage & RWUsage.Write) !== 0) {
      recordUsage(context, stringsToType(existing.annotations.writeType)!, RWUsage.Write)
    }
    if (existing?.annotations.references) {
      for (const type of existing.annotations.references) {
        recordUsage(context, type, usage)
      }
    }
  }

  for (const concept of context.concepts.values()) {
    const usage = context.conceptUsageAnalysis.usages.get(concept)
    if (!usage) {
      context.warning(`Unknown concept usage for ${concept.name}`)
    }
    maybeOverrideReadWriteType(context, concept, usage ?? RWUsage.None)
  }
}

function maybeOverrideReadWriteType(context: RuntimeGenerationContext, concept: Concept, usage: RWUsage) {
  const existing = context.manualDefs.getDeclaration(concept.name)

  const tableOrArray = tryGetTableOrArrayConcept(context, concept)
  const usageAnalysis = context.conceptUsageAnalysis
  if (tableOrArray) {
    usageAnalysis.tableOrArrayConcepts.set(concept, tableOrArray)
    const readName = concept.name
    const writeName: UnionType = {
      complex_type: "union",
      options: [readName, `${readName}Array`],
      full_format: false,
    }
    overrideReadWriteType(context, concept, { read: readName, write: writeName })
  }

  const readType = stringsToType(existing?.annotations.readType)
  const writeType = stringsToType(existing?.annotations.writeType)
  if (readType || writeType) {
    overrideReadWriteType(context, concept, {
      read: readType ?? concept.name,
      write: writeType ?? concept.name,
    })
  }

  if (usage === RWUsage.ReadWrite) {
    const idReadType = findLuaPrototypeIdReadType(concept)
    if (idReadType) {
      overrideReadWriteType(context, concept, {
        read: idReadType,
        write: concept.name,
      })
    }
  }
}

function overrideReadWriteType(
  context: RuntimeGenerationContext,
  concept: Concept,
  type: { read: Type; write: Type },
): void {
  const { referencedBy, usages, readWriteTypeNames } = context.conceptUsageAnalysis
  if (usages.get(concept) !== RWUsage.ReadWrite) {
    context.warning(
      `Concept ${concept.name} is not read-write, but is being marked as having separate read and write types`,
    )
  }
  const existingType = readWriteTypeNames.get(concept)
  readWriteTypeNames.set(concept, type)
  if (existingType) return
  setReadWriteTypeWorker(concept)

  function setReadWriteTypeWorker(curConcept: Concept) {
    if (usages.get(curConcept) !== RWUsage.ReadWrite) {
      context.warning(
        `Concept ${curConcept.name} is not read-write, but is being marked as having separate read and write types`,
      )
    }

    // for every type that references this, it also needs separate read write types
    referencedBy.get(curConcept)!.forEach((referencingConcept) => {
      if (usages.get(referencingConcept) === RWUsage.ReadWrite && !readWriteTypeNames.has(referencingConcept)) {
        const defaultNames = {
          read: `${referencingConcept.name}`,
          write: `${referencingConcept.name}Write`,
        }
        context.tsToFactorioType.set(defaultNames.write, referencingConcept.name)
        readWriteTypeNames.set(referencingConcept, defaultNames)
        setReadWriteTypeWorker(referencingConcept)
      }
    })
  }
}

function stringsToType(types: string[] | undefined): Type | undefined {
  if (!types) return undefined
  if (types.length === 1) return types[0]
  return {
    complex_type: "union",
    options: types,
    full_format: false,
  }
}

function findLuaPrototypeIdReadType(concept: Concept): string | undefined {
  if (concept.name.match(/[a-z]ID$/) && typeof concept.type === "object" && concept.type.complex_type === "union") {
    const option = concept.type.options.map(getInnerType).find((o) => typeof o === "string" && o.match(/^Lua[A-Z].+$/))
    return option as string | undefined
  }
}

function tryGetTableOrArrayConcept(
  _context: RuntimeGenerationContext,
  concept: Concept,
):
  | {
      table: TableType
      array: TupleType
    }
  | undefined {
  const type = concept.type
  if (typeof type === "string" || type.complex_type !== "union" || type.options.length !== 2) return undefined
  const tableType = type.options.find((o) => typeof o !== "string" && o.complex_type === "table")
  const arrayType = type.options.find((o) => typeof o !== "string" && o.complex_type === "tuple")
  if (!tableType || !arrayType) return undefined
  return {
    table: tableType as TableType,
    array: arrayType as TupleType,
  }
}
