import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { sortByOrder } from "../util.js"
import { Prototype } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc, createTag } from "../documentation.js"
import { addFakeJSDoc, Modifiers, Types } from "../genUtil.js"
import { getHeritageClauses, getOverridenAttributes, mapProperty } from "./properties.js"

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
  const heritageClauses = getPrototypeHeritageClauses(prototype, context)

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

  if (prototype.deprecated) {
    // also add deprecated property to "type" property
    const typeProperty = properties.find((p) => p.name && ts.isIdentifier(p.name) && p.name.text === "type")

    if (typeProperty) {
      addFakeJSDoc(
        typeProperty,
        ts.factory.createJSDocComment(undefined, [createTag("deprecated"), createTag("see", prototype.name)])
      )
    }
  }

  return properties
}

function getPrototypeHeritageClauses(prototype: Prototype, context: PrototypeGenerationContext) {
  if (!prototype.parent) return undefined
  return getHeritageClauses(prototype.parent, getPrototypeOverridenAttributes(context, prototype))
}

function getPrototypeOverridenAttributes(
  context: PrototypeGenerationContext,
  prototype: Prototype
): string[] | undefined {
  if (!prototype.parent) return undefined
  const attributes = getOverridenAttributes(context, prototype, context.prototypes, context.prototypeProperties)
  const parent = context.prototypes.get(prototype.parent)
  if (prototype.typename && parent?.typename) {
    attributes.push("type")
  }
  return attributes
}
