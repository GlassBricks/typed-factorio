import { PrototypeGenerationContext } from "./index.js"
import { ModuleType } from "../OutputFile.js"
import { Property, PrototypeConcept, Type } from "../FactorioPrototypeApiJson.js"
import { addJsDoc, createTag } from "../documentation.js"
import { mapPrototypeConcept, typeToDeclaration } from "../types.js"
import { getHeritageClauses, getOverridenAttributes } from "./properties.js"
import { assertNever, byOrder } from "../util.js"
import ts from "typescript"
import { copyExistingDeclaration } from "../manualDefinitions.js"
import { generateBuiltinType } from "../builtin"

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
  for (const concept of context.apiDocs.types) {
    context.references.set(concept.name, concept.name)

    if (concept.properties) {
      for (const property of concept.properties) {
        maybeRecordInlineConceptReference(context, concept.name, property)
      }
      const type = concept.type
      if (
        typeof type === "object" &&
        type.complex_type === "union" &&
        type.options.some((x) => typeof x === "object" && x.complex_type === "struct")
      ) {
        context.hasInnerStructType.add(concept.name)
      }
    }
  }
}

export function generateTypes(context: PrototypeGenerationContext): void {
  context.addFile("types", ModuleType.Prototype, () => {
    for (const type of context.apiDocs.types.sort(byOrder)) {
      generateType(context, type)
    }
  })
}

function generateTypeDeclaration(concept: PrototypeConcept, context: PrototypeGenerationContext) {
  const heritageClauses = getConceptHeritageClauses(context, concept)
  const { type, description, innerStructType } = mapPrototypeConcept(context, concept)

  const innerStructDeclaration =
    innerStructType && typeToDeclaration(context, innerStructType, concept.name + "Struct", heritageClauses)

  const declaration = typeToDeclaration(
    context,
    type,
    concept.name,
    innerStructDeclaration ? undefined : heritageClauses,
  )

  return { declaration, description, innerStructDeclaration }
}
function generateType(context: PrototypeGenerationContext, concept: PrototypeConcept): void {
  if (concept.type === "builtin") {
    return generateBuiltinType(context, concept)
  }

  const existing = context.manualDefs.getDeclaration(concept.name)

  let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  let innerStructDeclaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration | undefined
  let description: string | undefined
  if (existing?.annotations.replace) {
    declaration = copyExistingDeclaration(existing.node)
  } else {
    ;({ declaration, description, innerStructDeclaration } = generateTypeDeclaration(concept, context))
  }

  if (!!innerStructDeclaration !== context.hasInnerStructType.has(concept.name)) {
    context.warning(`Inconsistency in having inner struct type for ${concept.name}`)
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

  if (innerStructDeclaration) {
    addJsDoc(
      context,
      innerStructDeclaration,
      {
        description: `Struct type for [${concept.name}](prototype:${concept.name})`,
      },
      onlineReferenceName,
      {
        tags: [createTag("see", concept.name)],
      },
    )
    context.currentFile.add(innerStructDeclaration)
  }

  addJsDoc(context, declaration, concept, onlineReferenceName, {
    post: description,
    tags,
  })
  context.currentFile.add(declaration)
}

function getConceptHeritageClauses(
  context: PrototypeGenerationContext,
  concept: PrototypeConcept,
): ts.HeritageClause[] | undefined {
  const parentConceptName = concept.parent
  if (!parentConceptName) return
  const overridenAttributes = getOverridenAttributes(context, concept, context.types, context.conceptProperties)

  const parentConcept = context.types.get(parentConceptName)
  if (!parentConcept) {
    context.warning("Unknown parent concept: " + parentConceptName)
    return
  }
  const overridesType =
    concept.properties?.some((x) => x.name === "type") && parentConcept.properties?.some((x) => x.name === "type")
  if (overridesType) {
    overridenAttributes.push("type")
  }

  const usedName = context.hasInnerStructType.has(parentConceptName) ? parentConceptName + "Struct" : parentConceptName

  return getHeritageClauses(usedName, overridenAttributes)
}
