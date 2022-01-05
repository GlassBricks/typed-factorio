import { assertNever, sortByOrder } from "../util"
import ts from "typescript"
import { getAnnotations } from "../manualDefinitionsProcessing"
import { printer, Types } from "../genUtil"
import DefinitionsGenerator from "../DefinitionsGenerator"

export default function generateConcepts(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  for (const concept of generator.apiDocs.concepts.sort(sortByOrder)) {
    let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration

    function createTypeAlias(type: ts.TypeNode): ts.TypeAliasDeclaration {
      return ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
    }

    const existing = generator.manualDefinitions[concept.name]
    if (existing?.kind === "namespace") {
      throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
    }

    if (concept.category === "concept") {
      if (existing) {
        declaration = existing.node
        if (getAnnotations(declaration).omit) continue
        ts.setEmitFlags(declaration, ts.EmitFlags.NoComments)
      } else {
        generator.warnIncompleteDefinition(`No concept definition given for ${concept.name}.`)
        declaration = createTypeAlias(Types.unknown)
      }
    } else if (concept.category === "union") {
      const types = concept.options
        .sort(sortByOrder)
        .map((option) => generator.mapTypeWithTransforms(option, option.type, concept.name, false))
      declaration = createTypeAlias(ts.factory.createUnionTypeNode(types))
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
    } else if (concept.category === "struct") {
      declaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        concept.name,
        undefined,
        undefined,
        concept.attributes.sort(sortByOrder).flatMap((attr) => generator.mapAttribute(attr, concept.name, existing))
      )
    } else if (concept.category === "flag") {
      declaration = ts.factory.createInterfaceDeclaration(
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
            concept.name
          )
        )
      )
    } else if (concept.category === "table" || concept.category === "filter") {
      if (concept.variant_parameter_groups) {
        generator.createVariantParameterTypes(concept.name, concept, statements, concept)
        continue
      } else {
        declaration = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          concept.name,
          undefined,
          undefined,
          concept.parameters.sort(sortByOrder).map((m) => generator.mapParameterToProperty(m, concept.name, existing))
        )
      }
    } else if (concept.category === "enum") {
      declaration = createTypeAlias(
        ts.factory.createUnionTypeNode(
          concept.options
            .sort(sortByOrder)
            .map((option) => generator.addJsDoc(Types.stringLiteral(option.name), option, undefined))
        )
      )
    } else if (concept.category === "table_or_array") {
      const parameters = concept.parameters
        .sort(sortByOrder)
        .map((param) => generator.mapParameterToProperty(param, concept.name))

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

      declaration = createTypeAlias(
        ts.factory.createUnionTypeNode([
          ts.factory.createTypeReferenceNode(concept.name + "Table"),
          ts.factory.createTypeReferenceNode(concept.name + "Array"),
        ])
      )
    } else {
      assertNever(concept)
    }
    generator.addJsDoc(declaration, concept, concept.name)
    statements.add(declaration)
  }
  generator.addFile("concepts", statements)
}
