import ts from "typescript"
import DefinitionsGenerator from "../DefinitionsGenerator"
import { Concept } from "../FactorioApiJson"
import { mapTypeWithDescription } from "../types"
import { sortByOrder } from "../util"

export function preprocessConcepts(generator: DefinitionsGenerator) {
  for (const concept of generator.apiDocs.concepts) {
    generator.typeNames[concept.name] = concept.name
  }
}

export function generateConcepts(generator: DefinitionsGenerator) {
  generator.apiDocs.concepts.sort(sortByOrder)

  const statements = generator.newStatements()
  for (const concept of generator.apiDocs.concepts) {
    const { result, additionalDescription } = generateConcept(generator, concept)
    if (additionalDescription) {
      concept.description += "\n\n" + additionalDescription
    }
    generator.addJsDoc(result, concept, concept.name)
    statements.add(result)
  }
  generator.addFile("concepts", statements)
}

function generateConcept(
  generator: DefinitionsGenerator,
  concept: Concept
): {
  result: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  additionalDescription: string | undefined
} {
  const existing = generator.manualDefinitions[concept.name]
  if (existing?.kind === "namespace") {
    throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
  }

  const { type, description } = mapTypeWithDescription(generator, concept.type, { baseName: concept.name })
  let result: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  if (ts.isTypeLiteralNode(type)) {
    // create interface
    result = ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      concept.name,
      undefined,
      undefined,
      type.members
    )
  } else {
    result = ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
  }
  return { result, additionalDescription: description }
}
