import { assertNever, sortByOrder } from "../util"
import ts from "typescript"
import { getAnnotations } from "../manualDefinitions"
import { printer, Types } from "../genUtil"
import DefinitionsGenerator, { Statements } from "../DefinitionsGenerator"
import { Concept, TableOrArrayConcept } from "../FactorioApiJson"
import assert from "node:assert"

export function preprocessConcepts(generator: DefinitionsGenerator) {
  for (const concept of generator.apiDocs.concepts) {
    generator.typeNames[concept.name] = concept.name

    const existing = generator.manualDefinitions[concept.name]

    let readType: string | undefined
    let writeType: string | undefined

    readType = existing?.annotations.readType?.[0]
    const isTableOrArrayConcept = concept.category === "table_or_array"

    if (isTableOrArrayConcept || existing?.annotations.tableOrArray) {
      readType ??= concept.name + "Table"
      writeType ??= concept.name
    }
    if (isTableOrArrayConcept) {
      generator.typeNames[concept.name + "Table"] = concept.name
      generator.typeNames[concept.name + "Array"] = concept.name
    }
    if (readType) {
      assert(writeType, "Read and write types should be specified together")
      generator.readWriteConcepts.set(concept.name, { read: readType, write: writeType })
    }
  }
  preprocessConceptUsages(generator)
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

function preprocessConceptUsages(generator: DefinitionsGenerator) {
  propagateConceptUsages(generator.apiDocs.concepts)
  const variedUsageConcepts = generator.apiDocs.concepts.filter((x) => x.category === "table" || x.category === "union")
  for (let i = 0; i < 30; i++) {
    if (!propagateConceptUsages(variedUsageConcepts)) return
  }
  throw new Error("Concepts propagating infinite loop")

  function propagateConceptUsages(concepts: Concept[]) {
    let anyPropagated = false
    for (const concept of concepts) {
      if (
        concept.category === "concept" ||
        concept.category === "flag" ||
        concept.category === "enum" ||
        concept.category === "table_or_array"
      )
        continue
      const existing = generator.manualDefinitions[concept.name]
      if (existing?.kind === "namespace") {
        throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
      }
      if (concept.category === "struct") {
        for (const attribute of concept.attributes) {
          generator.mapAttribute(attribute, concept.name, existing)
        }
        anyPropagated = true
      } else {
        let read: boolean
        let write: boolean
        const rwUsage = generator.conceptUsage.get(concept.name)
        if (concept.category === "filter") {
          read = true
          write = true
        } else {
          assert(rwUsage)
          read = rwUsage.read && !rwUsage.readProcessed
          write = rwUsage.write && !rwUsage.writeProcessed
        }

        if (!read && !write) continue
        if (concept.category === "union") {
          for (const option of concept.options) {
            generator.mapTypeBasic(option.type, read, write)
          }
        } else if (concept.category === "table" || concept.category === "filter") {
          for (const parameter of concept.parameters) {
            generator.mapTypeBasic(parameter.type, read, write)
          }
          if (concept.variant_parameter_groups) {
            for (const parameter of concept.variant_parameter_groups.flatMap((x) => x.parameters)) {
              generator.mapTypeBasic(parameter.type, read, write)
            }
          }
        } else {
          assertNever(concept)
        }
        if (rwUsage) {
          if (read) rwUsage.readProcessed = true
          if (write) rwUsage.writeProcessed = true
        }
        anyPropagated = true
      }
    }
    return anyPropagated
  }
}

function generateConcept(generator: DefinitionsGenerator, concept: Concept, statements: Statements) {
  function createTypeAlias(type: ts.TypeNode): ts.TypeAliasDeclaration {
    return ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
  }

  const existing = generator.manualDefinitions[concept.name]
  if (existing?.kind === "namespace") {
    throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
  }
  if (existing?.annotations.tableOrArray) {
    if (concept.category !== "table" && concept.category !== "concept") {
      throw new Error(
        "table_or_array concept override cannot be defined on concept that is not a table or concept: " + concept.name
      )
    }
    if (concept.category === "table") {
      if (concept.variant_parameter_groups) {
        throw new Error(
          "table_or_array concept override cannot be defined on concept with variant parameter groups: " + concept.name
        )
      }
      ;(concept as unknown as TableOrArrayConcept).category = "table_or_array"
    }
  }

  if (concept.category === "concept") {
    if (existing) {
      const declaration = existing.node
      if (getAnnotations(declaration).omit) return undefined
      ts.setEmitFlags(declaration, ts.EmitFlags.NoComments)
      return declaration
    } else {
      generator.warnIncompleteDefinition(`No concept definition given for ${concept.name}.`)
      return createTypeAlias(Types.unknown)
    }
  } else if (concept.category === "union") {
    const types = concept.options
      .sort(sortByOrder)
      .map((option) => generator.mapTypeWithTransforms(option, concept.name, option.type, false, true).write)
    concept.description += concept.options
      .map(
        (option, i) =>
          option.description &&
          ` - ${
            typeof option.type === "string"
              ? option.type
              : printer.printNode(ts.EmitHint.Unspecified, types[i], generator.manualDefinitionsSource)
          }: ${option.description}`
      )
      .filter((x) => !!x)
      .join("\n\n")
    return createTypeAlias(ts.factory.createUnionTypeNode(types))
  } else if (concept.category === "struct") {
    return ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      concept.name,
      undefined,
      undefined,
      concept.attributes.sort(sortByOrder).flatMap((attr) => generator.mapAttribute(attr, concept.name, existing))
    )
  } else if (concept.category === "flag") {
    return ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      concept.name,
      undefined,
      undefined,
      concept.options.sort(sortByOrder).map((flag) =>
        generator.mapParameterToProperty(
          {
            ...flag,
            type: "boolean",
            optional: true,
          },
          concept.name,
          true,
          false
        )
      )
    )
  } else if (concept.category === "table" || concept.category === "filter") {
    let rwUsage: { read: boolean; write: boolean }
    if (concept.category === "table") {
      rwUsage = generator.conceptUsage.get(concept.name)!
    } else {
      rwUsage = { read: true, write: true }
    }
    if (!rwUsage.read && !rwUsage.write) {
      generator.warnIncompleteDefinition(`Concept ${concept.name} was found to be neither read nor write`)
    }
    if (concept.variant_parameter_groups) {
      generator.createVariantParameterTypes(concept.name, concept, statements, rwUsage.read, rwUsage.write, concept)
      return undefined
    } else {
      return ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        concept.name,
        undefined,
        undefined,
        concept.parameters
          .sort(sortByOrder)
          .map((m) => generator.mapParameterToProperty(m, concept.name, rwUsage.read, rwUsage.write, existing))
      )
    }
  } else if (concept.category === "enum") {
    return createTypeAlias(
      ts.factory.createUnionTypeNode(
        concept.options
          .sort(sortByOrder)
          .map((option) => generator.addJsDoc(Types.stringLiteral(option.name), option, undefined))
      )
    )
  } else if (concept.category === "table_or_array") {
    const parameters = concept.parameters
      .sort(sortByOrder)
      .map((param) => generator.mapParameterToProperty(param, concept.name, false, true))

    statements.add(
      ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        concept.name + "Table",
        undefined,
        undefined,
        parameters
      )
    )

    statements.add(
      ts.factory.createTypeAliasDeclaration(
        undefined,
        undefined,
        concept.name + "Array",
        undefined,
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.ReadonlyKeyword,
          ts.factory.createTupleTypeNode(
            parameters.map((member) => {
              const property = member as ts.PropertySignature
              return ts.factory.createNamedTupleMember(
                undefined,
                property.name as ts.Identifier,
                property.questionToken,
                property.type!
              )
            })
          )
        )
      )
    )

    return createTypeAlias(
      ts.factory.createUnionTypeNode([
        ts.factory.createTypeReferenceNode(concept.name + "Table"),
        ts.factory.createTypeReferenceNode(concept.name + "Array"),
      ])
    )
  } else {
    assertNever(concept)
  }
}
