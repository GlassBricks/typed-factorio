import ts from "typescript"
import DefinitionsGenerator from "../DefinitionsGenerator"
import { createConst, Modifiers, Types } from "../genUtil"
import { mapType } from "../types"
import { sortByOrder } from "../util"

export function preprocessBuiltins(generator: DefinitionsGenerator) {
  for (const builtin of generator.apiDocs.builtin_types) {
    generator.typeNames[builtin.name] = builtin.name
    if (builtin.name !== "boolean" && builtin.name !== "string" && builtin.name !== "table") {
      generator.numericTypes.add(builtin.name)
    }
  }
}

export function preprocessGlobalObjects(generator: DefinitionsGenerator) {
  for (const globalObject of generator.apiDocs.global_objects) {
    generator.typeNames[globalObject.name] = globalObject.name
    // generator.mapTypeSimple(globalObject.type, true, false)
  }
}

export function generateBuiltins(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  for (const builtin of generator.apiDocs.builtin_types.sort(sortByOrder)) {
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
      generator.addJsDoc(
        ts.factory.createTypeAliasDeclaration(undefined, undefined, builtin.name, undefined, type),
        builtin,
        builtin.name
      )
    )
  }
  generator.addFile("builtin-types", statements)
}

export function generateGlobalObjects(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  for (const globalObject of generator.apiDocs.global_objects.sort(sortByOrder)) {
    const definition = createConst(
      globalObject.name,
      mapType(generator, globalObject.type, { baseName: globalObject.name }).mainType,
      [Modifiers.declare]
    )
    generator.addJsDoc(definition, globalObject, globalObject.name)
    statements.add(definition)
  }
  generator.addFile("global-objects", statements)
}
