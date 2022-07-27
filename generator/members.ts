import assert from "assert"
import ts from "typescript"
import { StatementsList } from "./DefinitionsFile"
import { addJsDoc, processDescription } from "./documentation"
import { Attribute, Method, Parameter } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { escapePropertyName, Modifiers, removeLuaPrefix, Tokens, toPascalCase, Types } from "./genUtil"
import { getAnnotations, InterfaceDef, TypeAliasDef } from "./manualDefinitions"
import { makeNullable, mapMemberType, mapType } from "./types"
import { getFirst, sortByOrder } from "./util"
import { createVariantParameterTypes } from "./variantParameterGroups"

export function mapAttribute(
  context: GenerationContext,
  attribute: Attribute,
  parent: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined
): ts.TypeElement | ts.TypeElement[] {
  let member: ts.TypeElement | ts.TypeElement[]
  const type = mapMemberType(context, attribute, parent, attribute.type)
  const existing = existingContainer?.members[attribute.name]
  if (existing) {
    const first = existing[0]
    if (ts.isPropertySignature(first)) {
      member = ts.factory.createPropertySignature(first.modifiers, first.name, first.questionToken, first.type ?? type)
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
            element.type ?? type,
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
          type,
          undefined
        ),
      ],
      undefined
    )
  } else {
    member = ts.factory.createPropertySignature(
      attribute.write ? undefined : [Modifiers.readonly],
      attribute.name,
      attribute.optional ? Tokens.question : undefined,
      type
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
      type
    )
    addJsDoc(context, result, parameter, undefined)

    return result
  }
}

function addMethodJSDoc(context: GenerationContext, node: ts.Node, method: Method, thisPath: string): void {
  const tags: ts.JSDocTag[] = []
  if (!method.takes_table) {
    tags.push(
      ...(method.parameters as { name: string; description?: string }[])
        .concat([{ name: "args", description: method.variadic_description }])
        .filter((p) => p.description)
        .map((p) =>
          ts.factory.createJSDocParameterTag(
            undefined,
            ts.factory.createIdentifier(escapeParameterName(p.name)),
            false,
            undefined,
            undefined,
            processDescription(context, p.description)
          )
        )
    )
  }

  if (method.return_values.length === 1) {
    if (method.return_values[0].description)
      tags.push(
        ts.factory.createJSDocReturnTag(
          undefined,
          undefined,
          processDescription(context, method.return_values[0].description)
        )
      )
  } else if (method.return_values.length > 1) {
    tags.push(
      ...method.return_values.map((r) =>
        ts.factory.createJSDocReturnTag(undefined, undefined, processDescription(context, r.description))
      )
    )
  }
  addJsDoc(context, node, method, thisPath, tags)
}

export function mapMethod(
  context: GenerationContext,
  method: Method,
  parent: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined,
  statements: StatementsList
): ts.MethodSignature[] | ts.MethodSignature {
  const existingMethods = existingContainer?.members[method.name]
  const firstExistingMethod = existingMethods?.[0]
  const thisPath = parent ? parent + "." + method.name : method.name

  let parameters: ts.ParameterDeclaration[]
  if (method.takes_table && method.variant_parameter_groups !== undefined) {
    assert(!method.variadic_type)
    const name =
      (firstExistingMethod && getAnnotations(firstExistingMethod as ts.JSDocContainer).variantsName?.[0]) ??
      removeLuaPrefix(parent!) + toPascalCase(method.name)
    createVariantParameterTypes(context, name, method, statements)
    const type = ts.factory.createTypeReferenceNode(name)
    parameters = [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        "params",
        method.table_is_optional ? Tokens.question : undefined,
        type
      ),
    ]
  } else {
    parameters = getParameters(context, method, thisPath)
  }

  const returnType = getReturnType(context, method)

  let signatures: ts.MethodSignature[] | ts.MethodSignature
  if (existingMethods) {
    existingMethods.forEach((m) => {
      if (!ts.isMethodSignature(m)) {
        throw new Error(
          `Manual define for ${thisPath} should be a method signature, got ${ts.SyntaxKind[m.kind]} instead`
        )
      }
    })
    signatures = (existingMethods as ts.MethodSignature[]).map((m) => {
      const member = ts.factory.createMethodSignature(
        m.modifiers,
        m.name,
        m.questionToken,
        m.typeParameters,
        m.parameters.length > 0 ? m.parameters : parameters,
        m.type ?? returnType
      )
      ts.setEmitFlags(member.name, ts.EmitFlags.NoComments)
      return member
    })
  } else {
    signatures = ts.factory.createMethodSignature(undefined, method.name, undefined, undefined, parameters, returnType)
  }
  const firstSignature = getFirst(signatures)
  addMethodJSDoc(context, firstSignature, method, thisPath)
  return signatures
}

export function mapFunction(context: GenerationContext, method: Method): ts.FunctionDeclaration {
  const parameters = getParameters(context, method, method.name)
  const returnType = getReturnType(context, method)
  const func = ts.factory.createFunctionDeclaration(
    undefined,
    [Modifiers.declare],
    undefined,
    method.name,
    undefined,
    parameters,
    returnType,
    undefined
  )
  addMethodJSDoc(context, func, method, method.name)
  return func
}

function getParameters(context: GenerationContext, method: Method, thisPath: string): ts.ParameterDeclaration[] {
  let parameters: ts.ParameterDeclaration[]
  if (method.takes_table) {
    const type = ts.factory.createTypeLiteralNode(
      method.parameters.sort(sortByOrder).map((m) => mapParameterToProperty(context, m, thisPath, undefined))
    )
    parameters = [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        "params",
        method.table_is_optional ? Tokens.question : undefined,
        type
      ),
    ]
  } else {
    parameters = method.parameters.sort(sortByOrder).map((m) => mapParameterToParameter(context, m, thisPath))
  }
  if (method.variadic_type) {
    const type = mapType(context, { complex_type: "array", value: method.variadic_type }, thisPath)
    parameters.push(
      ts.factory.createParameterDeclaration(undefined, undefined, Tokens.dotDotDot, "args", undefined, type)
    )
  }
  return parameters
}

function getReturnType(context: GenerationContext, method: Method): ts.TypeNode {
  function mapReturnType(type: Omit<Parameter, "name">): ts.TypeNode {
    const result = mapType(context, type.type, undefined)
    return type.optional ? makeNullable(result) : result
  }

  if (method.return_values.length === 0) {
    return Types.void
  } else if (method.return_values.length === 1) {
    return mapReturnType(method.return_values[0])
  } else {
    const types = method.return_values.map(mapReturnType)
    return ts.factory.createTypeReferenceNode("LuaMultiReturn", [ts.factory.createTupleTypeNode(types)])
  }
}

function mapParameterToParameter(
  context: GenerationContext,
  parameter: Parameter,
  parent: string
): ts.ParameterDeclaration {
  const type = mapMemberType(context, parameter, parent, parameter.type)
  return ts.factory.createParameterDeclaration(
    undefined,
    undefined,
    undefined,
    escapeParameterName(parameter.name),
    parameter.optional ? Tokens.question : undefined,
    type
  )
}

const keywords = new Set(["function", "interface"])
function escapeParameterName(name: string): string {
  if (keywords.has(name)) {
    return "_" + name
  }
  return name
}
