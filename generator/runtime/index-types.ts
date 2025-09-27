import ts from "typescript"
import { FactorioModule } from "../OutputFile.js"
import { addJsDoc } from "../documentation.js"
import { decapitalize } from "../genUtil.js"
import { RuntimeGenerationContext } from "./index.js"

export type IntName = `${"" | "u"}int${number}`

export interface IndexType {
  name: string
  mainAttributePath: {
    parent: string
    name?: string
  }
  identificationConcept?: string
  attributePattern?: RegExp
  expectedTypes: IntName[]
}

export const INDEX_TYPES: IndexType[] = [
  {
    name: "PlayerIndex",
    expectedTypes: ["uint32"],
    mainAttributePath: {
      parent: "LuaPlayer",
      name: "index",
    },
    identificationConcept: "PlayerIdentification",
    attributePattern: /^(player_index|by_player)$/,
  },
  {
    name: "SurfaceIndex",
    expectedTypes: ["uint32"],
    mainAttributePath: {
      parent: "LuaSurface",
      name: "index",
    },
    identificationConcept: "SurfaceIdentification",
    attributePattern: /^surface_index$/,
  },
  {
    name: "ForceIndex",
    expectedTypes: ["uint32", "uint8"],
    mainAttributePath: {
      parent: "LuaForce",
      name: "index",
    },
    identificationConcept: "ForceIdentification",
    attributePattern: /^force_index$/,
  },
  {
    name: "UnitNumber",
    expectedTypes: ["uint64", "uint32"],
    mainAttributePath: {
      parent: "LuaEntity",
      name: "unit_number",
    },
    attributePattern: /^(ghost_)?unit_number$/,
  },
  {
    name: "GuiElementIndex",
    expectedTypes: ["uint32"],
    mainAttributePath: {
      parent: "LuaGuiElement",
      name: "index",
    },
  },
  {
    name: "RegistrationNumber",
    expectedTypes: ["uint64"],
    mainAttributePath: {
      parent: "LuaBootstrap",
      name: "register_on_entity_destroyed",
    },
    attributePattern: /^registration_number$/,
  },
]

export function preprocessIndexTypes(context: RuntimeGenerationContext): void {
  for (const indexType of INDEX_TYPES) {
    context.tsToFactorioType.set(indexType.name, indexType.name)
  }
}

export function generateIndexTypesFile(context: RuntimeGenerationContext): void {
  context.addFile("index-types", FactorioModule.Runtime, () => {
    for (const indexType of INDEX_TYPES) {
      // type ${name} = uint32 & { _${name}Brand: void }
      const typeNode = ts.factory.createIntersectionTypeNode([
        ts.factory.createTypeReferenceNode(indexType.expectedTypes[0]),
        ts.factory.createTypeLiteralNode([
          ts.factory.createPropertySignature(
            undefined,
            ts.factory.createIdentifier(`_${decapitalize(indexType.name)}Brand`),
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
          ),
        ]),
      ])
      const statement = ts.factory.createTypeAliasDeclaration(undefined, indexType.name, undefined, typeNode)
      const { parent, name } = indexType.mainAttributePath
      const description = `See [${parent}.${name}](runtime:${parent}::${name}).\n\nYou can cast a raw number to this type, e.g. \`1 as ${indexType.name}\`.`
      addJsDoc(context, statement, { description }, undefined, undefined)
      context.currentFile.add(statement)
    }
  })
}
