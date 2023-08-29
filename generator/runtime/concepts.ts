import assert from "assert"
import ts from "typescript"
import { addJsDoc, createSeeTag } from "../documentation.js"
import { Concept, TableType } from "../FactorioRuntimeApiJson.js"
import { Modifiers } from "../genUtil.js"
import {
  finalizeConceptUsageAnalysis,
  recordConceptDependencies,
  RWUsage,
  setReadWriteType,
} from "../read-write-types.js"
import { mapConceptType, mapRuntimeType, typeToDeclaration } from "../types.js"
import { sortByOrder } from "../util.js"
import { createVariantParameterTypes } from "../variantParameterGroups.js"
import { DeclarationType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"

const tableOrArrayConcepts = new Map<Concept, { table: TableType; array: TableType }>()
/**
 * Should be last to preprocess
 * @param context
 */
export function preprocessConcepts(context: RuntimeGenerationContext): void {
  const concepts = context.apiDocs.concepts
  concepts.sort(sortByOrder)

  for (const concept of concepts) {
    context.references.set(concept.name, concept.name)
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
  context: RuntimeGenerationContext,
  concept: Concept
):
  | {
      table: TableType
      array: TableType
    }
  | undefined {
  const type = concept.type
  if (typeof type === "string" || type.complex_type !== "union" || type.options.length !== 2) return undefined
  const tableType = type.options.find((o) => typeof o !== "string" && o.complex_type === "table")
  const arrayType = type.options.find((o) => typeof o !== "string" && o.complex_type === "tuple")
  if (!tableType || !arrayType) return undefined
  return {
    table: tableType as TableType,
    array: arrayType as TableType,
  }
}

export function generateConcepts(context: RuntimeGenerationContext): void {
  context.addFile("concepts", DeclarationType.Types, () => {
    for (const concept of context.apiDocs.concepts) {
      generateConcept(context, concept)
    }
  })
}

function createVariantParameterConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  conceptUsage: RWUsage
): void {
  const {
    description,
    declarations: [readDecl, writeDecl],
  } = createVariantParameterTypes(context, concept.name, concept.type as TableType, conceptUsage)
  concept.description += `\n\n${description}`
  addJsDoc(context, readDecl, concept, concept.name)
  if (writeDecl) {
    addJsDoc(context, writeDecl, { description: getWriteDescription(concept) }, concept.name)
  }
}
function generateConcept(context: RuntimeGenerationContext, concept: Concept): void {
  const existing = context.getInterfaceDef(concept.name)

  if (existing?.annotations) {
    if (existing.annotations.replace) {
      const node = existing.node
      context.currentFile.add(node)
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
    createVariantParameterConcept(context, concept, conceptUsage)
    return
  }

  const tableOrArray = tableOrArrayConcepts.get(concept)
  if (tableOrArray) {
    createTableOrArrayConcept(context, concept, tableOrArray)
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
  context.currentFile.add(mainResult)

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

    context.currentFile.add(writeResult)
  }
}

function getWriteDescription(concept: Concept): string {
  return `Write form of {@link ${concept.name}}, where table-or-array concepts are allowed to take an array form.`
}

function createTableOrArrayConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  tableOrArray: { table: TableType; array: TableType }
): void {
  // /** description */
  // interface Concept { ...table read }

  // /** Array form of @{link Concept}. */
  // type ConceptArray = Array write

  const tableForm = mapRuntimeType(context, tableOrArray.table, concept.name, RWUsage.ReadWrite)
  const arrayForm = mapRuntimeType(context, tableOrArray.array, concept.name, RWUsage.Write).mainType
  assert(ts.isTypeLiteralNode(tableForm.mainType))
  assert(tableOrArray.array.complex_type === "tuple")

  const name = concept.name
  const arrayName = `${concept.name}Array`

  const conceptInterface = ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    name,
    undefined,
    undefined,
    tableForm.mainType.members
  )
  addJsDoc(context, conceptInterface, concept, concept.name, [createSeeTag(arrayName)])
  context.currentFile.add(conceptInterface)

  const conceptArray = ts.factory.createTypeAliasDeclaration([Modifiers.export], arrayName, undefined, arrayForm)
  const arrayDescription = `Array form of {@link ${concept.name}}.`
  addJsDoc(context, conceptArray, { description: arrayDescription }, name, [createSeeTag(name)])
  context.currentFile.add(conceptArray)

  context.references.set(arrayName, name)
}
