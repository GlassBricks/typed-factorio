import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import { Concept } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { mapTypeWithDescription } from "../types"
import { sortByOrder } from "../util"

export function preprocessConcepts(context: GenerationContext) {
  for (const concept of context.apiDocs.concepts) {
    context.typeNames[concept.name] = concept.name
  }
}

export function generateConcepts(context: GenerationContext): DefinitionsFile {
  context.apiDocs.concepts.sort(sortByOrder)

  const statements = new StatementsList(context, "concepts")
  for (const concept of context.apiDocs.concepts) {
    const { result, additionalDescription } = generateConcept(context, concept)
    if (additionalDescription) {
      concept.description += "\n\n" + additionalDescription
    }
    addJsDoc(context, result, concept, concept.name, undefined)
    statements.add(result)
  }
  return statements.getResult()
}

function generateConcept(
  context: GenerationContext,
  concept: Concept
): {
  result: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  additionalDescription: string | undefined
} {
  const existing = context.manualDefinitions[concept.name]
  if (existing?.kind === "namespace") {
    throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
  }

  const { type, description } = mapTypeWithDescription(context, concept.type, { baseName: concept.name })
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
