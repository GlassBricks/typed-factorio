import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import { Concept } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { addFakeJSDoc } from "../genUtil"
import { mapConceptType, mapType } from "../types"
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
    generateConcept(context, concept, statements)
  }
  return statements.getResult()
}

function generateConcept(context: GenerationContext, concept: Concept, statements: StatementsList): void {
  const existing = context.getInterfaceDef(concept.name)

  if (existing?.annotations) {
    const annotation = existing.annotations
    if (existing.annotations.omit) return

    context.warning("Don't know what to do with existing concept interface", concept.name)
    // todo
  }
  if (
    typeof concept.type !== "string" &&
    concept.type.complex_type === "table" &&
    concept.type.variant_parameter_groups
  ) {
    createVariantParameterTypes(context, concept.name, concept.type, statements, concept)
    return undefined
  }

  const tableOrArray = tryGetTableOrArrayConcept(context, concept)
  if (tableOrArray) {
    createTableOrArrayConcept(context, statements, concept, tableOrArray)
    return
  }

  const { type, description } = mapConceptType(context, concept.type, {
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
  if (description) {
    concept.description += "\n\n" + description
  }
  addJsDoc(context, result, concept, concept.name)
  statements.add(result)
}

function tryGetTableOrArrayConcept(
  context: GenerationContext,
  concept: Concept
):
  | {
      table: ts.TypeLiteralNode
      array: ts.TupleTypeNode
    }
  | undefined {
  const type = concept.type
  if (typeof type === "string" || type.complex_type !== "union" || type.options.length !== 2) return undefined
  const tableType = type.options.find((o) => typeof o !== "string" && o.complex_type === "table")
  const arrayType = type.options.find((o) => typeof o !== "string" && o.complex_type === "tuple")
  if (!tableType || !arrayType) return undefined
  return {
    table: mapType(context, tableType, concept.name) as ts.TypeLiteralNode,
    array: mapType(context, arrayType, concept.name) as ts.TupleTypeNode,
  }
}

function createTableOrArrayConcept(
  context: GenerationContext,
  statements: StatementsList,
  concept: Concept,
  tableOrArray: { table: ts.TypeLiteralNode; array: ts.TupleTypeNode }
): void {
  // /** description */
  // interface Concept { ...table }
  // /** Array form of @{link Concept} */
  // type ConceptArray = Array
  // /** Table or array form of @{link Concept} */
  // type ConceptWrite = Concept | ConceptArray
  // /** @deprecated Use @{link Concept} instead */
  // type ConceptTable = Concept

  const name = concept.name
  const arrayName = `${concept.name}Array`
  const writeName = `${concept.name}Write`

  const conceptInterface = ts.factory.createInterfaceDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    undefined,
    tableOrArray.table.members
  )
  addJsDoc(context, conceptInterface, concept, concept.name, [createSeeTag(arrayName), createSeeTag(writeName)])
  statements.add(conceptInterface)

  const conceptArray = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    arrayName,
    undefined,
    tableOrArray.array
  )
  const arrayDescription = `Array form of {@link ${concept.name}}`
  addJsDoc(context, conceptArray, { description: arrayDescription }, name, [
    createSeeTag(name),
    createSeeTag(writeName),
  ])
  statements.add(conceptArray)

  const conceptWrite = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    writeName,
    undefined,
    ts.factory.createUnionTypeNode([
      ts.factory.createTypeReferenceNode(name),
      ts.factory.createTypeReferenceNode(arrayName),
    ])
  )
  const writeDescription = `Either table or array form of {@link ${concept.name}}`
  addJsDoc(context, conceptWrite, { description: writeDescription }, name, [
    createSeeTag(name),
    createSeeTag(arrayName),
  ])
  statements.add(conceptWrite)

  const conceptTable = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    name + "Table",
    undefined,
    ts.factory.createTypeReferenceNode(name)
  )
  addFakeJSDoc(conceptTable, ts.factory.createJSDocComment("", [createDeprecatedTag(name)]))
  statements.add(conceptTable)

  context.typeNames[writeName] = name
  context.typeNames[arrayName] = name
}

function createSeeTag(name: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("see"), name)
}

function createDeprecatedTag(useInstead: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(
    ts.factory.createIdentifier("deprecated"),
    `Use {@link ${useInstead}} instead`
  )
}
