import { sortByOrder } from "../util"
import ts from "typescript"
import { createConst, Modifiers, Types } from "../genUtil"
import DefinitionsGenerator from "../DefinitionsGenerator"

export function generateBuiltins(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  for (const builtin of generator.apiDocs.builtin_types.sort(sortByOrder)) {
    if (builtin.name === "boolean" || builtin.name === "string") continue
    let type: ts.KeywordTypeNode
    if (builtin.name === "table") {
      type = Types.object
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
      generator.mapTypeWithTransforms(globalObject, "", globalObject.type, true, false).read,
      [Modifiers.declare]
    )
    generator.addJsDoc(definition, globalObject, globalObject.name)
    statements.add(definition)
  }
  generator.addFile("global-objects", statements)
}
