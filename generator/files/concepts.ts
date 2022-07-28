import assert from "assert"
import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc, createSeeTag } from "../documentation"
import { Concept, TableComplexType } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { addFakeJSDoc } from "../genUtil"
import {
  finalizeConceptUsageAnalysis,
  markHavingSeparateReadWriteTypes,
  recordConceptDependencies,
  RWUsage,
} from "../read-write-types"
import { mapConceptType, mapType } from "../types"
import { sortByOrder } from "../util"
import { createVariantParameterTypes } from "../variantParameterGroups"

const tableOrArrayConcepts = new Map<Concept, { table: TableComplexType; array: TableComplexType }>()
/**
 * Should be last to preprocess
 * @param context
 */
export function preprocessConcepts(context: GenerationContext) {
  const concepts = context.apiDocs.concepts
  concepts.sort(sortByOrder)

  for (const concept of concepts) {
    context.typeNames[concept.name] = concept.name
    recordConceptDependencies(context, concept)
  }
  finalizeConceptUsageAnalysis(context)

  for (const concept of concepts) {
    const usage = context.conceptUsages.get(concept)
    if (usage === RWUsage.None) {
      context.warning(`Unknown concept usage for ${concept.name}`)
    }

    const existing = context.getInterfaceDef(concept.name)
    if (existing?.annotations) {
      if (existing.annotations.omit || existing.annotations.replace) continue
    }
    const tableOrArray = tryGetTableOrArrayConcept(context, concept)
    if (tableOrArray) {
      tableOrArrayConcepts.set(concept, tableOrArray)
      const readName = concept.name
      const writeName = `${concept.name}Write`
      markHavingSeparateReadWriteTypes(context, concept, { read: readName, write: writeName })
    } else {
      const readType = existing?.annotations.readType?.[0]
      if (readType) {
        markHavingSeparateReadWriteTypes(context, concept, { read: readType, write: concept.name })
      }
    }
  }
}

function tryGetTableOrArrayConcept(
  context: GenerationContext,
  concept: Concept
):
  | {
      table: TableComplexType
      array: TableComplexType
    }
  | undefined {
  const type = concept.type
  if (typeof type === "string" || type.complex_type !== "union" || type.options.length !== 2) return undefined
  const tableType = type.options.find((o) => typeof o !== "string" && o.complex_type === "table")
  const arrayType = type.options.find((o) => typeof o !== "string" && o.complex_type === "tuple")
  if (!tableType || !arrayType) return undefined
  return {
    table: tableType as TableComplexType,
    array: arrayType as TableComplexType,
  }
}

export function generateConcepts(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "concepts")
  for (const concept of context.apiDocs.concepts) {
    generateConcept(context, concept, statements)
  }
  return statements.getResult()
}

function generateConcept(context: GenerationContext, concept: Concept, statements: StatementsList): void {
  const existing = context.getInterfaceDef(concept.name)

  if (existing?.annotations) {
    if (existing.annotations.omit) return
    if (existing.annotations.replace) {
      const node = existing.node
      statements.add(node)
      ts.setEmitFlags(node, ts.EmitFlags.NoComments)
      addJsDoc(context, node, concept, concept.name)
      return
    }
  }
  if (
    typeof concept.type !== "string" &&
    concept.type.complex_type === "table" &&
    concept.type.variant_parameter_groups
  ) {
    const { description, declaration } = createVariantParameterTypes(context, concept.name, concept.type, statements)
    concept.description += `\n\n${description}`
    addJsDoc(context, declaration, concept, concept.name)
    return
  }

  const tableOrArray = tableOrArrayConcepts.get(concept)
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

function createTableOrArrayConcept(
  context: GenerationContext,
  statements: StatementsList,
  concept: Concept,
  tableOrArray: { table: TableComplexType; array: TableComplexType }
): void {
  // /** description */
  // interface Concept { ...table }
  // /** Array form of @{link Concept} */
  // type ConceptArray = Array
  // /** Table or array form of @{link Concept} */
  // type ConceptWrite = Concept | ConceptArray
  // /** @deprecated Use @{link Concept} instead */
  // type ConceptTable = Concept

  const tableForm = mapType(context, tableOrArray.table, concept.name) as ts.TypeLiteralNode
  const arrayForm = mapType(context, tableOrArray.array, concept.name)
  assert(ts.isTypeLiteralNode(tableForm))
  assert(tableOrArray.array.complex_type === "tuple")

  const name = concept.name
  const arrayName = `${concept.name}Array`
  const writeName = `${concept.name}Write`

  const conceptInterface = ts.factory.createInterfaceDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    undefined,
    tableForm.members
  )
  addJsDoc(context, conceptInterface, concept, concept.name, [createSeeTag(arrayName), createSeeTag(writeName)])
  statements.add(conceptInterface)

  const conceptArray = ts.factory.createTypeAliasDeclaration(undefined, undefined, arrayName, undefined, arrayForm)
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

function createDeprecatedTag(useInstead: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(
    ts.factory.createIdentifier("deprecated"),
    `Use {@link ${useInstead}} instead`
  )
}
