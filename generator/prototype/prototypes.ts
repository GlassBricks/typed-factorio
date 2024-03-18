import { PrototypeGenerationContext } from "./index.js"
import { ModuleType } from "../OutputFile.js"
import { byOrder } from "../util.js"
import { Prototype } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc, createTag } from "../documentation.js"
import { addFakeJSDoc, Modifiers, Types } from "../genUtil.js"
import { getHeritageClauses, getOverridenAttributes, mapProperty } from "./properties.js"
import { maybeRecordInlineConceptReference } from "./concepts.js"
import { mapPrototypeType } from "../types.js"
import assert from "assert"
import { InterfaceDef } from "../manualDefinitions.js"

export function preprocessPrototypes(context: PrototypeGenerationContext): void {
  for (const prototype of context.apiDocs.prototypes.sort(byOrder)) {
    context.references.set(prototype.name, prototype.name)

    for (const property of prototype.properties) {
      maybeRecordInlineConceptReference(context, prototype.name, property)
    }
  }
  context.references.set("PrototypeMap", "PrototypeMap")
}

export function generatePrototypes(context: PrototypeGenerationContext): void {
  context.addFile("prototypes", ModuleType.Prototype, () => {
    const { subclassMap, rootPrototypes } = getSubclassMap(context)
    for (const prototype of context.apiDocs.prototypes.sort(byOrder)) {
      generatePrototype(context, prototype, subclassMap, rootPrototypes)
    }
    addPrototypeMap(context)
    // manually added imports for now
    context.currentFile.addImport("common", "CustomInputName")
  })
}

function getSubclassMap(context: PrototypeGenerationContext): {
  subclassMap: Map<string, string[]>
  rootPrototypes: string[]
} {
  const subclassMap = new Map<string, string[]>()
  const rootPrototypes: string[] = []
  for (const prototype of context.apiDocs.prototypes) {
    subclassMap.set(prototype.name, [])
  }
  for (const prototype of context.apiDocs.prototypes.sort(byOrder)) {
    if (!prototype.parent) {
      rootPrototypes.push(prototype.name)
    }
    const thisType = prototype.typename
    if (!thisType) continue
    let current: string | undefined = prototype.name
    while (current) {
      subclassMap.get(current)!.push(thisType)
      current = context.prototypes.get(current)?.parent
    }
  }
  return { subclassMap, rootPrototypes }
}

function generatePrototype(
  context: PrototypeGenerationContext,
  prototype: Prototype,
  subclassMap: Map<string, string[]>,
  rootPrototypes: string[],
): void {
  const existing = context.manualDefs.getInterface(prototype.name)
  const members = getMembers(context, prototype, existing, subclassMap)
  const heritageClauses = getPrototypeHeritageClauses(prototype, context)

  let mainDeclName = prototype.name

  const customProperties = prototype.custom_properties
  if (customProperties) {
    // split into XMembers, XProperties; main type is type X = XMembers & XProperties
    mainDeclName = prototype.name + "Members"
  }

  const membersDecl = ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    mainDeclName,
    undefined,
    heritageClauses,
    members,
  )

  let mainDecl: ts.DeclarationStatement = membersDecl

  if (customProperties) {
    const indexer = getCustomPropertiesType(context, prototype)

    const intersectionType = ts.factory.createIntersectionTypeNode([
      ts.factory.createTypeReferenceNode(mainDeclName),
      ts.factory.createTypeReferenceNode(indexer.name),
    ])

    context.currentFile.add(membersDecl)
    context.currentFile.add(indexer)
    mainDecl = ts.factory.createTypeAliasDeclaration([Modifiers.export], prototype.name, undefined, intersectionType)
  }

  addJsDoc(context, mainDecl, prototype, prototype.name)
  context.currentFile.add(mainDecl)
}

function getMembers(
  context: PrototypeGenerationContext,
  prototype: Prototype,
  existing: InterfaceDef | undefined,
  subclassMap: Map<string, string[]>,
): ts.TypeElement[] {
  const properties = prototype.properties
    .sort(byOrder)
    .flatMap((p) => mapProperty(context, p, prototype.name, existing))

  const typeNames = subclassMap.get(prototype.name)
  if (typeNames && typeNames.length > 0) {
    const existingTypeProperty = properties.findIndex(
      (p) => p.name && ts.isIdentifier(p.name) && p.name.text === "type",
    )
    if (existingTypeProperty === -1) {
      const typeProperty = ts.factory.createPropertySignature(
        undefined,
        "type",
        undefined,
        Types.stringUnion(typeNames),
      )
      properties.unshift(typeProperty)
    } else if (prototype.name !== "PrototypeBase" && (typeNames.length !== 1 || typeNames[0] !== prototype.typename)) {
      context.warning("existing type property does not match type names", prototype.name)
    }
  }

  if (prototype.deprecated) {
    // also add deprecated property to "type" property
    const typeProperty = properties.find((p) => p.name && ts.isIdentifier(p.name) && p.name.text === "type")

    if (typeProperty) {
      addFakeJSDoc(
        typeProperty,
        ts.factory.createJSDocComment(undefined, [createTag("deprecated"), createTag("see", prototype.name)]),
      )
    }
  }

  return properties
}

function getPrototypeHeritageClauses(prototype: Prototype, context: PrototypeGenerationContext) {
  if (!prototype.parent) return undefined
  return getHeritageClauses(prototype.parent, getPrototypeOverridenAttributes(context, prototype))
}

function getCustomPropertiesType(context: PrototypeGenerationContext, prototype: Prototype): ts.InterfaceDeclaration {
  const customProperty = prototype.custom_properties
  assert(customProperty)
  if (customProperty.key_type !== "string") {
    context.warning("Can't handle non-string custom property keys", prototype.name)
  }

  const { type, description } = mapPrototypeType(context, customProperty.value_type)
  if (description) {
    context.warning("Can't handle custom property descriptions", prototype.name)
  }

  const typeElement = ts.factory.createIndexSignature(
    undefined,
    [ts.factory.createParameterDeclaration(undefined, undefined, "key", undefined, Types.string, undefined)],
    type,
  )
  addJsDoc(context, typeElement, customProperty, prototype.name + ".custom_properties")

  return ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    prototype.name + "CustomProperties",
    undefined,
    undefined,
    [typeElement],
  )
}

function getPrototypeOverridenAttributes(
  context: PrototypeGenerationContext,
  prototype: Prototype,
): string[] | undefined {
  if (!prototype.parent) return undefined
  return getOverridenAttributes(context, prototype, context.prototypes, context.prototypeProperties)
}

function addPrototypeMap(context: PrototypeGenerationContext) {
  const members = context.apiDocs.prototypes
    .filter((p) => p.typename)
    .map((p) => {
      const member = ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(p.typename!),
        undefined,
        ts.factory.createTypeReferenceNode(p.name),
      )
      if (p.deprecated) {
        addFakeJSDoc(member, ts.factory.createJSDocComment(undefined, [createTag("deprecated")]))
      }
      return member
    })

  const intf = ts.factory.createInterfaceDeclaration([Modifiers.export], "PrototypeMap", undefined, undefined, members)

  context.currentFile.add(intf)
}
