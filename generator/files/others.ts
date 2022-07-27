import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import GenerationContext from "../GenerationContext"
import { createConst, Modifiers, Types } from "../genUtil"
import { mapFunction } from "../members"
import { mapType } from "../types"
import { sortByOrder } from "../util"

export function preprocessBuiltins(context: GenerationContext) {
  for (const builtin of context.apiDocs.builtin_types) {
    context.typeNames[builtin.name] = builtin.name
    if (builtin.name !== "boolean" && builtin.name !== "string" && builtin.name !== "table") {
      context.numericTypes.add(builtin.name)
    }
  }
}

export function preprocessGlobalObjects(context: GenerationContext) {
  for (const globalObject of context.apiDocs.global_objects) {
    context.typeNames[globalObject.name] = globalObject.name
  }
}

export function preprocessGlobalFunctions(context: GenerationContext) {
  for (const globalFunction of context.apiDocs.global_functions) {
    context.typeNames[globalFunction.name] = globalFunction.name
  }
}

export function generateBuiltins(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "builtin-types")
  for (const builtin of context.apiDocs.builtin_types.sort(sortByOrder)) {
    if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
    let type: ts.KeywordTypeNode
    if (builtin.name === "table") {
      type = Types.object
    } else if (builtin.name === "LuaObject") {
      type = Types.unknown // TODO
    } else if (builtin.name === "nil") {
      type = Types.undefined
    } else {
      type = Types.number
    }
    statements.add(
      addJsDoc(
        context,
        ts.factory.createTypeAliasDeclaration(undefined, undefined, builtin.name, undefined, type),
        builtin,
        builtin.name,
        undefined
      )
    )
  }
  return statements.getResult()
}

export function generateGlobalObjects(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "global-objects")
  for (const globalObject of context.apiDocs.global_objects.sort(sortByOrder)) {
    const definition = createConst(globalObject.name, mapType(context, globalObject.type, globalObject.name), [
      Modifiers.declare,
    ])
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
