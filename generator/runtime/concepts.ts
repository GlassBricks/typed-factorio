import assert from "assert"
import ts from "typescript"
import { Concept, TableType, TupleType } from "../FactorioRuntimeApiJson.js"
import { DeclarationDef } from "../ManualDefinitions"
import { FactorioModule } from "../OutputFile.js"
import { generateBuiltinType } from "../builtin.js"
import { addJsDoc, createSeeTag } from "../documentation.js"
import { Modifiers } from "../genUtil.js"
import { RWUsage, mapConceptType, mapRuntimeType, typeToDeclaration } from "../types.js"
import { createVariantParameterTypes } from "../variantParameterGroups.js"
import { analyzeConcept } from "./concept-usage-analysis"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessConcepts(context: RuntimeGenerationContext): void {
  for (const concept of context.concepts.values()) {
    context.tsToFactorioType.set(concept.name, concept.name)
    analyzeConcept(context, concept)
  }
}

export function generateConcepts(context: RuntimeGenerationContext): void {
  context.addFile("concepts", FactorioModule.Runtime, () => {
    for (const concept of context.concepts.values()) {
      generateConcept(context, concept)
    }
    // manually added imports for now
    context.currentFile.addImport(FactorioModule.Common, "VersionString")
  })
}

function createVariantParameterConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  conceptUsage: RWUsage,
): void {
  const {
    description,
    declarations: [readDecl, writeDecl],
  } = createVariantParameterTypes(context, concept.name, concept.type as TableType, conceptUsage)
  addJsDoc(context, readDecl, concept, concept.name, { post: description })
  if (writeDecl) {
    addJsDoc(context, writeDecl, { description: getWriteDescription(concept) }, concept.name)
  }
}

function generateNormalConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  manualDef: DeclarationDef | undefined,
  conceptUsage: RWUsage,
) {
  const conceptType = mapConceptType(
    context,
    concept.type,
    {
      contextName: concept.name,
      existingDef: manualDef,
      dontExpandReadWriteTypes: concept.manuallyAdded,
    },
    conceptUsage,
  )
  if (!conceptType) return
  const { mainType, description, altWriteType } = conceptType
  let mainResult = typeToDeclaration(context, mainType, concept.name)

  const writeName = `${concept.name}Write`
  let tags: ts.JSDocTag[] | undefined
  if (altWriteType) {
    tags = [createSeeTag(writeName)]
  }

  if (manualDef?.node && ts.isTypeAliasDeclaration(manualDef.node) && manualDef.node.typeParameters) {
    assert(ts.isTypeAliasDeclaration(mainResult))
    mainResult = ts.factory.updateTypeAliasDeclaration(
      mainResult,
      mainResult.modifiers,
      mainResult.name,
      manualDef.node.typeParameters,
      mainResult.type,
    )
  }

  addJsDoc(context, mainResult, concept, concept.name, { tags, post: description })
  context.currentFile.add(mainResult)

  if (altWriteType) {
    const writeResult = typeToDeclaration(context, altWriteType, writeName)
    addJsDoc(context, writeResult, { description: getWriteDescription(concept) }, concept.name)
    context.currentFile.add(writeResult)
  }
}

function generateConcept(context: RuntimeGenerationContext, concept: Concept): void {
  const manualDef = context.manualDefs.getDeclaration(concept.name)
  const conceptUsage = context.conceptUsageAnalysis.usages.get(concept)
  if (!conceptUsage) {
    context.warning(`Unknown concept usage for ${concept.name}`)
    return
  }
  if (
    typeof concept.type !== "string" &&
    concept.type.complex_type === "table" &&
    concept.type.variant_parameter_groups
  ) {
    return createVariantParameterConcept(context, concept, conceptUsage)
  }

  const tableOrArray = context.conceptUsageAnalysis.tableOrArrayConcepts.get(concept)
  if (tableOrArray) {
    const inverted = !!manualDef?.annotations.invertTableOrArray
    return createTableOrArrayConcept(context, concept, tableOrArray, inverted)
  }
  if (typeof concept.type === "object" && concept.type.complex_type === "builtin") {
    return generateBuiltinType(context, concept)
  }

  return generateNormalConcept(context, concept, manualDef, conceptUsage)
}

function getWriteDescription(concept: Concept): string {
  return `Write form of {@link ${concept.name}}, where some properties allow additional values as input compared to the read form.`
}

function createTableOrArrayConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  tableOrArray: { table: TableType; array: TupleType },
  inverted: boolean,
): void {
  // /** description */
  // interface Concept { ...table read }

  // /** Array form of @{link Concept}. */
  // type ConceptArray = Array write

  const name = concept.name
  const arrayName = `${concept.name}Array`

  const tableForm = mapRuntimeType(context, tableOrArray.table, concept.name, RWUsage.ReadWrite)

  const existingArrayForm = context.manualDefs.getDeclaration(arrayName)
  const arrayForm =
    existingArrayForm && ts.isTypeAliasDeclaration(existingArrayForm.node)
      ? existingArrayForm.node.type
      : mapRuntimeType(context, tableOrArray.array, concept.name, RWUsage.Write).mainType

  function createTableForm(name: string) {
    assert(ts.isTypeLiteralNode(tableForm.mainType))
    return ts.factory.createInterfaceDeclaration(
      [Modifiers.export],
      name,
      undefined,
      undefined,
      tableForm.mainType.members,
    )
  }

  function createArrayForm(name: string) {
    return ts.factory.createTypeAliasDeclaration([Modifiers.export], name, undefined, arrayForm)
  }

  const mainForm = !inverted ? createTableForm(name) : createArrayForm(name)
  const altName = !inverted ? arrayName : name + "Table"
  addJsDoc(context, mainForm, concept, name, { tags: [createSeeTag(altName)] })
  context.currentFile.add(mainForm)

  const altForm = !inverted ? createArrayForm(altName) : createTableForm(altName)
  const altFormName = `${!inverted ? "Array" : "Table"} form of {@link ${concept.name}}.`
  addJsDoc(context, altForm, { description: altFormName }, name, {
    tags: [createSeeTag(name)],
  })
  context.currentFile.add(altForm)

  context.tsToFactorioType.set(arrayName, name)
}
