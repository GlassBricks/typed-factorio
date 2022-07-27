import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import { Concept, Type } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { mapType, mapTypeValue } from "../types"
import { sortByOrder } from "../util"
import { createVariantParameterTypes } from "../variantParameterGroups"

export function preprocessConcepts(context: GenerationContext) {
  for (const concept of context.apiDocs.concepts) {
    context.typeNames[concept.name] = concept.name
  }
}

export function generateConcepts(context: GenerationContext): DefinitionsFile {
  context.apiDocs.concepts.sort(sortByOrder)

  const statements = new StatementsList(context, "concepts")
  for (const concept of context.apiDocs.concepts) {
    const result = generateConcept(context, concept, statements)
    if (!result) continue
    if (result.additionalDescription) {
      concept.description += "\n\n" + result.additionalDescription
    }
    addJsDoc(context, result.declaration, concept, concept.name, undefined)
    statements.add(result.declaration)
  }
  return statements.getResult()
}

function generateConcept(
  context: GenerationContext,
  concept: Concept,
  statements: StatementsList
):
  | {
      declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
      additionalDescription: string | undefined
    }
  | undefined {
  const existing = context.getInterfaceDef(concept.name)

  if (
    typeof concept.type !== "string" &&
    concept.type.complex_type === "table" &&
    concept.type.variant_parameter_groups
  ) {
    createVariantParameterTypes(context, concept.name, concept.type, statements, concept)
    return undefined
  }

  const { type, description } = mapTypeValue(context, concept.type, {
    contextName: concept.name,
    existingDef: existing,
  })
  let result: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  if (ts.isTypeLiteralNode(type)) {
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
  return { declaration: result, additionalDescription: description }
}
