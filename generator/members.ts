import ts from "typescript"
import { addJsDoc } from "./documentation"
import { Attribute, Parameter } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { Modifiers, Tokens } from "./genUtil"
import { InterfaceDef, TypeAliasDef } from "./manualDefinitions"
import { mapMemberType } from "./types"

export function mapAttribute(
  context: GenerationContext,
  attribute: Attribute,
  parent: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined
): ts.TypeElement | ts.TypeElement[] {
  let member: ts.TypeElement | ts.TypeElement[]
  // todo: include rw usage
  const type = mapMemberType(context, attribute, parent, attribute.type)
  const existing = existingContainer?.members[attribute.name]
  if (existing) {
    // todo: handle read/write differences
    const first = existing[0]
    if (ts.isPropertySignature(first)) {
      member = ts.factory.createPropertySignature(
        first.modifiers,
        first.name,
        first.questionToken,
        first.type ?? type.mainType
      )
      ts.setEmitFlags(member, ts.EmitFlags.NoNestedComments)
    } else if (existing.every((v) => ts.isGetAccessorDeclaration(v) || ts.isSetAccessorDeclaration(v))) {
      member = []
      for (const element of existing) {
        if (ts.isGetAccessorDeclaration(element)) {
          if (!attribute.read) throw new Error("Get accessor defined for non-readable attribute")
          const newMember = ts.factory.createGetAccessorDeclaration(
            element.decorators,
            element.modifiers,
            element.name,
            element.parameters,
            element.type ?? type.mainType,
            undefined
          )
          ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
          member.push(newMember)
        } else if (ts.isSetAccessorDeclaration(element)) {
          if (!attribute.write) throw new Error("Set accessor defined for non-writable attribute")
          const newMember = ts.factory.createSetAccessorDeclaration(
            element.decorators,
            element.modifiers,
            element.name,
            element.parameters,
            undefined
          )
          ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
          member.push(newMember)
        }
      }
    } else {
      throw new Error(
        `Unknown type for manual define for ${parent}.${attribute.name}, got kinds ${existing
          .map((x) => ts.SyntaxKind[x.kind])
          .join()} instead`
      )
    }
  } else if (!attribute.read) {
    member = ts.factory.createSetAccessorDeclaration(
      undefined,
      undefined,
      attribute.name,
      [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "value",
          attribute.optional ? Tokens.question : undefined,
          type.mainType,
          undefined
        ),
      ],
      undefined
    )
  } else {
    // todo: handle different read/write
    member = ts.factory.createPropertySignature(
      attribute.write ? undefined : [Modifiers.readonly],
      attribute.name,
      attribute.optional ? Tokens.question : undefined,
      type.mainType
    )
  }
  const first = Array.isArray(member) ? member[0] : member
  addJsDoc(context, first, attribute, parent + "." + attribute.name)
  return member
}

export function mapParameterToProperty(
  context: GenerationContext,
  parameter: Parameter,
  parent: string,
  existingContainer?: InterfaceDef | TypeAliasDef
): ts.PropertySignature {
  const existingProperty = existingContainer?.members[parameter.name]?.[0]
  if (existingProperty) {
    if (!ts.isPropertySignature(existingProperty)) {
      throw new Error(
        `Manual define for ${parent}.${parameter.name} should be a property signature, got ${
          ts.SyntaxKind[existingProperty.kind]
        } instead`
      )
    }
    addJsDoc(context, existingProperty, parameter, undefined)
    return existingProperty
  } else {
    const type = mapMemberType(context, parameter, parent, parameter.type)

    const result = ts.factory.createPropertySignature(
      [Modifiers.readonly],
      escapePropertyName(parameter.name),
      parameter.optional ? Tokens.question : undefined,
      type.mainType
    )
    addJsDoc(context, result, parameter, undefined)

    return result
  }

  function escapePropertyName(name: string): ts.PropertyName {
    if (name.includes("-")) {
      return ts.factory.createStringLiteral(name)
    }
    return ts.factory.createIdentifier(name)
  }
}
