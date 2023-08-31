import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { sortByOrder } from "../util.js"
import { Property, Prototype } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { Modifiers, Types } from "../genUtil.js"
import { mapProperty } from "./properties.js"

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
  const members = getMembers(context, prototype)

  const heritageClauses = getHeritageClauses(context, prototype)

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
  if (prototype.custom_properties) {
    context.warning("TODO: custom_properties")
  }

  const properties = prototype.properties.sort(sortByOrder).flatMap((p) => mapProperty(context, p, prototype.name))

  if (prototype.typename && !prototype.properties.some((p) => p.name === "type")) {
    const typeProperty = ts.factory.createPropertySignature(
      undefined,
      "type",
      undefined,
      Types.stringLiteral(prototype.typename)
    )
    properties.unshift(typeProperty)
  }
  return properties
}

function propertyOverridesType(parent: Property, child: Property): boolean {
  return (
    (!parent.optional && child.optional) ||
    (typeof parent.type === "string" && typeof child.type === "object" && child.type.complex_type === "union")
  )
}

function findParentProperty(context: PrototypeGenerationContext, prototype: Prototype, property: Property) {
  let currentPrototype: string | undefined = prototype.parent
  while (currentPrototype) {
    const parentProperty = context.prototypeProperties.get(currentPrototype)?.get(property.name)
    if (parentProperty) return parentProperty
    currentPrototype = context.prototypes.get(currentPrototype)?.parent
  }
  return undefined
}

function getOverridenAttributes(context: PrototypeGenerationContext, prototype: Prototype): string[] | undefined {
  if (!prototype.parent) return undefined
  const parentPrototype = context.prototypes.get(prototype.parent)
  if (!parentPrototype) {
    context.warning("Unknown parent prototype: " + prototype.parent)
    return
  }

  const overridenProperties = prototype.properties.filter((p) => p.override)
  const overridenNames: string[] = []
  for (const property of overridenProperties) {
    const parentProperty = findParentProperty(context, prototype, property)
    if (!parentProperty) {
      context.warning(`Couldn't find parent property for ${prototype.name}.${property.name}`)
      continue
    }
    if (propertyOverridesType(parentProperty, property)) {
      overridenNames.push(property.name)
    }
  }

  if (prototype.typename && parentPrototype.typename) {
    overridenNames.push("type")
  }
  return overridenNames
}

function getHeritageClauses(
  context: PrototypeGenerationContext,
  prototype: Prototype
): ts.HeritageClause[] | undefined {
  if (!prototype.parent) return
  const overrideAttributes = getOverridenAttributes(context, prototype)

  let inherited: ts.ExpressionWithTypeArguments
  if (overrideAttributes?.length) {
    inherited = ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Omit"), [
      ts.factory.createTypeReferenceNode(prototype.parent),
      ts.factory.createUnionTypeNode(overrideAttributes.map(Types.stringLiteral)),
    ])
  } else {
    inherited = ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(prototype.parent), undefined)
  }
  return [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [inherited])]
}
