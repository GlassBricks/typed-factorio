import assert from "assert"
import { Concept, Type } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { assertNever } from "./util"

export enum RWUsage {
  None = 0,
  Read = 1 << 0,
  Write = 1 << 1,
  ReadWrite = Read | Write,
}

export function analyzeType(context: GenerationContext, type: Type, usage: RWUsage): void {
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
      return
    case "union":
      return type.options.forEach((t) => analyzeType(context, t, usage))
    case "function":
      return type.parameters.forEach((p) => analyzeType(context, p, RWUsage.Read))
    case "struct":
      return type.attributes.forEach((a) => analyzeType(context, a.type, usage))
    case "table":
    case "tuple": {
      type.parameters.forEach((p) => analyzeType(context, p.type, usage))
      type.variant_parameter_groups?.forEach((group) => {
        group.parameters.forEach((p) => analyzeType(context, p.type, usage))
      })
      return
    }
    default:
      assertNever(type)
  }

  function analyzeBasicType(basicType: string) {
    const concept = context.concepts.get(basicType)
    if (!concept) return
    const currentKnownUsage = context.conceptUsages.get(concept)!
    const newUsages = usage & ~currentKnownUsage
    if (newUsages) {
      context.conceptUsagesToPropagate.set(
        concept,
        (context.conceptUsagesToPropagate.get(concept) || RWUsage.None) | newUsages
      )
    }
  }
}

export function finalizeConceptUsageAnalysis(context: GenerationContext) {
  while (context.conceptUsagesToPropagate.size > 0) {
    const [concept, usage] = context.conceptUsagesToPropagate.entries().next().value
    context.conceptUsagesToPropagate.delete(concept)
    if (!usage) continue
    context.conceptUsages.set(concept, context.conceptUsages.get(concept)! | usage)
    analyzeType(context, concept.type, usage)
  }
}

export function recordConceptDependencies(context: GenerationContext, concept: Concept) {
  analyzeTypeWorker(concept.type)

  function analyzeTypeWorker(type: Type): void {
    if (typeof type === "string") {
      const referencedConcept = context.concepts.get(type)
      if (!referencedConcept) return
      context.conceptReferencedBy.get(referencedConcept)!.add(concept)
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
        return
      case "union":
        return type.options.forEach(analyzeTypeWorker)
      case "function":
        return // function parameters are always Read, so don't need to record dependencies
      case "struct":
        return type.attributes.forEach((a) => analyzeTypeWorker(a.type))
      case "table":
      case "tuple": {
        type.parameters.forEach((p) => analyzeTypeWorker(p.type))
        type.variant_parameter_groups?.forEach((group) => {
          group.parameters.forEach((p) => analyzeTypeWorker(p.type))
        })
        return
      }
      default:
        assertNever(type)
    }
  }
}

export function markHavingSeparateReadWriteTypes(
  context: GenerationContext,
  concept: Concept,
  type?: { read: string; write: string }
) {
  const { conceptUsages, conceptReferencedBy, conceptReadWriteTypes } = context
  // assert(conceptUsages.get(concept) === RWUsage.ReadWrite)
  if (conceptUsages.get(concept) !== RWUsage.ReadWrite) {
    context.warning(
      `Concept ${concept.name} is not read-write, but is being marked as having separate read and write types`
    )
  }
  const existingType = conceptReadWriteTypes.get(concept)

  if (existingType === true) {
    if (type) conceptReadWriteTypes.set(concept, type)
    return
  } else if (existingType) {
    if (type) context.warning(`${concept.name} has already has read/write types`)
    return
  }
  conceptReadWriteTypes.set(concept, type ?? true)

  conceptReferencedBy.get(concept)!.forEach((referencingConcept) => {
    if (conceptUsages.get(referencingConcept) === RWUsage.ReadWrite) {
      markHavingSeparateReadWriteTypes(context, referencingConcept)
    }
  })
}
