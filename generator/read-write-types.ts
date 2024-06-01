import assert from "assert"
import ts from "typescript"
import { Attribute, Concept, Type } from "./FactorioRuntimeApiJson.js"
import { assertNever } from "./util.js"
import { RuntimeGenerationContext } from "./runtime/index.js"

export enum RWUsage {
  None = 0,
  Read = 1 << 0,
  Write = 1 << 1,
  ReadWrite = Read | Write,
}

export function getUsage(attribute: Attribute): RWUsage {
  let usage = RWUsage.None
  if (attribute.read) {
    usage |= RWUsage.Read
  }
  if (attribute.write) {
    usage |= RWUsage.Write
  }
  return usage
}

export function analyzeType(context: RuntimeGenerationContext, type: Type, usage: RWUsage): void {
  assert(usage)
  if (typeof type === "string") return analyzeBasicType(type)
  switch (type.complex_type) {
    case "type":
    case "array":
    case "dictionary":
    case "LuaCustomTable":
    case "LuaLazyLoadedValue":
      return analyzeType(context, type.value, usage)
    case "literal":
    case "builtin":
      return
    case "union":
      return type.options.forEach((t) => analyzeType(context, t, usage))
    case "function":
      return type.parameters.forEach((p) => analyzeType(context, p, RWUsage.Read))
    case "LuaStruct":
      return type.attributes.forEach((a) => analyzeType(context, a.type, usage))
    case "table": {
      type.parameters.forEach((p) => analyzeType(context, p.type, usage))
      type.variant_parameter_groups?.forEach((group) => {
        group.parameters.forEach((p) => analyzeType(context, p.type, usage))
      })
      return
    }
    case "tuple":
      return type.values.forEach((v) => analyzeType(context, v, usage))
    default:
      assertNever(type)
  }

  function analyzeBasicType(basicType: string) {
    const concept = context.concepts.get(basicType)
    if (!concept) return
    const { conceptUsagesToPropagate, conceptUsages } = context.conceptUsageAnalysis
    const currentKnownUsage = conceptUsages.get(concept)!
    const newUsages = usage & ~currentKnownUsage
    if (newUsages) {
      conceptUsagesToPropagate.set(concept, (conceptUsagesToPropagate.get(concept) || RWUsage.None) | newUsages)
    }
  }
}

export function finalizeConceptUsageAnalysis(context: RuntimeGenerationContext): void {
  const { conceptUsagesToPropagate, conceptUsages } = context.conceptUsageAnalysis
  while (conceptUsagesToPropagate.size > 0) {
    const [concept, usage] = conceptUsagesToPropagate.entries().next().value
    conceptUsagesToPropagate.delete(concept)
    if (!usage) continue
    conceptUsages.set(concept, conceptUsages.get(concept)! | usage)
    analyzeType(context, concept.type, usage)
  }
}

export function recordConceptDependencies(context: RuntimeGenerationContext, concept: Concept): void {
  analyzeTypeWorker(concept.type)

  function analyzeTypeWorker(type: Type): void {
    if (typeof type === "string") {
      const referencedConcept = context.concepts.get(type)
      if (!referencedConcept) return
      context.conceptUsageAnalysis.conceptReferencedBy.get(referencedConcept)!.add(concept)
      return
    }
    switch (type.complex_type) {
      case "type":
      case "array":
      case "dictionary":
      case "LuaCustomTable":
      case "LuaLazyLoadedValue":
        return analyzeTypeWorker(type.value)
      case "literal":
      case "builtin":
        return
      case "union":
        return type.options.forEach(analyzeTypeWorker)
      case "function":
        return // function parameters are always Read, so don't need to record dependencies
      case "LuaStruct":
        return type.attributes.forEach((a) => analyzeTypeWorker(a.type))
      case "table": {
        type.parameters.forEach((p) => analyzeTypeWorker(p.type))
        type.variant_parameter_groups?.forEach((group) => {
          group.parameters.forEach((p) => analyzeTypeWorker(p.type))
        })
        return
      }
      case "tuple":
        return type.values.forEach(analyzeTypeWorker)
      default:
        assertNever(type)
    }
  }
}

export function setReadWriteType(
  context: RuntimeGenerationContext,
  concept: Concept,
  type: { read: string | ts.TypeNode; write: string | ts.TypeNode },
): void {
  const { conceptReferencedBy, conceptUsages, conceptReadWriteTypes } = context.conceptUsageAnalysis
  if (conceptUsages.get(concept) !== RWUsage.ReadWrite) {
    context.warning(
      `Concept ${concept.name} is not read-write, but is being marked as having separate read and write types`,
    )
  }
  const existingType = conceptReadWriteTypes.get(concept)
  conceptReadWriteTypes.set(concept, type)
  if (existingType) return
  setReadWriteTypeWorker(concept)

  function setReadWriteTypeWorker(curConcept: Concept) {
    if (conceptUsages.get(curConcept) !== RWUsage.ReadWrite) {
      context.warning(
        `Concept ${curConcept.name} is not read-write, but is being marked as having separate read and write types`,
      )
    }

    conceptReferencedBy.get(curConcept)!.forEach((referencingConcept) => {
      if (
        conceptUsages.get(referencingConcept) === RWUsage.ReadWrite &&
        !conceptReadWriteTypes.has(referencingConcept)
      ) {
        const defaultNames = {
          read: `${referencingConcept.name}`,
          write: `${referencingConcept.name}Write`,
        }
        conceptReadWriteTypes.set(referencingConcept, defaultNames)
        setReadWriteTypeWorker(referencingConcept)
      }
    })
  }
}
