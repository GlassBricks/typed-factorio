import { SyntaxKind } from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import GenerationContext from "../GenerationContext"
import { createConst, Modifiers } from "../genUtil"
import { analyzeMethod, mapFunction } from "../members"
import { analyzeType, RWUsage } from "../read-write-types"
import { mapType } from "../types"
import { sortByOrder } from "../util"

export function preprocessBuiltins(context: GenerationContext) {
  for (const builtin of context.apiDocs.builtin_types) {
    if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
    context.typeNames[builtin.name] = builtin.name
    const existing = context.getInterfaceDef(builtin.name)
    if (existing?.kind === "type" && existing.node.type.kind === SyntaxKind.NumberKeyword)
      context.numericTypes.add(builtin.name)
  }
}

export function preprocessGlobalObjects(context: GenerationContext) {
  for (const globalObject of context.apiDocs.global_objects) {
    context.typeNames[globalObject.name] = globalObject.name
    analyzeType(context, globalObject.type, RWUsage.Read)
  }
}

export function preprocessGlobalFunctions(context: GenerationContext) {
  for (const globalFunction of context.apiDocs.global_functions) {
    context.typeNames[globalFunction.name] = globalFunction.name
    analyzeMethod(context, globalFunction)
  }
}

export function generateBuiltins(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "builtin-types")
  for (const builtin of context.apiDocs.builtin_types.sort(sortByOrder)) {
    if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
    const existing = context.getInterfaceDef(builtin.name)
    if (!existing) {
      context.warning(`No existing definition for builtin ${builtin.name}`)
      continue
    }
    statements.add(addJsDoc(context, existing.node, builtin, builtin.name, undefined))
  }
  return statements.getResult()
}

export function generateGlobalObjects(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "global-objects")
  for (const globalObject of context.apiDocs.global_objects.sort(sortByOrder)) {
    const definition = createConst(
      globalObject.name,
      mapType(context, globalObject.type, globalObject.name, RWUsage.Read).mainType,
      [Modifiers.declare]
    )
    addJsDoc(context, definition, globalObject, globalObject.name, undefined)
    statements.add(definition)
  }
  return statements.getResult()
}

export function generateGlobalFunctions(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "global-functions")
  for (const globalFunction of context.apiDocs.global_functions.sort(sortByOrder)) {
    const definition = mapFunction(context, globalFunction)
    statements.add(definition)
  }
  return statements.getResult()
}
