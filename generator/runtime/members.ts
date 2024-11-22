import assert from "assert"
import ts from "typescript"
import { addJsDoc, processDescription } from "../documentation.js"
import { Attribute, Method, Parameter } from "../FactorioRuntimeApiJson.js"
import { escapePropertyName, Modifiers, removeLuaPrefix, Tokens, toPascalCase, Types } from "../genUtil.js"
import { getAnnotations, InterfaceDef, TypeAliasDef } from "../ManualDefinitions"
import { makeNullable, mapAttributeType, mapMemberType, mapRuntimeType, RWType, RWUsage } from "../types.js"
import { byOrder, getFirst } from "../util.js"
import { createVariantParameterTypes } from "../variantParameterGroups.js"
import { RuntimeGenerationContext } from "./index.js"
import { recordUsage } from "./concept-usage-analysis"

export function analyzeMethod(context: RuntimeGenerationContext, method: Method): void {
  for (const parameter of method.parameters) {
    recordUsage(context, parameter.type, RWUsage.Write)
  }
  if (method.variant_parameter_groups) {
    for (const parameter of method.variant_parameter_groups.flatMap((x) => x.parameters)) {
      recordUsage(context, parameter.type, RWUsage.Write)
    }
  }
  if (method.variadic_parameter?.type) {
    recordUsage(context, method.variadic_parameter.type, RWUsage.Write)
  }
  for (const returnValue of method.return_values) {
    recordUsage(context, returnValue.type, RWUsage.Read)
  }
}

export function mapAttribute(
  context: RuntimeGenerationContext,
  attribute: Attribute,
  parent: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined,
): ts.TypeElement | ts.TypeElement[] {
  let member: ts.TypeElement | ts.TypeElement[]
  const existing = existingContainer?.members[attribute.name]
  const type = mapAttributeType(
    context,
    attribute,
    parent,
    existing?.some((v) => ts.isPropertySignature(v) && v.type),
  )

  if (existing) {
    member = mergeAttributeWithExisting(context, parent, attribute, type, existing)
  } else if (!attribute.read_type) {
    member = ts.factory.createSetAccessorDeclaration(
      undefined,
      attribute.name,
      [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          "value",
          undefined,
          attribute.optional ? makeNullable(type.mainType) : type.mainType,
          undefined,
        ),
      ],
      undefined,
    )
  } else if (type.altWriteType) {
    assert(attribute.read_type && attribute.write_type)
    const mainType = attribute.optional ? makeNullable(type.mainType) : type.mainType
    const altWriteType = attribute.optional ? makeNullable(type.altWriteType) : type.altWriteType
    member = [
      ts.factory.createGetAccessorDeclaration(undefined, attribute.name, [], mainType, undefined),
      ts.factory.createSetAccessorDeclaration(
        undefined,
        attribute.name,
        [ts.factory.createParameterDeclaration(undefined, undefined, "value", undefined, altWriteType, undefined)],
        undefined,
      ),
    ]
  } else {
    member = ts.factory.createPropertySignature(
      attribute.write_type ? undefined : [Modifiers.readonly],
      attribute.name,
      attribute.optional ? Tokens.question : undefined,
      type.mainType,
    )
  }
  const first = Array.isArray(member) ? member[0] : member
  addJsDoc(context, first, attribute, parent + "." + attribute.name)
  return member
}

function mergeAttributeWithExisting(
  context: RuntimeGenerationContext,
  parent: string,
  attribute: Attribute,
  type: RWType,
  existing: ts.TypeElement[] | (ts.GetAccessorDeclaration | ts.SetAccessorDeclaration)[],
): ts.TypeElement | ts.TypeElement[] {
  let result: ts.TypeElement | ts.TypeElement[]
  const firstDecl = existing[0]

  if (ts.isPropertySignature(firstDecl)) {
    if (type.altWriteType) {
      result = mergePropertyWithReadWriteType(firstDecl)
    } else {
      result = ts.factory.createPropertySignature(
        firstDecl.modifiers,
        firstDecl.name,
        firstDecl.questionToken,
        firstDecl.type ?? type.mainType,
      )
      ts.setEmitFlags(result, ts.EmitFlags.NoNestedComments)
    }
  } else if (existing.every((v) => ts.isGetAccessorDeclaration(v) || ts.isSetAccessorDeclaration(v))) {
    result = []
    for (const element of existing) {
      if (ts.isGetAccessorDeclaration(element)) {
        if (!attribute.read_type)
          context.warning(`Read accessor for non-readable attribute: ${parent}.${attribute.name}`)
        const newMember = ts.factory.createGetAccessorDeclaration(
          element.modifiers,
          element.name,
          element.parameters,
          element.type ?? type.mainType,
          undefined,
        )
        ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
        result.push(newMember)
      } else if (ts.isSetAccessorDeclaration(element)) {
        if (!attribute.write_type)
          context.warning(`Write accessor for non-writable attribute: ${parent}.${attribute.name}`)
        const newMember = ts.factory.createSetAccessorDeclaration(
          element.modifiers,
          element.name,
          element.parameters,
          undefined,
        )
        ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
        result.push(newMember)
      }
    }
  } else {
    throw new Error(
      `Unknown type for manual define for ${parent}.${attribute.name}, got kinds ${existing
        .map((x) => ts.SyntaxKind[x.kind])
        .join()} instead`,
    )
  }
  return result

  function mergePropertyWithReadWriteType(property: ts.PropertySignature) {
    if (property.type) {
      context.warning(
        `Attribute ${parent}.${attribute.name} has different read/write type, but manually defined as one type.`,
      )
    }
    return [
      ts.factory.createGetAccessorDeclaration(undefined, attribute.name, [], type.mainType, undefined),
      ts.factory.createSetAccessorDeclaration(
        undefined,
        attribute.name,
        [ts.factory.createParameterDeclaration(undefined, undefined, "value", undefined, type.altWriteType)],
        undefined,
      ),
    ]
  }
}

export function mapParameterToProperty(
  context: RuntimeGenerationContext,
  parameter: Parameter,
  parent: string,
  usage: RWUsage,
  existingContainer?: InterfaceDef | TypeAliasDef,
): { mainProperty: ts.PropertySignature; altWriteProperty?: ts.PropertySignature } {
  const existingProperty = existingContainer?.members[parameter.name]?.[0]
  if (existingProperty) {
    if (!ts.isPropertySignature(existingProperty)) {
      throw new Error(
        `Manual define for ${parent}.${parameter.name} should be a property signature, got ${
          ts.SyntaxKind[existingProperty.kind]
        } instead`,
      )
    }
    addJsDoc(context, existingProperty, parameter, undefined)
    return { mainProperty: existingProperty }
  } else {
    const type = mapMemberType(context, parameter, parent, parameter.type, usage)

    function makeProperty(typeNode: ts.TypeNode) {
      const result = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        escapePropertyName(parameter.name),
        parameter.optional ? Tokens.question : undefined,
        typeNode,
      )
      addJsDoc(context, result, parameter, undefined)
      return result
    }

    return {
      mainProperty: makeProperty(type.mainType),
      altWriteProperty: type.altWriteType && makeProperty(type.altWriteType),
    }
  }
}

export function mapMethod(
  context: RuntimeGenerationContext,
  method: Method,
  parent: string,
  existingContainer: InterfaceDef | TypeAliasDef | undefined,
): ts.MethodSignature[] {
  const existingMethods = existingContainer?.members[method.name]
  const firstExistingMethod = existingMethods?.[0]
  const thisPath = parent ? parent + "." + method.name : method.name

  let parameters: ts.ParameterDeclaration[]
  let additionalDescription: string | undefined
  if (method.format.takes_table && method.variant_parameter_groups !== undefined) {
    assert(!method.variadic_parameter)
    const name =
      (firstExistingMethod && getAnnotations(firstExistingMethod as unknown as ts.JSDocContainer).variantsName?.[0]) ??
      removeLuaPrefix(parent) + toPascalCase(method.name)
    ;({ description: additionalDescription } = createVariantParameterTypes(context, name, method, RWUsage.Write))

    const type = ts.factory.createTypeReferenceNode(name)
    parameters = [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        "params",
        method.format.table_optional ? Tokens.question : undefined,
        type,
      ),
    ]
  } else {
    parameters = getParameters(context, method, thisPath)
  }

  const returnType = getReturnType(context, method, parent)

  if (existingMethods && !existingMethods.every(ts.isMethodSignature)) {
    throw new Error(`Manual define for ${thisPath} should be a method signature`)
  }

  const signatures: ts.MethodSignature[] = []
  if (!existingMethods || existingMethods?.some((m) => getAnnotations(m).overload)) {
    signatures.push(
      ts.factory.createMethodSignature(undefined, method.name, undefined, undefined, parameters, returnType),
    )
  }
  if (existingMethods) {
    const existingHasParameters = existingMethods.some((m) => m.parameters.length > 0)
    signatures.push(
      ...existingMethods.map((m) => {
        const member = ts.factory.createMethodSignature(
          m.modifiers,
          m.name,
          m.questionToken,
          m.typeParameters,
          existingHasParameters ? m.parameters : parameters,
          m.type ?? returnType,
        )
        ts.setEmitFlags(member.name, ts.EmitFlags.NoComments)
        return member
      }),
    )
  }
  const firstSignature = getFirst(signatures)
  addMethodJSDoc(context, firstSignature, method, thisPath, additionalDescription)
  return signatures
}

export function mapFunction(context: RuntimeGenerationContext, method: Method): ts.FunctionDeclaration {
  const parameters = getParameters(context, method, method.name)
  const returnType = getReturnType(context, method, "")
  const func = ts.factory.createFunctionDeclaration(
    undefined,
    undefined,
    method.name,
    undefined,
    parameters,
    returnType,
    undefined,
  )
  addMethodJSDoc(context, func, method, method.name)
  return func
}

function getParameters(context: RuntimeGenerationContext, method: Method, thisPath: string): ts.ParameterDeclaration[] {
  let parameters: ts.ParameterDeclaration[]
  if (method.format.takes_table) {
    const type = ts.factory.createTypeLiteralNode(
      method.parameters
        .sort(byOrder)
        .map((m) => mapParameterToProperty(context, m, thisPath, RWUsage.Write).mainProperty),
    )
    parameters = [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        "params",
        method.format.table_optional ? Tokens.question : undefined,
        type,
      ),
    ]
  } else {
    parameters = method.parameters.sort(byOrder).map((m) => mapParameterToParameter(context, m, thisPath))
  }
  if (method.variadic_parameter) {
    assert(!method.format.takes_table)
    assert(method.variadic_parameter.type)
    const type = mapRuntimeType(
      context,
      {
        complex_type: "array",
        value: method.variadic_parameter.type,
      },
      thisPath,
      RWUsage.Write,
    ).mainType
    parameters.push(ts.factory.createParameterDeclaration(undefined, Tokens.dotDotDot, "args", undefined, type))
  }
  return parameters
}

function getReturnType(context: RuntimeGenerationContext, method: Method, parent: string): ts.TypeNode {
  if (method.return_values.length === 0) {
    return Types.void
  } else if (method.return_values.length === 1) {
    return mapReturnType(method.return_values[0])
  } else {
    const types = method.return_values.map(mapReturnType)
    return ts.factory.createTypeReferenceNode("LuaMultiReturn", [ts.factory.createTupleTypeNode(types)])
  }

  function mapReturnType(type: Omit<Parameter, "name">): ts.TypeNode {
    const result = mapMemberType(
      context,
      {
        name: method.name,
        description: method.description + "\n" + type.description,
        optional: false,
      },
      parent,
      type.type,
      RWUsage.Read,
    ).mainType
    return type.optional ? makeNullable(result) : result
  }
}

function addMethodJSDoc(
  context: RuntimeGenerationContext,
  node: ts.Node,
  method: Method,
  thisPath: string,
  additionalDescription?: string,
): void {
  const tags = []
  if (!method.format.takes_table) {
    tags.push(
      ...(method.parameters as { name: string; description?: string }[])
        .concat([{ name: "args", description: method.variadic_parameter?.description }])
        .filter((p) => p.description)
        .map((p) =>
          ts.factory.createJSDocParameterTag(
            undefined,
            ts.factory.createIdentifier(escapeParameterName(p.name)),
            false,
            undefined,
            undefined,
            processDescription(context, p.description),
          ),
        ),
    )
  }

  if (method.return_values.length === 1) {
    if (method.return_values[0].description)
      tags.push(
        ts.factory.createJSDocReturnTag(
          undefined,
          undefined,
          processDescription(context, method.return_values[0].description),
        ),
      )
  } else if (method.return_values.length > 1) {
    tags.push(
      ...method.return_values.map((r) =>
        ts.factory.createJSDocReturnTag(undefined, undefined, processDescription(context, r.description)),
      ),
    )
  }
  addJsDoc(context, node, method, thisPath, { tags, post: additionalDescription })
}

function mapParameterToParameter(
  context: RuntimeGenerationContext,
  parameter: Parameter,
  parent: string,
): ts.ParameterDeclaration {
  const type = mapMemberType(context, parameter, parent, parameter.type, RWUsage.Write).mainType
  return ts.factory.createParameterDeclaration(
    undefined,
    undefined,
    escapeParameterName(parameter.name),
    parameter.optional ? Tokens.question : undefined,
    type,
  )
}

const keywords = new Set(["function", "interface"])

function escapeParameterName(name: string): string {
  if (keywords.has(name)) {
    return "_" + name
  }
  return name
}
