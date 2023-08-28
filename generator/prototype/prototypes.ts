import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { sortByOrder } from "../util.js"
import { Property, Prototype } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { Modifiers, Tokens } from "../genUtil.js"
import { mapPrototypeType } from "../types.js"

export function preprocessPrototypes(context: PrototypeGenerationContext): void {
  for (const prototype of context.apiDocs.prototypes.sort(sortByOrder)) {
    context.references.set(prototype.name, prototype.name)
  }
}

export function generatePrototypes(context: PrototypeGenerationContext): void {
  context.addFile("prototypes", DeclarationType.Types, () => {
    for (const prototype of context.apiDocs.prototypes.sort(sortByOrder)) {
      generatePrototype(context, prototype)
    }
  })
}

function generatePrototype(context: PrototypeGenerationContext, prototype: Prototype): void {
  const heritageClauses = getHeritageClauses(context, prototype)

  const members = getMembers(context, prototype)

  const intf = ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    prototype.name,
    undefined,
    heritageClauses,
    members
  )

  addJsDoc(context, intf, prototype, prototype.name)
  context.currentFile.add(intf)
}

function getMembers(context: PrototypeGenerationContext, prototype: Prototype): ts.TypeElement[] {
  const result: ts.TypeElement[] = []
  for (const property of prototype.properties.sort(sortByOrder)) {
    result.push(...mapProperty(context, property, prototype.name))
  }
  return result
}

function mapProperty(context: PrototypeGenerationContext, property: Property, parentName: string): ts.TypeElement[] {
  const type = mapPrototypeType(context, property.type)

  const mainProperty = ts.factory.createPropertySignature(
    undefined,
    property.name,
    property.optional ? Tokens.question : undefined,
    type
  )
  addJsDoc(context, mainProperty, property, parentName + "." + property.name)

  const result = [mainProperty]

  if (property.alt_name) {
    result.push(
      ts.factory.createPropertySignature(
        undefined,
        property.alt_name,
        property.optional ? Tokens.question : undefined,
        type
      )
    )
  }

  return result
}

function getHeritageClauses(
  context: PrototypeGenerationContext,
  prototype: Prototype
): ts.HeritageClause[] | undefined {
  if (!prototype.parent) return
  const parentPrototype = context.prototypes.get(prototype.parent)
  if (!parentPrototype) {
    context.warning("Unknown parent prototype: " + prototype.parent)
    return
  }

  if (parentPrototype.typename) {
    return [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("OmitType"), [
          ts.factory.createTypeReferenceNode(parentPrototype.name),
        ]),
      ]),
    ]
  }

  return [
    ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(prototype.parent), undefined),
    ]),
  ]
}
