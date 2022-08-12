import assert from "assert"
import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc, createSeeTag } from "../documentation"
import { Concept, TableComplexType } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { addFakeJSDoc } from "../genUtil"
import { finalizeConceptUsageAnalysis, recordConceptDependencies, RWUsage, setReadWriteType } from "../read-write-types"
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
    const existing = context.getInterfaceDef(concept.name)
    if (!existing?.annotations.omit) recordConceptDependencies(context, concept)
  }
  finalizeConceptUsageAnalysis(context)

  for (const concept of concepts) {
    const usage = context.conceptUsages.get(concept)
    if (usage === RWUsage.None) {
      context.warning(`Unknown concept usage for ${concept.name}`)
    }

    const existing = context.getInterfaceDef(concept.name)
    if (existing?.annotations.replace) continue
    const tableOrArray = tryGetTableOrArrayConcept(context, concept)
    if (tableOrArray) {
      tableOrArrayConcepts.set(concept, tableOrArray)
      const readName = concept.name
      // const writeName = `${concept.name} | ${concept.name}Array`
      const writeName = ts.factory.createUnionTypeNode([
        ts.factory.createTypeReferenceNode(concept.name),
        ts.factory.createTypeReferenceNode(`${concept.name}Array`),
      ])
      setReadWriteType(context, concept, { read: readName, write: writeName })
    }

    const readType = stringsToType(existing?.annotations.readType)
    const writeType = stringsToType(existing?.annotations.writeType)
    if (readType || writeType) {
      setReadWriteType(context, concept, {
        read: readType ?? concept.name,
        write: writeType ?? concept.name,
      })
    }
  }
}

function stringsToType(types: string[] | undefined) {
  if (!types) return undefined
  if (types.length === 1) return ts.factory.createTypeReferenceNode(types[0])
  return ts.factory.createUnionTypeNode(types.map((t) => ts.factory.createTypeReferenceNode(t)))
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

function createVariantParameterConcept(
  context: GenerationContext,
  concept: Concept,
  conceptUsage: RWUsage,
  statements: StatementsList
): void {
  const {
    description,
    declarations: [readDecl, writeDecl],
  } = createVariantParameterTypes(context, concept.name, concept.type as TableComplexType, conceptUsage, statements)
  concept.description += `\n\n${description}`
  addJsDoc(context, readDecl, concept, concept.name)
  if (writeDecl) {
    addJsDoc(context, writeDecl, { description: getWriteDescription(concept) }, concept.name)
  }
}
function generateConcept(context: GenerationContext, concept: Concept, statements: StatementsList): void {
  const existing = context.getInterfaceDef(concept.name)

  if (existing?.annotations) {
    if (existing.annotations.replace) {
      const node = existing.node
      statements.add(node)
      ts.setEmitFlags(node, ts.EmitFlags.NoComments)
      addJsDoc(context, node, concept, concept.name)
      return
    }
  }

  const conceptUsage = context.conceptUsages.get(concept)!
  if (
    typeof concept.type !== "string" &&
    concept.type.complex_type === "table" &&
    concept.type.variant_parameter_groups
  ) {
    createVariantParameterConcept(context, concept, conceptUsage, statements)
    return
  }

  const tableOrArray = tableOrArrayConcepts.get(concept)
  if (tableOrArray) {
    createTableOrArrayConcept(context, statements, concept, tableOrArray)
    return
  }

  const { mainType, description, altWriteType } = mapConceptType(
    context,
    concept.type,
    {
      contextName: concept.name,
      existingDef: existing,
    },
    conceptUsage
  )

  const mainResult = typeToDeclaration(mainType, concept.name)
  if (description) {
    concept.description += "\n\n" + description
  }

  const writeName = `${concept.name}Write`
  let tags: ts.JSDocTag[] | undefined
  if (altWriteType) {
    tags = [createSeeTag(writeName)]
  }
  addJsDoc(context, mainResult, concept, concept.name, tags)
  statements.add(mainResult)

  if (altWriteType) {
    const writeResult = typeToDeclaration(altWriteType, writeName)
    addJsDoc(
      context,
      writeResult,
      {
        description: getWriteDescription(concept),
      },
      concept.name
    )

    statements.add(writeResult)

    const deprecatedReadResult = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      concept.name + "Read",
      undefined,
      ts.factory.createTypeReferenceNode(concept.name)
    )
    addJsDoc(context, deprecatedReadResult, { description: "" }, undefined, [createDeprecatedTag(concept.name)])
    statements.add(deprecatedReadResult)
  }
}

function getWriteDescription(concept: Concept): string {
  return `Write form of {@link ${concept.name}}, where table-or-array concepts are allowed to take an array form.`
}

function typeToDeclaration(type: ts.TypeNode, name: string): ts.InterfaceDeclaration | ts.TypeAliasDeclaration {
  if (ts.isTypeLiteralNode(type)) {
    return ts.factory.createInterfaceDeclaration(undefined, undefined, name, undefined, undefined, type.members)
  } else {
    return ts.factory.createTypeAliasDeclaration(undefined, undefined, name, undefined, type)
  }
}

function createTableOrArrayConcept(
  context: GenerationContext,
  statements: StatementsList,
  concept: Concept,
  tableOrArray: { table: TableComplexType; array: TableComplexType }
): void {
  // /** description */
  // interface Concept { ...table read }

  // /** Array form of @{link Concept}. */
  // type ConceptArray = Array write

  // /** @deprecated Use @{link Concept} instead */
  // type ConceptTable = Concept

  const tableForm = mapType(context, tableOrArray.table, concept.name, RWUsage.ReadWrite)
  const arrayForm = mapType(context, tableOrArray.array, concept.name, RWUsage.Write).mainType
  assert(ts.isTypeLiteralNode(tableForm.mainType))
  assert(tableOrArray.array.complex_type === "tuple")

  const name = concept.name
  const arrayName = `${concept.name}Array`

  const conceptInterface = ts.factory.createInterfaceDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    undefined,
    tableForm.mainType.members
  )
  addJsDoc(context, conceptInterface, concept, concept.name, [createSeeTag(arrayName)])
  statements.add(conceptInterface)

  const conceptArray = ts.factory.createTypeAliasDeclaration(undefined, undefined, arrayName, undefined, arrayForm)
  const arrayDescription = `Array form of {@link ${concept.name}}.`
  addJsDoc(context, conceptArray, { description: arrayDescription }, name, [createSeeTag(name)])
  statements.add(conceptArray)

  const conceptTable = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    name + "Table",
    undefined,
    ts.factory.createTypeReferenceNode(name)
  )
  addFakeJSDoc(conceptTable, ts.factory.createJSDocComment("", [createDeprecatedTag(name)]))
  statements.add(conceptTable)

  context.typeNames[arrayName] = name
}

function createDeprecatedTag(useInstead: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(
    ts.factory.createIdentifier("deprecated"),
    `Use {@link ${useInstead}} instead`
  )
}
