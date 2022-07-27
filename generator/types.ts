import assert from "assert"
import ts from "typescript"
import {
  ArrayComplexType,
  DictionaryComplexType,
  FunctionComplexType,
  LiteralComplexType,
  LuaLazyLoadedValueComplexType,
  StructComplexType,
  TableComplexType,
  Type,
  TypeComplexType,
  UnionComplexType,
} from "./FactorioApiJson"
import { IndexTypes } from "./files/index-types"
import GenerationContext from "./GenerationContext"
import { indent, Tokens, Types } from "./genUtil"
import { InterfaceDef, TypeAliasDef } from "./manualDefinitions"
import { mapAttribute, mapParameterToProperty } from "./members"
import { assertNever, sortByOrder } from "./util"

interface RWType {
  mainType: ts.TypeNode
  description?: string
  asString: string | undefined
  // writeType?: ts.TypeNode
}

export interface TypeContext {
  contextName: string
  existingDef?: InterfaceDef | TypeAliasDef
}

export function mapMemberType(
  context: GenerationContext,
  member: { description: string; name?: string; optional?: boolean },
  parent: string,
  type: Type
): ts.TypeNode {
  const result =
    tryUseIndexType(context, member, parent, type) ??
    tryUseStringEnum(member, type) ??
    tryUseFlagValue(context, member, type) ??
    mapType(context, type, parent + (member.name ? "." + member.name : ""))

  const isNullable = !member.optional && isNullableFromDescription(context, member, parent)
  return isNullable ? makeNullable(result) : result
}

export function mapType(context: GenerationContext, type: Type, name: string | undefined): ts.TypeNode {
  const result = mapTypeInternal(context, type, name !== undefined ? { contextName: name } : undefined)
  if (result.description) {
    context.warning("Don't have use for type description: " + JSON.stringify(type))
  }
  return result.mainType
}

export function mapConceptType(
  context: GenerationContext,
  type: Type,
  typeContext: TypeContext
): {
  type: ts.TypeNode
  description: string | undefined
} {
  const result = mapTypeInternal(context, type, typeContext)
  return {
    type: result.mainType,
    description: result.description,
  }
}

function mapTypeInternal(context: GenerationContext, type: Type, typeContext: TypeContext | undefined): RWType {
  if (typeof type === "string") return mapBasicType(context, type)
  switch (type.complex_type) {
    case "type":
      return mapTypeType(context, type, typeContext)
    case "union":
      return mapUnionType(context, type, typeContext)
    case "array":
      return mapArrayType(context, type)
    case "dictionary":
      return mapDictionaryType(context, type)
    case "LuaCustomTable":
      return mapLuaCustomTableType(context, type)
    case "function":
      return mapFunctionType(context, type)
    case "literal":
      return mapLiteralType(context, type)
    case "LuaLazyLoadedValue":
      return mapLuaLazyLoadedValueType(context, type)
    case "struct":
      return mapStructType(context, type, typeContext)
    case "table":
      return mapTableType(context, type, typeContext)
    case "tuple":
      return mapTupleType(context, type, typeContext)
    default:
      assertNever(type)
  }
}

function mapTypeType(context: GenerationContext, type: TypeComplexType, typeContext: TypeContext | undefined): RWType {
  const result = mapTypeInternal(context, type.value, typeContext)
  if (type.description) {
    if (result.description) {
      context.warning("type type already has description: " + JSON.stringify(type))
    }
    result.description = type.description
  }
  return result
}

function mapBasicType(context: GenerationContext, type: string): RWType {
  const typeName = context.typeNames[type]
  return {
    mainType: ts.factory.createTypeReferenceNode(type),
    asString: typeName ? `[${typeName}](${type})` : `\`${type}\``,
  }
}

function mapUnionType(
  context: GenerationContext,
  type: UnionComplexType,
  typeContext: TypeContext | undefined
): RWType {
  const annotations = typeContext?.existingDef?.annotations
  let removedIndex: number | undefined
  if (annotations?.unionReplace) {
    const toReplace = annotations.unionReplace[0]
    const removed = type.options.findIndex(
      (o) => (typeof o !== "string" && o.complex_type === toReplace) || o === toReplace
    )
    if (removed !== -1) {
      removedIndex = removed
    } else {
      context.warning(`unionReplace type ${toReplace} not found in ${JSON.stringify(type)}`)
    }
  }

  const types = type.options.map((t) => mapTypeInternal(context, t, typeContext))

  let description: string | undefined
  if (type.full_format) {
    description = types
      .map((t) => {
        if (!t.asString) context.warning("Union type with full format has no asString: " + JSON.stringify(type))
        if (t.description) {
          return `- ${t.asString}: ${t.description}`
        }
        return `- ${t.asString}`
      })
      .map((x) => x.trim())
      .join("\n")
    description = "\n**Union members:**\n" + description
  } else {
    if (types.some((t) => t.description)) {
      context.warning("Union type with no full format has elements with description: " + JSON.stringify(type))
    }
  }

  const typeNodes = types.map((t) => t.mainType)
  if (annotations?.unionReplace || annotations?.unionAdd) {
    const existingDef = typeContext!.existingDef!
    if (existingDef.kind === "interface") {
      context.warning("cannot merge interface into union")
    } else {
      const node = ts.factory.createTypeReferenceNode(existingDef.node.type.getText())
      if (removedIndex !== undefined) {
        typeNodes.splice(removedIndex, 1, node)
      } else {
        typeNodes.push(node)
      }
    }
  }

  return {
    mainType: ts.factory.createUnionTypeNode(typeNodes),
    description,
    asString: undefined,
  }
}

function mapArrayType(context: GenerationContext, type: ArrayComplexType): RWType {
  const elementType = mapTypeInternal(context, type.value, undefined)
  // todo: add readonly modifier if write but not read
  return {
    mainType: ts.factory.createArrayTypeNode(elementType.mainType),
    asString: undefined,
    description: elementType.description,
  }
}

function mapDictionaryType(context: GenerationContext, type: DictionaryComplexType): RWType {
  let recordType = "Record"
  if (!isIndexableType(context, type.key)) {
    const isIndexable = isIndexableType(context, type.key)
    context.warning("dictionary key is not indexable: " + JSON.stringify(type.key), isIndexable)
    recordType = "LuaTable"
  }
  const keyType = mapTypeInternal(context, type.key, undefined)
  const valueType = mapTypeInternal(context, type.value, undefined)
  if (valueType.description) {
    context.warning("Dictionary type has element with description: " + JSON.stringify(type))
  }

  return {
    mainType: ts.factory.createTypeReferenceNode(recordType, [keyType.mainType, valueType.mainType]),
    asString: undefined,
    description: keyType.description,
  }
}

function isIndexableType(context: GenerationContext, type: Type): boolean {
  if (typeof type === "string") {
    return (
      type === "string" ||
      type === "number" ||
      type.startsWith("defines.") ||
      context.numericTypes.has(type) ||
      // temp hardcoded
      type === "CollisionMaskLayer"
    )
  }
  if (type.complex_type === "literal") {
    return typeof type.value === "string" || typeof type.value === "number"
  }
  if (type.complex_type === "type") {
    return isIndexableType(context, type.value)
  }
  if (type.complex_type === "union") {
    return type.options.every((t) => isIndexableType(context, t))
  }
  return false
}

function mapLuaCustomTableType(context: GenerationContext, type: DictionaryComplexType): RWType {
  const keyType = mapTypeInternal(context, type.key, undefined)
  const valueType = mapTypeInternal(context, type.value, undefined)
  if (keyType.description || valueType.description) {
    context.warning("LuaCustomTable type has element with description: " + JSON.stringify(type))
  }
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType.mainType, valueType.mainType]),
    asString: undefined,
  }
}

function mapFunctionType(context: GenerationContext, type: FunctionComplexType): RWType {
  const parameters = type.parameters.map((value, index) => {
    const paramType = mapTypeInternal(context, value, undefined)
    if (paramType.description) context.warning("Function type has parameter with description: " + JSON.stringify(type))
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      ts.factory.createIdentifier(`arg${index + 1}`),
      undefined,
      paramType.mainType
    )
  })
  const funcType = ts.factory.createFunctionTypeNode(undefined, parameters, Types.void)
  return {
    mainType: funcType,
    asString: undefined,
  }
}

function mapLiteralType(context: GenerationContext, type: LiteralComplexType): RWType {
  const value = type.value
  if (typeof value === "string") {
    return { mainType: Types.stringLiteral(value), asString: `\`"${value}"\``, description: type.description }
  } else if (typeof value === "number") {
    return { mainType: Types.numberLiteral(value), asString: `\`${value}\``, description: type.description }
  } else {
    return { mainType: Types.booleanLiteral(value), asString: `\`${value}\``, description: type.description }
  }
}

function mapLuaLazyLoadedValueType(context: GenerationContext, type: LuaLazyLoadedValueComplexType): RWType {
  const valueType = mapTypeInternal(context, type.value, undefined)
  if (valueType.description)
    context.warning("LuaLazyLoadedValue type has element with description: " + JSON.stringify(type))
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [valueType.mainType]),
    asString: undefined,
  }
}

function mapStructType(
  context: GenerationContext,
  type: StructComplexType,
  typeContext: TypeContext | undefined
): RWType {
  assert(typeContext)
  const attributes = type.attributes
    .sort(sortByOrder)
    .flatMap((a) => mapAttribute(context, a, typeContext.contextName, typeContext.existingDef))

  return {
    mainType: ts.factory.createTypeLiteralNode(attributes),
    asString: undefined,
  }
}

function mapTableType(
  context: GenerationContext,
  type: TableComplexType,
  typeContext: TypeContext | undefined
): RWType {
  assert(typeContext)
  if (type.variant_parameter_groups) {
    context.warning("variant_parameter_groups is not supported in mapType")
  }

  const parameters = type.parameters
    .sort(sortByOrder)
    .map((p) => mapParameterToProperty(context, p, typeContext.contextName, typeContext.existingDef))
  return {
    mainType: ts.factory.createTypeLiteralNode(parameters),
    asString: undefined,
  }
}

function mapTupleType(
  context: GenerationContext,
  type: TableComplexType,
  typeContext: TypeContext | undefined
): RWType {
  assert(typeContext)
  if (type.variant_parameter_groups) {
    context.warning("variant_parameter_groups is not supported for tuples")
  }
  const parameters = type.parameters.sort(sortByOrder).map((p) => {
    const paramType = mapMemberType(context, p, typeContext.contextName, p.type)
    return ts.factory.createNamedTupleMember(
      undefined,
      ts.factory.createIdentifier(p.name),
      p.optional ? Tokens.question : undefined,
      paramType
    )
  })
  return {
    mainType: ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.ReadonlyKeyword,
      ts.factory.createTupleTypeNode(parameters)
    ),
    asString: undefined,
  }
}

function tryUseIndexType(
  context: GenerationContext,
  member: { name?: string },
  parent: string,
  type: Type
): ts.TypeNode | undefined {
  if (type !== "uint" && type !== "uint64") return undefined
  for (const indexType of IndexTypes) {
    const expectedType = indexType.typeOverride ?? "uint"
    if (type !== expectedType) continue
    if (
      (indexType.mainAttributePath.parent === parent && member.name === indexType.mainAttributePath.name) ||
      parent === indexType.mainAttributePath.parent + "." + indexType.mainAttributePath.name ||
      parent === indexType.identificationConcept ||
      (indexType.attributePattern && member.name?.match(indexType.attributePattern))
    ) {
      return mapBasicType(context, indexType.name).mainType
    }
  }
  return undefined
}

function tryUseStringEnum(
  member: {
    description: string
    name?: string
  },
  type: Type
): ts.TypeNode | undefined {
  if (type === "string") {
    const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
    if (
      (matches.size >= 2 && !member.description.match(/e\.g\. /i)) ||
      (matches.size === 1 &&
        (member.description.match(/One of `"[a-zA-Z-_]+?"`/) ||
          member.description.match(/Can only be `"[a-zA-Z-_]+?"`/)))
    ) {
      return ts.factory.createUnionTypeNode(Array.from(matches).map(Types.stringLiteral))
    }
  }
  /*
  else {
    if (member.name === "type") {
      console.log(chalk.blueBright(`Possibly enum type, from ${parent}.${member.name}`))
    }
  }
  */

  return undefined
}

function tryUseFlagValue(
  context: GenerationContext,
  member: {
    description: string
    name?: string
  },
  type: Type
): ts.TypeNode | undefined {
  if (member.name !== "flag" || type !== "string") return undefined
  const match = member.description.match(/\[([A-Z][a-zA-Z]+Flags)]/)
  if (!match) return undefined
  const flagName = match[1]

  return ts.factory.createTypeOperatorNode(ts.SyntaxKind.KeyOfKeyword, ts.factory.createTypeReferenceNode(flagName))
}

function isNullableFromDescription(
  context: GenerationContext,
  member: {
    description: string
    name?: string
  },
  parent: string
): boolean {
  const nullableRegex = /(returns|or|be|possibly|otherwise|else|) [`']?nil[`']?|`?nil`? (if|when|otherwise)/i
  const nullable = member.description.match(nullableRegex)
  if (nullable) {
    if (!member.description.match(/[`' ]nil/i)) {
      context.warning(
        `Inconsistency in nullability in description: ${parent}.${member.name}\n`,
        indent(member.description)
      )
    }
    return true
  }
  // todo: better nullability detection
  // if ((member as WithNotes).notes?.some((note) => note.match(nullableRegex))) {
  //   console.log(chalk.blueBright("Possibly nullable from note: ", (member as WithNotes).notes))
  // }
  return false
}

export function makeNullable(typeNode: ts.TypeNode): ts.TypeNode {
  function isNilTypeNode(t: ts.TypeNode) {
    return ts.isTypeReferenceNode(t) && ts.isIdentifier(t.typeName) && t.typeName.text === "nil"
  }

  if (!ts.isUnionTypeNode(typeNode)) {
    return ts.factory.createUnionTypeNode([typeNode, Types.nil])
  }
  if (typeNode.types.some((t) => isNilTypeNode(t))) {
    return typeNode
  }
  return ts.factory.createUnionTypeNode([...typeNode.types, Types.nil])
}
