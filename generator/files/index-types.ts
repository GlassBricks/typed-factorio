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
  const statements = generator.newStatements()
  for (const indexType of IndexTypes) {
    // type ${name} = uint & { _${name}Brand: void } ( | 1 )
    let typeNode: ts.TypeNode = ts.factory.createIntersectionTypeNode([
      ts.factory.createTypeReferenceNode(indexType.typeOverride ?? "uint"),
      ts.factory.createTypeLiteralNode([
        ts.factory.createPropertySignature(undefined, `_${decapitalize(indexType.name)}Brand`, undefined, Types.void),
      ]),
    ])
    if (indexType.allowOne) {
      typeNode = ts.factory.createUnionTypeNode([typeNode, Types.numberLiteral(1)])
    }
    const statement = ts.factory.createTypeAliasDeclaration(undefined, undefined, indexType.name, undefined, typeNode)
    const { parent, name } = indexType.mainAttributePath
    const fakeDescription = `See [${parent}.${name}](${parent}::${name}).\n\nIf you really need to use a number/numeric literal for this type, you can use a cast, e.g. \`2 as ${indexType.name}\`.`
    generator.addJsDoc(statement, { description: fakeDescription }, undefined)
    statements.add(statement)
  }
  generator.addFile("index-types", statements)
}
