import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { RuntimeGenerationContext } from "../GenerationContext.js"
import { decapitalize } from "../genUtil.js"
import { DeclarationType } from "../OutputFile.js"

export interface IndexType {
  name: string
  mainAttributePath: {
    parent: string
    name?: string
  }
  identificationConcept?: string
  attributePattern?: RegExp
  expectedTypes?: string[] // default uint
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
    name: "ForceIndex",
    expectedTypes: ["uint", "uint8"],
    mainAttributePath: {
      parent: "LuaForce",
      name: "index",
    },
    identificationConcept: "ForceIdentification",
    attributePattern: /^force_index$/,
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
    expectedTypes: ["uint64"],
    mainAttributePath: {
      parent: "LuaBootstrap",
      name: "register_on_entity_destroyed",
    },
    attributePattern: /^registration_number$/,
  },
]

export function preprocessIndexTypes(context: RuntimeGenerationContext): void {
  for (const indexType of IndexTypes) {
    context.references.set(indexType.name, indexType.name)
  }
}

export function generateIndexTypesFile(context: RuntimeGenerationContext): void {
  context.addFile("index-types", DeclarationType.Types, () => {
    for (const indexType of IndexTypes) {
      // type ${name} = uint & { _${name}Brand: void }
      const typeNode = ts.factory.createIntersectionTypeNode([
        ts.factory.createTypeReferenceNode(indexType.expectedTypes?.[0] ?? "uint"),
        ts.factory.createTypeLiteralNode([
          ts.factory.createPropertySignature(
            undefined,
            ts.factory.createIdentifier(`_${decapitalize(indexType.name)}Brand`),
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
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
