import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import GenerationContext from "../GenerationContext"
import { decapitalize, Types } from "../genUtil"

export interface IndexType {
  name: string
  mainAttributePath: {
    parent: string
    name?: string
  }
  identificationConcept?: string
  attributePattern?: RegExp
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
  },
  {
    name: "SurfaceIndex",
    mainAttributePath: {
      parent: "LuaSurface",
      name: "index",
    },
    identificationConcept: "SurfaceIdentification",
    attributePattern: /^surface_index$/,
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

export function preprocessIndexTypes(context: GenerationContext): void {
  for (const indexType of IndexTypes) {
    context.typeNames[indexType.name] = indexType.name
  }
}

export function generateIndexTypesFile(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "index-types")
  for (const indexType of IndexTypes) {
    // type ${name} = uint & { _${name}Brand: void } ( | 1 )
    const typeArguments = [Types.stringLiteral(`_${decapitalize(indexType.name)}Brand`)]
    const typeNode = ts.factory.createIntersectionTypeNode([
      ts.factory.createTypeReferenceNode(indexType.typeOverride ?? "uint"),
      ts.factory.createTypeReferenceNode("IndexBrand", typeArguments),
    ])
    const statement = ts.factory.createTypeAliasDeclaration(undefined, undefined, indexType.name, undefined, typeNode)
    const { parent, name } = indexType.mainAttributePath
    const description = `See [${parent}.${name}](${parent}::${name}).\n\nIf using strict-index-types, and you need to use a plain number for this type, you can use a cast, e.g. \`1 as ${indexType.name}\`.`
    addJsDoc(context, statement, { description }, undefined, undefined)
    statements.add(statement)
  }

  return statements.getResult()
}
