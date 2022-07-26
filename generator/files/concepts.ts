import ts from "typescript"
import DefinitionsGenerator, { Statements } from "../DefinitionsGenerator"
import { Concept } from "../FactorioApiJson"
import { mapType } from "../types"
import { sortByOrder } from "../util"

export function preprocessConcepts(generator: DefinitionsGenerator) {
  for (const concept of generator.apiDocs.concepts) {
    generator.typeNames[concept.name] = concept.name

    const existing = generator.manualDefinitions[concept.name]

    let readType: string | undefined
    const writeType: string = concept.name

    readType = existing?.annotations.readType?.[0]
    const isTableOrArrayConcept = concept.type === "table_or_array"

    if (isTableOrArrayConcept || existing?.annotations.tableOrArray) {
      readType ??= concept.name + "Table"
    }
    if (isTableOrArrayConcept) {
      generator.typeNames[concept.name + "Table"] = concept.name
      generator.typeNames[concept.name + "Array"] = concept.name
    }
    if (readType) {
      // if (!writeType) throw new Error("Read and write types should be specified together")
      generator.readWriteConcepts.set(concept.name, { read: readType, write: writeType })
    }
  }

  preprocessConceptUsages(generator)
}

function preprocessConceptUsages(generator: DefinitionsGenerator) {
  // noop
}

export function generateConcepts(generator: DefinitionsGenerator) {
  generator.apiDocs.concepts.sort(sortByOrder)

  const statements = generator.newStatements()
  for (const concept of generator.apiDocs.concepts) {
    const declaration = generateConcept(generator, concept, statements)
    if (declaration) {
      generator.addJsDoc(declaration, concept, concept.name)
      statements.add(declaration)
    }
  }
  generator.addFile("concepts", statements)
}

function generateConcept(generator: DefinitionsGenerator, concept: Concept, statements: Statements) {
  const existing = generator.manualDefinitions[concept.name]
  if (existing?.kind === "namespace") {
    throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
  }
  if (existing?.annotations.tableOrArray) {
    generator.warning("todo: tableOrArray annotation")
  }

  const type = mapType(generator, concept.type, { baseName: concept.name }).mainType
  if (ts.isTypeLiteralNode(type)) {
    // create interface
    return ts.factory.createInterfaceDeclaration(undefined, undefined, concept.name, undefined, undefined, type.members)
  }
  return ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
}
