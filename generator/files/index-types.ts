import DefinitionsGenerator from "../DefinitionsGenerator"
import ts from "typescript"
import { decapitalize, Types } from "../genUtil"

export interface IndexType {
  name: string
  mainAttributePath: {
    parent: string
    name?: string
  }
  identificationConcept?: string
  attributePattern?: RegExp
  allowOne?: boolean
  typeOverride?: string // default uint
}

export const IndexTypes: IndexType[] = [
  {
    name: "PlayerIndex",
    mainAttributePath: {
      parent: "LuaPlayer",
      name: "index",
    },
    identificationConcept: "PlayerIdentification",
    attributePattern: /^(player_index|by_player)$/,
    allowOne: true,
  },
  {
    name: "SurfaceIndex",
    mainAttributePath: {
      parent: "LuaSurface",
      name: "index",
    },
    identificationConcept: "SurfaceIdentification",
    attributePattern: /^surface_index$/,
    allowOne: true,
  },
  {
    name: "UnitNumber",
    mainAttributePath: {
      parent: "LuaEntity",
      name: "unit_number",
    },
    attributePattern: /^(ghost_)?unit_number$/,
  },
  {
    name: "GuiElementIndex",
    mainAttributePath: {
      parent: "LuaGuiElement",
      name: "index",
    },
  },
  {
    name: "RegistrationNumber",
    typeOverride: "uint64",
    mainAttributePath: {
      parent: "LuaBootstrap",
      name: "register_on_entity_destroyed",
    },
    attributePattern: /^registration_number$/,
  },
]

export function preprocessIndexTypes(generator: DefinitionsGenerator): void {
  for (const indexType of IndexTypes) {
    generator.typeNames[indexType.name] = indexType.name
  }
}

export function generateIndexTypesFile(generator: DefinitionsGenerator): void {
  const strict = generator.newStatements()
  const nonStrict = generator.newStatements()
  for (const indexType of IndexTypes) {
    // type ${name} = uint & { _${name}Brand: void } ( | 1 )
    const typeName = indexType.typeOverride ?? "uint"
    let strictTypeNode: ts.TypeNode = ts.factory.createIntersectionTypeNode([
      ts.factory.createTypeReferenceNode(typeName),
      ts.factory.createTypeLiteralNode([
        ts.factory.createPropertySignature(undefined, `_${decapitalize(indexType.name)}Brand`, undefined, Types.void),
      ]),
    ])
    if (indexType.allowOne) {
      strictTypeNode = ts.factory.createUnionTypeNode([strictTypeNode, Types.numberLiteral(1)])
    }
    const strictStatement = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      indexType.name,
      undefined,
      strictTypeNode
    )
    const nonStrictStatement = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      indexType.name,
      undefined,
      ts.factory.createTypeReferenceNode(typeName)
    )

    const { parent, name } = indexType.mainAttributePath
    const seeLink = `See [${parent}.${name}](${parent}::${name}).`

    const strictDescription = `${seeLink}\n\nIf you need to use a number/numeric literal for this type, you can use a cast, e.g. \`2 as ${indexType.name}\`.`
    generator.addJsDoc(strictStatement, { description: strictDescription }, undefined)
    strict.add(strictStatement)

    const nonStrictDescription = `${seeLink}.\n\nThis can be a "branded" type for stricter types; see docs on how to opt-in to this.`
    generator.addJsDoc(nonStrictStatement, { description: nonStrictDescription }, undefined)
    nonStrict.add(nonStrictStatement)
  }
  generator.addFile("index-types", nonStrict)
  generator.addFile("index-types-strict", strict)
}
