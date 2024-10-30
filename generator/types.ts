import assert from "assert"
import ts, { TypeNode } from "typescript"
import { addJsDoc } from "./documentation.js"

import type * as prototype from "./FactorioPrototypeApiJson.js"
import type * as runtime from "./FactorioRuntimeApiJson.js"
import { IndexTypes } from "./runtime/index-types.js"
import { escapePropertyName, indent, Modifiers, printNode, Tokens, Types } from "./genUtil.js"
import { InterfaceDef, TypeAliasDef } from "./manualDefinitions.js"
import { mapAttribute, mapParameterToProperty } from "./runtime/members.js"
import { RWUsage } from "./read-write-types.js"
import { assertNever, byOrder } from "./util.js"
import { RuntimeGenerationContext } from "./runtime"
import { GenerationContext } from "./GenerationContext.js"
import { PrototypeGenerationContext } from "./prototype"
import { getSpecificPrototypeTypeForTypeAttribute } from "./prototypeSubclassTypes.js"

export interface TypeContext {
  contextName?: string
  existingDef?: InterfaceDef | TypeAliasDef

  prototypeConceptProperties?: ts.TypeElement[]
}

export interface RWType {
  mainType: ts.TypeNode
  altWriteType?: ts.TypeNode
}

export interface TypeMemberDescription {
  description: string
  name: string
  optional: boolean
}

export function mapAttributeType(
  context: RuntimeGenerationContext,
  attribute: runtime.Attribute,
  parentName: string,
  hasExistingType?: boolean,
): RWType {
  if (!attribute.read_type && !attribute.write_type) {
    throw new Error(`Attribute ${attribute.name} has no read or write type`)
  }
  if (
    attribute.read_type &&
    attribute.write_type &&
    JSON.stringify(attribute.read_type) !== JSON.stringify(attribute.write_type)
  ) {
    context.warning(`Attribute ${attribute.name} has different read and write types`)
  }
  const type = attribute.read_type ?? attribute.write_type!
  let usage = RWUsage.None
  if (attribute.read_type) usage |= RWUsage.Read
  if (attribute.write_type) usage |= RWUsage.Write
  return mapMemberType(context, attribute, parentName, type, usage, hasExistingType)
}

/** May apply transformations to the type based on additional context. */
export function mapMemberType(
  context: RuntimeGenerationContext,
  member: TypeMemberDescription,
  parentName: string,
  type: runtime.Type,
  usage: RWUsage,
  hasExistingType?: boolean,
): RWType {
  const result =
    tryUseIndexType(context, member, parentName, type) ??
    tryUseStringUnion(member, type) ??
    tryUseFlagValue(context, member, type) ??
    tryUsePrototypeSubtype(context, member, type, parentName, hasExistingType) ??
    mapRuntimeType(context, type, parentName + (member.name ? "." + member.name : ""), usage)

  const isNullable = !member.optional && isNullableFromDescription(context, member, parentName)
  return isNullable
    ? {
        mainType: makeNullable(result.mainType),
        altWriteType: result.altWriteType && makeNullable(result.altWriteType),
      }
    : result
}

export function mapRuntimeType(
  context: RuntimeGenerationContext,
  type: runtime.Type,
  name: string | undefined,
  usage: RWUsage,
): RWType {
  const result = mapTypeInternal(context, type, name !== undefined ? { contextName: name } : undefined, usage)
  if (result?.description) {
    context.warning("Don't have use for type description: " + JSON.stringify(type))
  }
  return result
}

export function mapConceptType(
  context: RuntimeGenerationContext,
  type: runtime.Type,
  typeContext: TypeContext,
  usage: RWUsage,
):
  | {
      mainType: ts.TypeNode
      altWriteType?: ts.TypeNode
      description?: string
    }
  | {
      builtinType: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
    }
  | undefined {
  return mapTypeInternalAny(context, type, typeContext, usage)
}

export function mapPrototypeType(
  context: PrototypeGenerationContext,
  type: prototype.Type,
): {
  type: ts.TypeNode
  description?: string
} {
  const iType = mapTypeInternal(context, type, undefined, RWUsage.Write)
  return {
    type: iType.mainType,
    description: iType.description,
  }
}

export function mapPrototypeConcept(
  context: PrototypeGenerationContext,
  type: prototype.Type,
  prototypeProperties: ts.TypeElement[] | undefined,
  existingDef: InterfaceDef | TypeAliasDef | undefined,
): {
  type: ts.TypeNode
  description?: string
} {
  const iType = mapTypeInternal(
    context,
    type,
    {
      existingDef,
      prototypeConceptProperties: prototypeProperties,
    },
    RWUsage.Write,
  )
  return {
    type: iType.mainType,
    description: iType.description,
  }
}

function assertIsRuntimeGenerationContext(context: GenerationContext): asserts context is RuntimeGenerationContext {
  assert(context instanceof RuntimeGenerationContext)
}

interface IntermediateType {
  mainType: ts.TypeNode
  altWriteType?: ts.TypeNode
  description?: string
  asString: string | undefined
}

function mapTypeInternalAny(
  context: GenerationContext,
  type: runtime.Type | prototype.Type,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
):
  | IntermediateType
  | {
      builtinType: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
    }
  | undefined {
  // assert(usage !== RWUsage.None)
  if (typeof type === "string") return mapBasicType(context, type, typeContext, usage)
  switch (type.complex_type) {
    case "type":
      return mapTypeType(context, type, typeContext, usage)
    case "union":
      return mapUnionType(context, type, typeContext, usage)
    case "array":
      return mapArrayType(context, type, typeContext, usage)
    case "dictionary":
      return mapDictionaryType(context, type, typeContext, usage)
    case "LuaCustomTable":
      return mapLuaCustomTableType(context, type, usage)
    case "function":
      return mapFunctionType(context, type)
    case "literal":
      return mapLiteralType(context, type)
    case "LuaLazyLoadedValue":
      return mapLuaLazyLoadedValueType(context, type, usage)
    case "LuaStruct":
      return mapLuaStructType(context, type, typeContext)
    case "table":
      return mapTableType(context, type, typeContext, usage)
    case "tuple":
      return mapTupleType(context, type, typeContext, usage)
    case "struct":
      return mapPrototypeStructType(context, typeContext)
    case "builtin": {
      const node = mapBuiltinType(context, type, typeContext)
      if (!node) return undefined
      return {
        mainType: undefined!,
        builtinType: node,
        asString: undefined,
      }
    }
    default:
      assertNever(type)
  }
}
function mapTypeInternal(
  context: GenerationContext,
  type: runtime.Type | prototype.Type,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  const result = mapTypeInternalAny(context, type, typeContext, usage)
  if (!result) throw new Error("Result expected for type: " + JSON.stringify(type))
  if ("builtinType" in result) {
    throw new Error("Builtin type not expected: " + JSON.stringify(type))
  }
  return result
}

function mapConceptRwType(
  context: RuntimeGenerationContext,
  rwType: {
    read: string | ts.TypeNode
    write: string | ts.TypeNode
  },
  usage: RWUsage,
): IntermediateType {
  assert(usage)

  function getTypeNode(value: string | ts.TypeNode): ts.TypeNode {
    if (typeof value === "string") {
      return createTypeNode(context, value)
    }
    return value
  }

  function toString(value: string | ts.TypeNode): string {
    return typeof value === "string" ? value : printNode(value)
  }

  switch (usage) {
    case RWUsage.ReadWrite:
      return {
        mainType: getTypeNode(rwType.read),
        altWriteType: getTypeNode(rwType.write),
        asString: toString(rwType.read),
      }
    case RWUsage.Read:
      return {
        mainType: getTypeNode(rwType.read),
        asString: toString(rwType.read),
      }
    case RWUsage.Write:
      return {
        mainType: getTypeNode(rwType.write),
        asString: toString(rwType.write),
      }
    default:
      assertNever(usage)
  }
}

// possibly prefixes with namespace, if needed
function createTypeNode(context: GenerationContext, typeName: string) {
  context.currentFile.addImport(context.stageName, typeName)

  return ts.factory.createTypeReferenceNode(typeName)
}

function mapBasicType(
  context: GenerationContext,
  type: string,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  if (context instanceof RuntimeGenerationContext) {
    // hard-coded ish for now
    const usingIndex = tryUseIndexTypeFromBasicType(context, type, typeContext)
    if (usingIndex) return usingIndex
    const concept = context.concepts.get(type)
    const rwType = concept && context.conceptUsageAnalysis.conceptReadWriteTypes.get(concept)
    if (rwType) {
      return mapConceptRwType(context, rwType, usage)
    }
  }

  const typeName = context.references.get(type)
  return {
    mainType: createTypeNode(context, type),
    asString: typeName ? `[${typeName}](runtime:${type})` : `\`${type}\``,
  }
}

function tryUseIndexTypeFromBasicType(
  context: RuntimeGenerationContext,
  type: string,
  typeContext: TypeContext | undefined,
): IntermediateType | undefined {
  if (!typeContext || !type.startsWith("uint")) return undefined
  for (const indexType of IndexTypes) {
    const expectedType = indexType.expectedTypes ?? ["uint"]
    if (!expectedType.includes(type)) continue
    if (typeContext.contextName === indexType.identificationConcept) {
      return {
        mainType: createTypeNode(context, indexType.name),
        asString: indexType.name,
      }
    }
  }
  return undefined
}

function mapTypeType(
  context: GenerationContext,
  type: runtime.TypeType | prototype.TypeType,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  const result = mapTypeInternal(context, type.value, typeContext, usage)
  if (type.description) {
    if (result.description) {
      context.warning("type type already has description: " + JSON.stringify(type))
    }
    result.description = type.description
  }
  return result
}

const unionDescriptionHeader = "\n## Union members\n"
function isFullUnion(t: prototype.Type | runtime.Type): t is runtime.UnionType & { full_format: true } {
  return typeof t !== "string" && t.complex_type === "union" && t.full_format
}

function mapUnionType(
  context: GenerationContext,
  type: runtime.UnionType | prototype.UnionType,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  const annotations = typeContext?.existingDef?.annotations
  let removedIndex: number | undefined
  if (annotations?.unionReplace) {
    const toReplace = annotations.unionReplace[0]
    const removed = type.options.findIndex(
      (o) => (typeof o !== "string" && o.complex_type === toReplace) || o === toReplace,
    )
    if (removed !== -1) {
      removedIndex = removed
    } else {
      context.warning(`unionReplace type ${toReplace} not found in ${JSON.stringify(type)}`)
    }
  }

  const types = type.options.map((t) => mapTypeInternal(context, t, typeContext, usage))

  let description: string | undefined
  if (type.full_format) {
    description =
      unionDescriptionHeader +
      types
        .map((t) => {
          if (!t.asString) context.warning("Union type with full format has no asString: " + JSON.stringify(type))
          if (t.description) {
            return `- ${t.asString}: ${t.description}`
          }
          return `- ${t.asString}`
        })
        .map((x) => x.trim())
        .join("\n")
  } else if (type.options.some(isFullUnion)) {
    description = types[type.options.findIndex(isFullUnion)].description
  } else if (types.some((t) => t.description)) {
    context.warning("Union type with no full format has elements with description: " + JSON.stringify(type))
  }

  let altType: ts.TypeNode[] | undefined

  if (usage === RWUsage.ReadWrite && types.some((t) => t.altWriteType)) {
    altType = types.map((t) => t.altWriteType ?? t.mainType)
  }

  const typeNodes = types.map((t) => t.mainType)
  if (annotations?.unionReplace || annotations?.unionAdd) {
    if (altType) {
      context.warning("unionReplace and unionAdd annotations are not compatible with separate read/write types")
    }
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
    mainType: makeUnion(typeNodes),
    altWriteType: altType && makeUnion(altType),
    description,
    asString: undefined,
  }
}

function makeUnion(types: ts.TypeNode[]): ts.TypeNode {
  const dedupedTypes = new Set<string | TypeNode>()
  for (const type of types) {
    if (ts.isTypeReferenceNode(type) && ts.isIdentifier(type.typeName) && !type.typeArguments?.length) {
      dedupedTypes.add(type.typeName.text)
    } else {
      dedupedTypes.add(type)
    }
  }
  const typesArray = Array.from(dedupedTypes, (t) =>
    typeof t === "string" ? ts.factory.createTypeReferenceNode(t) : t,
  )
  if (typesArray.length === 1) return typesArray[0]
  return ts.factory.createUnionTypeNode(typesArray)
}

function mapArrayType(
  context: GenerationContext,
  type:
    | runtime.ArrayType
    | prototype.ArrayType
    | {
        complex_type: "array"
        value: runtime.UnionType | prototype.UnionType
        unionArray: true
      },
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  if (
    typeof type.value === "object" &&
    type.value.complex_type === "union" &&
    typeContext?.contextName?.endsWith("Filter")
  ) {
    // array of union -> union of arrays
    const unionType: runtime.UnionType | prototype.UnionType = {
      complex_type: "union" as const,
      options: type.value.options.map((o) => ({
        complex_type: "array",
        value: o,
        unionArray: true,
      })) as runtime.ArrayType[],
      full_format: type.value.full_format,
    }
    return mapUnionType(context, unionType, typeContext, usage)
  }

  const elementType = mapTypeInternal(context, type.value, typeContext, usage)

  let mainType: ts.TypeNode = ts.factory.createArrayTypeNode(elementType.mainType)
  // add readonly modifier if write but not read
  if (usage === RWUsage.Write) {
    mainType = ts.factory.createTypeOperatorNode(ts.SyntaxKind.ReadonlyKeyword, mainType)
  }
  let altWriteType: ts.TypeNode | undefined
  if (elementType.altWriteType) {
    altWriteType = ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.ReadonlyKeyword,
      ts.factory.createArrayTypeNode(elementType.altWriteType),
    )
  } else if ("unionArray" in type && usage & RWUsage.Write) {
    altWriteType = ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.ReadonlyKeyword,
      ts.factory.createArrayTypeNode(elementType.mainType),
    )
  }

  return {
    mainType,
    altWriteType,
    asString: "unionArray" in type ? elementType.asString : undefined,
    description: elementType.description,
  }
}

enum IndexType {
  None = 0,
  Basic = 1,
  StringUnion = (1 << 1) | Basic,
}

function getIndexableType(context: GenerationContext, type: runtime.Type | prototype.Type): IndexType {
  if (typeof type === "string") {
    if (
      type === "string" ||
      type === "number" ||
      (context instanceof RuntimeGenerationContext && (type.startsWith("defines.") || context.numericTypes.has(type)))
    )
      return IndexType.Basic
    // if (type === "CollisionMaskLayer") return IndexType.StringUnion
    const innerType = context.tryGetTypeOfReference(type)
    if (innerType) return getIndexableType(context, innerType)
    return IndexType.None
  }
  if (type.complex_type === "literal") {
    if (typeof type.value === "string") return IndexType.StringUnion
    if (typeof type.value === "number") return IndexType.Basic
    return IndexType.None
  }
  if (type.complex_type === "type") {
    return getIndexableType(context, type.value)
  }
  if (type.complex_type === "union") {
    return type.options.map((t) => getIndexableType(context, t)).reduce((a, b) => a & b, IndexType.StringUnion)
  }
  return IndexType.None
}

function mapDictionaryType(
  context: GenerationContext,
  type: runtime.DictionaryType | prototype.DictionaryType,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  let recordType = "Record"
  const indexType = getIndexableType(context, type.key)
  if (indexType === IndexType.None) {
    context.warning("dictionary key is not indexable: " + JSON.stringify(type.key))
    recordType = "LuaTable"
  }
  // flags
  if (
    context instanceof RuntimeGenerationContext &&
    indexType === IndexType.StringUnion &&
    typeContext?.contextName &&
    typeof type.value !== "string" &&
    type.value.complex_type === "literal" &&
    type.value.value === true
  ) {
    // Record<... true>
    return makeFlagsType(context, typeContext, type.key as runtime.Type, usage)
  }

  const keyType = mapTypeInternal(context, type.key, undefined, usage)
  const valueType = mapTypeInternal(context, type.value, undefined, usage)
  if (keyType.altWriteType) {
    context.warning("Dictionary type has key with altWriteType: " + JSON.stringify(type))
  }
  if (valueType.description) {
    context.warning("Dictionary type has element with description: " + JSON.stringify(type))
  }

  const mainType = ts.factory.createTypeReferenceNode(recordType, [keyType.mainType, valueType.mainType])
  let altType: ts.TypeNode | undefined
  if (valueType.altWriteType) {
    altType = ts.factory.createTypeReferenceNode(recordType, [keyType.mainType, valueType.altWriteType])
  }

  return {
    mainType,
    altWriteType: altType,
    asString: undefined,
    description: keyType.description,
  }
}

function makeFlagsType(
  context: RuntimeGenerationContext,
  typeContext: TypeContext,
  keyType: runtime.Type,
  usage: RWUsage,
): IntermediateType {
  const isUnion = typeof keyType !== "string" && keyType.complex_type === "union"
  const options = isUnion ? keyType.options : [keyType]
  const members = options.map((o) => {
    if (typeof o !== "string" && o.complex_type === "literal" && typeof o.value === "string") {
      // readonly <value>?: true
      const property = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        escapePropertyName(o.value),
        Tokens.question,
        Types.booleanLiteral(true),
      )
      if (o.description) addJsDoc(context, property, { description: o.description }, undefined)
      return property
    } else {
      const rwType = mapTypeInternal(context, o, undefined, usage)
      const node = ts.factory.createMappedTypeNode(
        Modifiers.readonly,
        ts.factory.createTypeParameterDeclaration(undefined, "T", rwType.mainType),
        undefined,
        Tokens.question,
        Types.booleanLiteral(true),
        undefined,
      )
      if (rwType.description) addJsDoc(context, node, { description: rwType.description }, undefined)
      return node
    }
  })
  const normalKeyType = mapTypeInternal(context, keyType, typeContext, usage)
  if (normalKeyType.altWriteType) {
    context.warning("Flag type has key with altWriteType: " + JSON.stringify(keyType))
  }

  const description = normalKeyType.description

  const intersectionMembers: ts.TypeNode[] = []

  const propDeclarations = members.filter(ts.isPropertySignature)
  if (propDeclarations.length > 0) {
    intersectionMembers.push(ts.factory.createTypeLiteralNode(propDeclarations))
  }
  const indexDeclarations = members.filter(ts.isMappedTypeNode)
  if (indexDeclarations.length > 0) {
    if (indexDeclarations.length > 1)
      context.warning("flags type has multiple index signatures: " + JSON.stringify(keyType))
    intersectionMembers.push(...indexDeclarations)
  }
  const resultType =
    intersectionMembers.length === 1
      ? intersectionMembers[0]
      : ts.factory.createIntersectionTypeNode(intersectionMembers)
  return {
    mainType: resultType,
    asString: undefined,
    description,
  }
}

function mapLuaCustomTableType(
  context: GenerationContext,
  type: runtime.DictionaryType,
  usage: RWUsage,
): IntermediateType {
  assertIsRuntimeGenerationContext(context)
  const keyType = mapTypeInternal(context, type.key, undefined, usage)
  const valueType = mapTypeInternal(context, type.value, undefined, usage)
  if (keyType.description || valueType.description) {
    context.warning("LuaCustomTable type has element with description: " + JSON.stringify(type))
  }
  if (keyType.altWriteType || valueType.altWriteType) {
    context.warning("LuaCustomTable type has key or element with altWriteType: " + JSON.stringify(type))
  }
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType.mainType, valueType.mainType]),
    asString: undefined,
  }
}

function mapFunctionType(context: GenerationContext, type: runtime.FunctionType): IntermediateType {
  assertIsRuntimeGenerationContext(context)
  const parameters = type.parameters.map((value, index) => {
    const paramType = mapTypeInternal(context, value, undefined, RWUsage.Read)
    if (paramType.description) context.warning("Function type has parameter with description: " + JSON.stringify(type))
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      ts.factory.createIdentifier(`arg${index + 1}`),
      undefined,
      paramType.mainType,
    )
  })
  const funcType = ts.factory.createFunctionTypeNode(undefined, parameters, Types.void)
  return {
    mainType: funcType,
    asString: undefined,
  }
}

function mapLiteralType(_context: GenerationContext, type: runtime.LiteralType): IntermediateType {
  const value = type.value
  if (typeof value === "string") {
    return { mainType: Types.stringLiteral(value), asString: `\`"${value}"\``, description: type.description }
  } else if (typeof value === "number") {
    return { mainType: Types.numberLiteral(value), asString: `\`${value}\``, description: type.description }
  } else {
    return { mainType: Types.booleanLiteral(value), asString: `\`${value}\``, description: type.description }
  }
}

function mapLuaLazyLoadedValueType(
  context: GenerationContext,
  type: runtime.LuaLazyLoadedValueType,
  usage: RWUsage,
): IntermediateType {
  assertIsRuntimeGenerationContext(context)
  if (usage !== RWUsage.Read) {
    context.warning("LuaLazyLoadedValue can only be read")
  }
  const valueType = mapTypeInternal(context, type.value, undefined, usage)
  if (valueType.description)
    context.warning("LuaLazyLoadedValue type has element with description: " + JSON.stringify(type))
  return {
    mainType: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [valueType.mainType]),
    asString: undefined,
  }
}

function mapLuaStructType(
  context: GenerationContext,
  type: runtime.LuaStructType,
  typeContext: TypeContext | undefined,
): IntermediateType {
  assertIsRuntimeGenerationContext(context)
  assert(typeContext && typeContext.contextName)
  const attributes = type.attributes
    .sort(byOrder)
    .flatMap((a) => mapAttribute(context, a, typeContext.contextName!, typeContext.existingDef))

  const mainType = ts.factory.createTypeLiteralNode(attributes)
  return {
    mainType,
    asString: undefined,
  }
}

function mapTableType(
  context: GenerationContext,
  type: runtime.TableType,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  assertIsRuntimeGenerationContext(context)
  assert(typeContext && typeContext.contextName)
  if (type.variant_parameter_groups) {
    context.warning("variant_parameter_groups is not supported in mapType")
  }
  const existingDef = typeContext.existingDef
  const parameters = type.parameters
    .sort(byOrder)
    .map((p) => mapParameterToProperty(context, p, typeContext.contextName!, usage, existingDef))

  const parameterNames = new Set(type.parameters.map((p) => p.name))
  if (existingDef?.annotations.addProperties) {
    for (const [name, elements] of Object.entries(existingDef.members)) {
      if (parameterNames.has(name)) continue
      assert(elements?.length === 1)
      const first = elements[0]
      assert(ts.isPropertySignature(first))
      parameters.push({ mainProperty: first })
    }
  }

  const mainType = ts.factory.createTypeLiteralNode(parameters.map((p) => p.mainProperty))
  let altWriteType: ts.TypeNode | undefined
  if (parameters.some((p) => p.altWriteProperty))
    altWriteType = ts.factory.createTypeLiteralNode(parameters.map((p) => p.altWriteProperty ?? p.mainProperty))

  return {
    mainType,
    altWriteType,
    asString: undefined,
  }
}

function mapTupleType(
  context: GenerationContext,
  type: runtime.TupleType | prototype.TupleType,
  typeContext: TypeContext | undefined,
  usage: RWUsage,
): IntermediateType {
  const values = type.values.map((v) => {
    const type = mapTypeInternal(context, v, typeContext, usage)
    if (type.description) {
      context.warning("Unknown description for tuple member: " + type.description)
    }
    return type.mainType
  })

  const result = ts.factory.createTypeOperatorNode(
    ts.SyntaxKind.ReadonlyKeyword,
    ts.factory.createTupleTypeNode(values),
  )
  return {
    mainType: result,
    asString: undefined,
  }
}

function mapPrototypeStructType(context: GenerationContext, typeContext: TypeContext | undefined): IntermediateType {
  assert(typeContext)
  if (!typeContext.prototypeConceptProperties) {
    context.warning("Need properties for prototype concept")
  }
  const properties = typeContext.prototypeConceptProperties
  return {
    mainType: ts.factory.createTypeLiteralNode(properties),
    asString: undefined,
  }
}

export function mapBuiltinType(
  context: GenerationContext,
  _builtin: runtime.BuiltinType,
  typeContext: TypeContext | undefined,
): ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined {
  if (!typeContext) throw new Error("TypeContext is required for builtin type")
  const name = typeContext.contextName
  if (name === "boolean" || name === "string" || name === "number") return
  const existing = typeContext.existingDef
  if (!existing) {
    context.warning(`No existing definition for builtin ${name}`)
    return undefined
  }
  return existing.node
}

function tryUseIndexType(
  context: RuntimeGenerationContext,
  member: TypeMemberDescription,
  parent: string,
  type: runtime.Type,
): RWType | undefined {
  if (!(typeof type === "string" && type.startsWith("uint"))) return
  for (const indexType of IndexTypes) {
    const expectedType = indexType.expectedTypes ?? ["uint"]
    if (!expectedType.includes(type)) continue
    if (
      (indexType.mainAttributePath.parent === parent && member.name === indexType.mainAttributePath.name) ||
      parent === indexType.mainAttributePath.parent + "." + indexType.mainAttributePath.name ||
      (indexType.attributePattern && member.name?.match(indexType.attributePattern))
    ) {
      return mapBasicType(context, indexType.name, undefined, RWUsage.Read)
    }
  }
}

function tryUseStringUnion(member: TypeMemberDescription, type: runtime.Type): RWType | undefined {
  if (type !== "string") {
    return
  }
  const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
  if (
    (matches.size >= 2 && !member.description.match(/e\.g\. /i)) ||
    (matches.size === 1 &&
      (member.description.match(/One of `"[a-zA-Z-_]+?"`/) || member.description.match(/Can only be `"[a-zA-Z-_]+?"`/)))
  ) {
    return {
      mainType: ts.factory.createUnionTypeNode(Array.from(matches, Types.stringLiteral)),
    }
  }
}

function tryUseFlagValue(
  _context: RuntimeGenerationContext,
  member: TypeMemberDescription,
  type: runtime.Type,
): RWType | undefined {
  if (member.name !== "flag" || type !== "string") return undefined
  const match = member.description.match(/\[([A-Z][a-zA-Z]+Flags)]/)
  if (!match) return undefined
  const flagName = match[1]

  return {
    mainType: ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.KeyOfKeyword,
      ts.factory.createTypeReferenceNode(flagName),
    ),
  }
}

function tryUsePrototypeSubtype(
  context: RuntimeGenerationContext,
  member: TypeMemberDescription,
  type: runtime.Type,
  parent: string,
  hasExistingType: boolean = false,
): RWType | undefined {
  const subclassType = getSpecificPrototypeTypeForTypeAttribute(context, parent, member, hasExistingType, type)
  if (subclassType) {
    return { mainType: subclassType }
  }
}

function isNullableFromDescription(
  context: RuntimeGenerationContext,
  member: {
    description: string
    name?: string
  },
  parent: string,
): boolean {
  const nullableRegex =
    /(specify|passing|returns?|or|be|possibly|otherwise|else|writing|set(ting)?(( this)?|( the name)?)( to)?) [`']?nil[`']?|`?nil`? (if|when|otherwise|erases)/i
  const nullable = member.description.match(nullableRegex)
  if (nullable) {
    if (!member.description.match(/[`' ]nil/i)) {
      context.warning(
        `Inconsistency in nullability in description: ${parent}.${member.name}\n`,
        indent(member.description),
      )
    }
    const exceptionsRegex = /`name` will be `nil`/i
    return !exceptionsRegex.test(member.description)
  }
  if (member.description.match(/[`' ]nil/i)) {
    context.warning("May still be nullable: " + member.description)
  }
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
export function typeToDeclaration(
  context: GenerationContext,
  type: ts.TypeNode,
  name: string,
  heritageClauses?: ts.HeritageClause[],
): ts.InterfaceDeclaration | ts.TypeAliasDeclaration {
  if (ts.isTypeLiteralNode(type)) {
    return ts.factory.createInterfaceDeclaration([Modifiers.export], name, undefined, heritageClauses, type.members)
  } else {
    if (heritageClauses) {
      context.warning("Cannot have heritage clauses on non-interface")
    }
    return ts.factory.createTypeAliasDeclaration([Modifiers.export], name, undefined, type)
  }
}
