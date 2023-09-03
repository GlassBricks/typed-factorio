import { PrototypeGenerationContext } from "./index.js"
import { Property, Prototype, PrototypeConcept } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { mapPrototypeType } from "../types.js"
import { Modifiers, Tokens, Types } from "../genUtil.js"
import { addJsDoc } from "../documentation.js"
import { maybeRecordInlineConceptReference } from "./concepts.js"
import { InterfaceDef, TypeAliasDef } from "../manualDefinitions.js"
import assert from "assert"

export function mapProperty(
  context: PrototypeGenerationContext,
  property: Property,
  parentName: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined
): ts.TypeElement[] {
  const { type, description } = mapPrototypeType(context, property.type)

  let mainProperty: ts.PropertySignature

  const existingMembers = existingContainer?.members[property.name]
  let existing: ts.PropertySignature | undefined
  if (existingMembers) {
    assert.ok(existingMembers.length === 1 && ts.isPropertySignature(existingMembers[0]))
    existing = existingMembers[0]
    mainProperty = ts.factory.createPropertySignature(
      existing.modifiers,
      existing.name,
      existing.questionToken,
      existing.type ?? type
    )
    ts.setEmitFlags(mainProperty, ts.EmitFlags.NoNestedComments)
  } else {
    mainProperty = ts.factory.createPropertySignature(
      property.name === "type" ? [Modifiers.readonly] : undefined,
      property.name,
      property.optional ? Tokens.question : undefined,
      type
    )
  }

  const isInline = maybeRecordInlineConceptReference(context, parentName, property, false)
  addJsDoc(context, mainProperty, property, parentName + "." + property.name, {
    post: description,
    allowEmpty: isInline,
  })

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

export function getHeritageClauses(parent: string, omitAttributes: string[] | undefined): ts.HeritageClause[] {
  let inherited: ts.ExpressionWithTypeArguments
  if (omitAttributes?.length) {
    inherited = ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Omit"), [
      ts.factory.createTypeReferenceNode(parent),
      ts.factory.createUnionTypeNode(omitAttributes.map(Types.stringLiteral)),
    ])
  } else {
    inherited = ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(parent), undefined)
  }
  return [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [inherited])]
}
function propertyOverridesType(parent: Property, child: Property): boolean {
  return (
    (!parent.optional && child.optional) ||
    (typeof parent.type === "string" && typeof child.type === "object" && child.type.complex_type === "union")
  )
}
function findParentProperty(
  member: Prototype | PrototypeConcept,
  property: Property,
  memberMap: ReadonlyMap<string, Prototype | PrototypeConcept>,
  propertyMap: Map<string, Map<string, Property>>
) {
  let currentMember: string | undefined = member.parent
  while (currentMember) {
    const parentProperty = propertyMap.get(currentMember)?.get(property.name)
    if (parentProperty) return parentProperty
    currentMember = memberMap.get(currentMember)?.parent
  }
  return undefined
}

export function getOverridenAttributes(
  context: PrototypeGenerationContext,
  member: Prototype | PrototypeConcept,
  memberMap: ReadonlyMap<string, Prototype | PrototypeConcept>,
  propertyMap: Map<string, Map<string, Property>>
): string[] {
  if (!member.parent || !member.properties) return []
  if (!propertyMap.has(member.parent)) {
    context.warning(`Unknown parent of ${member.name}: ${member.parent}`)
    return []
  }

  const overridenProperties = member.properties?.filter((p) => p.override)
  const overridenNames: string[] = []
  for (const property of overridenProperties) {
    const parentProperty = findParentProperty(member, property, memberMap, propertyMap)
    if (!parentProperty) {
      context.warning(`Couldn't find parent property for ${member.name}.${property.name}`)
      continue
    }
    if (propertyOverridesType(parentProperty, property)) {
      overridenNames.push(property.name)
    }
  }

  return overridenNames
}

export function getConceptOverridenAttributes(
  context: PrototypeGenerationContext,
  concept: PrototypeConcept
): string[] | undefined {
  return getOverridenAttributes(context, concept, context.types, context.conceptProperties)
}
