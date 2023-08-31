import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { PrototypeConcept } from "../FactorioPrototypeApiJson.js"
import { addJsDoc } from "../documentation.js"
import { mapPrototypeConcept, typeToDeclaration } from "../types.js"
import { getHeritageClauses, getOverridenAttributes, mapProperty } from "./properties.js"
import { sortByOrder } from "../util.js"
import ts from "typescript"
import { InterfaceDef, TypeAliasDef } from "../manualDefinitions.js"

export function preprocessTypes(context: PrototypeGenerationContext): void {
  for (const type of context.apiDocs.types) {
    context.references.set(type.name, type.name)
  }
}

export function generateTypes(context: PrototypeGenerationContext): void {
  context.addFile("types", DeclarationType.Types, () => {
    for (const type of context.apiDocs.types.sort(sortByOrder)) {
      generateType(context, type)
    }
  })
}

function generateTypeDeclaration(
  concept: PrototypeConcept,
  context: PrototypeGenerationContext,
  existing: InterfaceDef | TypeAliasDef | undefined
) {
  const properties = concept.properties?.sort(sortByOrder).flatMap((p) => mapProperty(context, p, concept.name))

  const heritageClauses = getConceptHeritageClauses(context, concept)
  const { type, description } = mapPrototypeConcept(context, concept.type, properties, existing)

  const declaration = typeToDeclaration(type, concept.name, heritageClauses)

  return { declaration, description }
}
function generateType(context: PrototypeGenerationContext, concept: PrototypeConcept): void {
  if (concept.type == "builtin") {
    return generateBuiltinType(context, concept)
  }

  const existing = context.manualDefs.getDeclaration(concept.name)

  let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  let description: string | undefined
  if (existing?.annotations.replace) {
    declaration = existing.node
  } else {
    ;({ declaration, description } = generateTypeDeclaration(concept, context, existing))
  }

  addJsDoc(context, declaration, concept, concept.name, { post: description })

  context.currentFile.add(declaration)
}

function generateBuiltinType(context: PrototypeGenerationContext, concept: PrototypeConcept) {
  const name = concept.name
  if (name == "string" || name == "number" || name == "boolean") return
  const existing = context.manualDefs.getDeclaration(name)
  if (!existing) {
    context.warning(`No existing definition for builtin ${name}`)
    return
  }
  context.currentFile.add(addJsDoc(context, existing.node, concept, name, undefined))
}

function getConceptHeritageClauses(
  context: PrototypeGenerationContext,
  concept: PrototypeConcept
): ts.HeritageClause[] | undefined {
  if (!concept.parent) return
  const overridenAttributes = getOverridenAttributes(context, concept, context.types, context.conceptProperties)

  const parentConcept = context.types.get(concept.parent)
  if (!parentConcept) {
    context.warning("Unknown parent concept: " + concept.parent)
    return
  }
  const overridesType =
    concept.properties?.some((x) => x.name == "type") && parentConcept.properties?.some((x) => x.name == "type")
  if (overridesType) {
    overridenAttributes.push("type")
  }

  return getHeritageClauses(concept.parent, overridenAttributes)
}
