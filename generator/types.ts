import assert from "assert"
import ts from "typescript"
import DefinitionsGenerator from "./DefinitionsGenerator"
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
import { indent, Types } from "./genUtil"
import { assertNever, sortByOrder } from "./util"

interface RWType {
  mainType: ts.TypeNode
  description?: string
  asString: string | undefined
  // writeType?: ts.TypeNode
}

export interface TypeContext {
  baseName: string
  member?: string
}

function getPath(context: TypeContext) {
  if (context.member) {
    return context.baseName + "." + context.member
  }
  return context.baseName
}

function mapTypeInternal(generator: DefinitionsGenerator, type: Type, typeContext: TypeContext | undefined): RWType {
  if (typeof type === "string") return mapBasicType(type)
  switch (type.complex_type) {
    case "type":
      return mapTypeType(generator, type, typeContext)
    case "union":
      return mapUnionType(generator, type, typeContext)
    case "array":
      return mapArrayType(generator, type)
    case "dictionary":
      return mapDictionaryType(generator, type)
    case "LuaCustomTable":
      return mapLuaCustomTableType(generator, type)
    case "function":
      return mapFunctionType(generator, type)
    case "literal":
      return mapLiteralType(generator, type)
    case "LuaLazyLoadedValue":
      return mapLuaLazyLoadedValueType(generator, type)
    case "struct":
      return mapStructType(generator, type, typeContext)
    case "table":
      return mapTableType(generator, type, typeContext)
    case "tuple":
      return mapTupleType(generator, type)
    default:
      assertNever(type)
  }
}

export function mapMemberType(
  generator: DefinitionsGenerator,
  member: { description: string; name?: string; optional?: boolean },
  parent: string,
  type: Type
): RWType {
  const result =
    tryUseIndexType(member, parent, type) ??
    tryUseStringEnum(member, type) ??
    tryUseFlagValue(generator, member, type) ??
    mapTypeInternal(generator, type, {
      baseName: parent,
      member: member.name,
    })

  if (result.description) {
    generator.warning("Don't have use for type description in member: " + JSON.stringify(member))
  }

  const isNullable = !member.optional && isNullableFromDescription(generator, member, parent)
  return isNullable ? makeNullable(result) : result
}

export function mapType(
  generator: DefinitionsGenerator,
  type: Type,
  typeContext: TypeContext | undefined
): ts.TypeNode {
  const result = mapTypeInternal(generator, type, typeContext)
  if (result.description) {
    generator.warning("Don't have use for type description: " + JSON.stringify(type))
  }
  return result.mainType
}

export function mapTypeWithDescription(
  generator: DefinitionsGenerator,
  type: Type,
  typeContext: TypeContext
): {
  type: ts.TypeNode
  description: string | undefined
} {
  const result = mapTypeInternal(generator, type, typeContext)
  return {
    type: result.mainType,
    description: result.description,
  }
}

function mapTypeType(
  generator: DefinitionsGenerator,
  type: TypeComplexType,
  typeContext: TypeContext | undefined
): RWType {
  const result = mapTypeInternal(generator, type.value, typeContext)
  if (type.description) {
    if (result.description) {
      generator.warning("type type already has description: " + JSON.stringify(type))
    }
    result.description = type.description
  }
  return result
}

function mapBasicType(type: string): RWType {
  // todo: analyze read/write usages
  // todo: use readWriteConcepts
  return {
    mainType: ts.factory.createTypeReferenceNode(type),
    asString: type,
  }
}

// todo: separate in case of different read/write types

function mapUnionType(
  generator: DefinitionsGenerator,
  type: UnionComplexType,
  typeContext: TypeContext | undefined
): RWType {
  const types = type.options.map((t) => mapTypeInternal(generator, t, typeContext))
  let description: string | undefined
  if (type.full_format) {
    description = types
      .map((t) => {
        if (!t.asString) generator.warning("Union type with full format has no asString: " + JSON.stringify(type))
        if (t.description) {
          return ` - ${t.asString}: ${t.description}`
        }
        return ` - ${t.asString}`
      })
      .join("\n")
  }

  return {
    mainType: ts.factory.createUnionTypeNode(types.map((t) => t.mainType)),
    description,
    asString: undefined,
  }
}

function mapArrayType(generator: DefinitionsGenerator, type: ArrayComplexType): RWType {
  const elementType = mapTypeInternal(generator, type.value, undefined)
  // todo: add readonly modifier if write but not read
  return {
    mainType: ts.factory.createArrayTypeNode(elementType.mainType),
    asString: elementType.asString ? `${elementType.asString}[]` : undefined,
  }
}

function mapDictionaryType(generator: DefinitionsGenerator, type: DictionaryComplexType): RWType {
  let recordType = "Record"
  if (!isIndexableType(generator, type.key)) {
    const isIndexable = isIndexableType(generator, type.key)
    generator.warning("dictionary key is not indexable: " + JSON.stringify(type.key), isIndexable)
    recordType = "LuaTable"
  }
  const keyType = mapTypeInternal(generator, type.key, undefined)
  const valueType = mapTypeInternal(generator, type.value, undefined)
  return {
    mainType: ts.factory.createTypeReferenceNode(recordType, [keyType.mainType, valueType.mainType]),
    asString: undefined,
  }
}

function isIndexableType(generator: DefinitionsGenerator, type: Type): boolean {
  if (typeof type === "string") {
    return (
      type === "string" ||
      type === "number" ||
      type.startsWith("defines.") ||
      generator.numericTypes.has(type) ||
      // temp hardcoded
      type === "CollisionMaskLayer"
    )
  }
  if (type.complex_type === "literal") {
    return typeof type.value === "string" || typeof type.value === "number"
  }
  if (type.complex_type === "type") {
    return isIndexableType(generator, type.value)
  }
  if (type.complex_type === "union") {
    return type.options.every((t) => isIndexableType(generator, t))
  }
  return false
}

function mapLuaCustomTableType(generator: DefinitionsGenerator, type: DictionaryComplexType): RWType {
  const keyType = mapTypeInternal(generator, type.key, undefined)
  const valueType = mapTypeInternal(generator, type.value, undefined)
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType.mainType, valueType.mainType]),
    asString: undefined,
  }
}

function mapFunctionType(generator: DefinitionsGenerator, type: FunctionComplexType): RWType {
  const parameters = type.parameters.map((value, index) => {
    const paramType = mapTypeInternal(generator, value, undefined).mainType
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      ts.factory.createIdentifier(`arg${index + 1}`),
      undefined,
      paramType
    )
  })
  const funcType = ts.factory.createFunctionTypeNode(undefined, parameters, Types.void)
  return {
    mainType: funcType,
    asString: undefined,
  }
}

function mapLiteralType(generator: DefinitionsGenerator, type: LiteralComplexType): RWType {
  const value = type.value
  if (typeof value === "string") {
    return { mainType: Types.stringLiteral(value), asString: `"${value}"` }
  } else if (typeof value === "number") {
    return { mainType: Types.numberLiteral(value), asString: value.toString() }
  } else {
    return { mainType: Types.booleanLiteral(value), asString: value.toString() }
  }
}

function mapLuaLazyLoadedValueType(generator: DefinitionsGenerator, type: LuaLazyLoadedValueComplexType): RWType {
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [
      mapTypeInternal(generator, type.value, undefined).mainType,
    ]),
    asString: undefined,
  }
}

function mapStructType(
  generator: DefinitionsGenerator,
  type: StructComplexType,
  typeContext: TypeContext | undefined
): RWType {
  assert(typeContext)
  const attributes = type.attributes.sort(sortByOrder).flatMap((a) => {
    // todo: parent
    return generator.mapAttribute(a, getPath(typeContext), undefined)
  })

  return {
    mainType: ts.factory.createTypeLiteralNode(attributes),
    asString: undefined,
  }
}

function mapTableType(
  generator: DefinitionsGenerator,
  type: TableComplexType,
  typeContext: TypeContext | undefined
): RWType {
  assert(typeContext)
  if (type.variant_parameter_groups) {
    generator.warning("variant_parameter_groups is not yet supported")
  }

  const parameters = type.parameters.sort(sortByOrder).map((p) => {
    // todo: parent and existing
    return generator.mapParameterToProperty(p, getPath(typeContext))
  })
  return {
    mainType: ts.factory.createTypeLiteralNode(parameters),
    asString: undefined,
  }
}

function mapTupleType(generator: DefinitionsGenerator, type: TableComplexType): RWType {
  if (type.variant_parameter_groups) {
    generator.warning("variant_parameter_groups is not supported for tuples")
  }
  const parameters = type.parameters.sort(sortByOrder).map((p) => {
    // todo: parent
    const paramType = mapMemberType(generator, p, "<<tuple type>>", p.type).mainType
    return ts.factory.createNamedTupleMember(undefined, ts.factory.createIdentifier(p.name), undefined, paramType)
  })
  return {
    mainType: ts.factory.createTupleTypeNode(parameters),
    asString: undefined,
  }
}

function tryUseIndexType(
  member: {
    name?: string
  },
  parent: string,
  type: Type
): RWType | undefined {
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
      return mapBasicType(indexType.name)
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
): RWType | undefined {
  if (type === "string") {
    const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
    if (
      (matches.size >= 2 && !member.description.match(/e\.g\. /i)) ||
      (matches.size === 1 &&
        (member.description.match(/One of `"[a-zA-Z-_]+?"`/) ||
          member.description.match(/Can only be `"[a-zA-Z-_]+?"`/)))
    ) {
      const outType = ts.factory.createUnionTypeNode(Array.from(matches).map(Types.stringLiteral))
      return { mainType: outType, asString: undefined }
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
  generator: DefinitionsGenerator,
  member: {
    description: string
    name?: string
  },
  type: Type
): RWType | undefined {
  if (member.name !== "flag" || type !== "string") return undefined
  const match = member.description.match(/\[([A-Z][a-zA-Z]+Flags)]/)
  if (!match) return undefined
  const flagName = match[1]

  const result = ts.factory.createTypeOperatorNode(
    ts.SyntaxKind.KeyOfKeyword,
    ts.factory.createTypeReferenceNode(flagName)
  )
  return { mainType: result, asString: flagName }
}

function isNullableFromDescription(
  generator: DefinitionsGenerator,
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
      generator.warning(
        `Inconsistency in nullability in description: ${parent}.${member.name}\n`,
        indent(member.description)
      )
    }
    return true
  }
  // if ((member as WithNotes).notes?.some((note) => note.match(nullableRegex))) {
  //   console.log(chalk.blueBright("Possibly nullable from note: ", (member as WithNotes).notes))
  // }
  return false
}

export function makeNullable(type: RWType): RWType {
  function isNilTypeNode(typeNode: ts.TypeNode) {
    return ts.isTypeReferenceNode(typeNode) && ts.isIdentifier(typeNode.typeName) && typeNode.typeName.text === "nil"
  }
  function makeTypeNullable(typeNode: ts.TypeNode): ts.TypeNode {
    if (!ts.isUnionTypeNode(typeNode)) {
      return ts.factory.createUnionTypeNode([typeNode, Types.nil])
    }
    if (typeNode.types.some((t) => isNilTypeNode(t))) {
      return typeNode
    }
    return ts.factory.createUnionTypeNode([...typeNode.types, Types.nil])
  }
  return { mainType: makeTypeNullable(type.mainType), description: type.description, asString: undefined }
}