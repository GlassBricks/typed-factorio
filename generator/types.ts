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
import { Types } from "./genUtil"
import { assertNever, sortByOrder } from "./util"

export interface RWType<T extends ts.Node = ts.TypeNode> {
  mainType: T
  // writeType?: ts.TypeNode
}

export function mapType(generator: DefinitionsGenerator, type: Type): RWType {
  if (typeof type === "string") return mapBasicType(generator, type)
  switch (type.complex_type) {
    case "type":
      return mapTypeType(generator, type)
    case "union":
      return mapUnionType(generator, type)
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
      return mapStructType(generator, type)
    case "table":
      return mapTableType(generator, type)
    case "tuple":
      return mapTupleType(generator, type)
    default:
      assertNever(type)
  }
}

function mapTypeType(generator: DefinitionsGenerator, type: TypeComplexType): RWType {
  // todo: decide what to do about description
  return mapType(generator, type.value)
}

function mapBasicType(generator: DefinitionsGenerator, type: string): RWType {
  // todo: analyze read/write usages
  // todo: use readWriteConcepts
  return {
    mainType: ts.factory.createTypeReferenceNode(type),
  }
}

// todo: separate in case of different read/write types

function mapUnionType(generator: DefinitionsGenerator, type: UnionComplexType): RWType {
  const types = type.options.map((t) => mapType(generator, t))
  return {
    mainType: ts.factory.createUnionTypeNode(types.map((t) => t.mainType)),
  }
}

function mapArrayType(generator: DefinitionsGenerator, type: ArrayComplexType): RWType {
  const elementType = mapType(generator, type.value)
  // todo: add readonly modifier if write but not read
  return {
    mainType: ts.factory.createArrayTypeNode(elementType.mainType),
  }
}

function mapDictionaryType(generator: DefinitionsGenerator, type: DictionaryComplexType): RWType {
  let recordType = "Record"
  if (!isIndexableType(generator, type.key)) {
    generator.warning("dictionary key is not indexable: " + JSON.stringify(type.key))
    recordType = "LuaTable"
  }
  const keyType = mapType(generator, type.key)
  const valueType = mapType(generator, type.value)
  return {
    mainType: ts.factory.createTypeReferenceNode(recordType, [keyType.mainType, valueType.mainType]),
  }
}

function isIndexableType(generator: DefinitionsGenerator, type: Type): boolean {
  // todo: track indexable concepts
  if (typeof type === "string") {
    return type === "string" || type === "number" || type.startsWith("defines.") || generator.numericTypes.has(type)
  }
  if (type.complex_type === "literal") {
    return typeof type.value === "string" || typeof type.value === "number"
  }
  if (type.complex_type === "union") {
    return type.options.every((t) => isIndexableType(generator, t))
  }
  return false
}

function mapLuaCustomTableType(generator: DefinitionsGenerator, type: DictionaryComplexType): RWType {
  const keyType = mapType(generator, type.key)
  const valueType = mapType(generator, type.value)
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType.mainType, valueType.mainType]),
  }
}

function mapFunctionType(generator: DefinitionsGenerator, type: FunctionComplexType) {
  const parameters = type.parameters.map((value, index) => {
    const paramType = mapType(generator, value).mainType
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
  }
}

function mapLiteralType(generator: DefinitionsGenerator, type: LiteralComplexType) {
  const value = type.value
  if (typeof value === "string") {
    return { mainType: Types.stringLiteral(value) }
  } else if (typeof value === "number") {
    return { mainType: Types.numberLiteral(value) }
  } else {
    return { mainType: Types.booleanLiteral(value) }
  }
}

function mapLuaLazyLoadedValueType(generator: DefinitionsGenerator, type: LuaLazyLoadedValueComplexType) {
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [mapType(generator, type.value).mainType]),
  }
}

function mapStructType(generator: DefinitionsGenerator, type: StructComplexType) {
  const attributes = type.attributes.sort(sortByOrder).flatMap((a) => {
    // todo: parent
    return generator.mapAttribute(a, "<<attribute>>", undefined)
  })

  return {
    mainType: ts.factory.createTypeLiteralNode(attributes),
  }
}

function mapTableType(generator: DefinitionsGenerator, type: TableComplexType) {
  if (type.variant_parameter_groups) {
    generator.warning("variant_parameter_groups is not yet supported")
  }

  const parameters = type.parameters.sort(sortByOrder).map((p) => {
    // todo: parent and existing
    return generator.mapParameterToRWProperties(p, "<<table type>>")
  })
  return {
    mainType: ts.factory.createTypeLiteralNode(parameters.map((p) => p.mainType)),
  }
}

function mapTupleType(generator: DefinitionsGenerator, type: TableComplexType) {
  if (type.variant_parameter_groups) {
    generator.warning("variant_parameter_groups is not yet supported for tuples")
  }
  const parameters = type.parameters.sort(sortByOrder).map((p) => {
    // todo: parent
    const paramType = generator.mapTypeWithTransforms(p, "<<tuple type>>", p.type).mainType
    return ts.factory.createNamedTupleMember(undefined, ts.factory.createIdentifier(p.name), undefined, paramType)
  })
  return {
    mainType: ts.factory.createTupleTypeNode(parameters),
  }
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
  return { mainType: makeTypeNullable(type.mainType) }
}
