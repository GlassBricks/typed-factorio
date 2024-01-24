import { PrototypeGenerationContext } from "./index.js"
import { ModuleType } from "../OutputFile.js"
import { Property, PrototypeConcept, Type } from "../FactorioPrototypeApiJson.js"
import { addJsDoc, createTag } from "../documentation.js"
import { mapPrototypeConcept, typeToDeclaration } from "../types.js"
import { getHeritageClauses, getOverridenAttributes, mapProperty } from "./properties.js"
import { assertNever, byOrder } from "../util.js"
import ts from "typescript"
import { copyExistingDeclaration, InterfaceDef, TypeAliasDef } from "../manualDefinitions.js"

export function maybeRecordInlineConceptReference(
  context: PrototypeGenerationContext,
  sourceType: string,
  property: Property,
  record = true,
): boolean {
  return visitType(property.type)

  function visitType(type: Type): boolean {
    if (typeof type === "string") return maybeRecord(type)
    switch (type.complex_type) {
      case "struct":
      case "literal":
        return false
      case "array":
      case "type":
        return visitType(type.value)
      case "dictionary":
        return visitType(type.key) || visitType(type.value)
      case "tuple":
        return type.values.some(visitType)
      case "union":
        return type.options.some(visitType)
      default:
        assertNever(type)
    }
  }

  function maybeRecord(name: string) {
    const concept = context.types.get(name)
    if (!concept?.inline) return false
    if (!record) return true

    if (context.inlineConceptReferences.has(name)) {
      context.warning(
        `${concept.name} inline concept referenced by ${sourceType}.${
          property.name
        } and ${context.inlineConceptReferences.get(name)}`,
      )
    }
    context.inlineConceptReferences.set(name, `${sourceType}.${property.name}`)
    return true
  }
}

export function preprocessTypes(context: PrototypeGenerationContext): void {
  for (const type of context.apiDocs.types) {
    context.references.set(type.name, type.name)

    type.properties?.forEach((p) => maybeRecordInlineConceptReference(context, type.name, p))
  }
}

export function generateTypes(context: PrototypeGenerationContext): void {
  context.addFile("types", ModuleType.Prototype, () => {
    for (const type of context.apiDocs.types.sort(byOrder)) {
      generateType(context, type)
    }
  })
}

function generateTypeDeclaration(
  concept: PrototypeConcept,
  context: PrototypeGenerationContext,
  existing: InterfaceDef | TypeAliasDef | undefined,
) {
  const properties = concept.properties?.sort(byOrder).flatMap((p) => mapProperty(context, p, concept.name, existing))

  const heritageClauses = getConceptHeritageClauses(context, concept)
  const { type, description } = mapPrototypeConcept(context, concept.type, properties, existing)

  const declaration = typeToDeclaration(type, concept.name, heritageClauses)

  return { declaration, description }
}
function generateType(context: PrototypeGenerationContext, concept: PrototypeConcept): void {
  if (concept.type === "builtin") {
    return generateBuiltinType(context, concept)
  }

  const existing = context.manualDefs.getDeclaration(concept.name)

  let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  let description: string | undefined
  if (existing?.annotations.replace) {
    declaration = copyExistingDeclaration(existing.node)
  } else {
    ;({ declaration, description } = generateTypeDeclaration(concept, context, existing))
  }

  let tags: ts.JSDocTag[] | undefined
  let onlineReferenceName = concept.name

  if (concept.inline) {
    const referencedBy = context.inlineConceptReferences.get(concept.name)
    if (!referencedBy) {
      context.warning(`Inline concept ${concept.name} not referenced by any prototype`)
    } else {
      tags = [createTag("see", referencedBy)]
      onlineReferenceName = referencedBy
    }
  }

  addJsDoc(context, declaration, concept, onlineReferenceName, {
    post: description,
    tags,
  })

  context.currentFile.add(declaration)
}

function generateBuiltinType(context: PrototypeGenerationContext, concept: PrototypeConcept) {
  const name = concept.name
  if (name === "string" || name === "number" || name === "boolean") return
  const existing = context.manualDefs.getDeclaration(name)
  if (!existing) {
    context.warning(`No existing definition for builtin ${name}`)
    return
  }
  if (existing.annotations.omit) return
  context.currentFile.add(addJsDoc(context, existing.node, concept, name, undefined))
}

function getConceptHeritageClauses(
  context: PrototypeGenerationContext,
  concept: PrototypeConcept,
): ts.HeritageClause[] | undefined {
  if (!concept.parent) return
  const overridenAttributes = getOverridenAttributes(context, concept, context.types, context.conceptProperties)

  const parentConcept = context.types.get(concept.parent)
  if (!parentConcept) {
    context.warning("Unknown parent concept: " + concept.parent)
    return
  }
  const overridesType =
    concept.properties?.some((x) => x.name === "type") && parentConcept.properties?.some((x) => x.name === "type")
  if (overridesType) {
    overridenAttributes.push("type")
  }

  return getHeritageClauses(concept.parent, overridenAttributes)
}
