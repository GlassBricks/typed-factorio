import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile.js"
import { addJsDoc } from "../documentation.js"
import { Attribute, CallOperator, Class, IndexOperator, LengthOperator, Method } from "../FactorioRuntimeApiJson.js"
import { GenerationContext } from "../GenerationContext.js"
import { addFakeJSDoc, Modifiers, removeLuaPrefix, toPascalCase, Types } from "../genUtil.js"
import { getAnnotations, InterfaceDef, TypeAliasDef } from "../manualDefinitions.js"
import { analyzeMethod, mapAttribute, mapMethod } from "../members.js"
import { mapType } from "../types.js"
import { assertNever, sortByOrder } from "../util.js"
import { analyzeType, RWUsage } from "../read-write-types.js"
import { tryGetStringEnumType } from "../variantParameterGroups.js"

export function preprocessClasses(context: GenerationContext): void {
  for (const clazz of context.apiDocs.classes) {
    context.typeNames[clazz.name] = clazz.name
    for (const method of clazz.methods) {
      analyzeMethod(context, method)
    }
    for (const attribute of clazz.attributes) {
      analyzeAttribute(context, attribute)
    }
    for (const operator of clazz.operators) {
      if (operator.name === "call") {
        analyzeMethod(context, operator)
      } else {
        analyzeAttribute(context, operator)
      }
    }
  }
}

function analyzeAttribute(context: GenerationContext, attribute: Attribute) {
  // context.mapTypeSimple(attribute.type, attribute.read, attribute.write)
  const rwType = attribute.read && attribute.write ? RWUsage.ReadWrite : attribute.read ? RWUsage.Read : RWUsage.Write
  analyzeType(context, attribute.type, rwType)
}

export function generateClasses(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "classes")

  for (const clazz of context.apiDocs.classes.sort(sortByOrder)) {
    const existing = context.getInterfaceDef(clazz.name)
    generateClass(context, clazz, existing, statements)
  }

  return statements.getResult()
}

interface MemberAndOriginal {
  original: Method | Attribute
  member: ts.TypeElement | ts.TypeElement[]
}

function generateClass(
  context: GenerationContext,
  clazz: Class,
  existing: InterfaceDef | TypeAliasDef | undefined,
  statements: StatementsList
) {
  const superTypes = getSupertypes()
  const arrayType = getArrayType()

  const members: MemberAndOriginal[] = []
  fillMethodsAndOperators()
  const indexType = fillIndexType()
  fillAttributes()
  checkManuallyDefined()
  shiftLuaObjectMembers()
  let discriminantProperty: string | undefined, membersBySubclass: Map<string, MemberAndOriginal[]>
  processSubclasses()
  generateDeclarations()

  function getSupertypes() {
    const supertypes: ts.ExpressionWithTypeArguments[] = []
    if (clazz.base_classes) {
      supertypes.push(
        ...clazz.base_classes.map((b) =>
          ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(b), undefined)
        )
      )
    }
    if (existing) {
      if (existing.kind === "interface") {
        supertypes.push(...existing.supertypes)
      } else if (existing.kind === "type") {
        supertypes.push(
          ...existing.supertypes.map((t) =>
            ts.isTypeReferenceNode(t)
              ? ts.factory.createExpressionWithTypeArguments(t.typeName as ts.Identifier, t.typeArguments)
              : t
          )
        )
      } else {
        assertNever(existing)
      }
    }
    return supertypes
  }

  function getArrayType() {
    if (existing?.kind !== "interface") return
    const arrayExtend = existing.supertypes.find(
      (t) => ts.isIdentifier(t.expression) && (t.expression.text === "Array" || t.expression.text === "ReadonlyArray")
    )
    if (!arrayExtend) return
    const type = arrayExtend.typeArguments?.[0]
    const readonly = (arrayExtend.expression as ts.Identifier).text === "ReadonlyArray"
    if (!type) throw new Error(`Manual define ${clazz.name} extends an array type without type arguments`)
    return { type, readonly }
  }

  function fillIndexType() {
    const indexOperator = clazz.operators.find((x) => x.name === "index") as IndexOperator | undefined
    if (!indexOperator) return
    if (arrayType) {
      const indexSignature = addJsDoc(
        context,
        ts.factory.createIndexSignature(
          arrayType.readonly ? [Modifiers.readonly] : undefined,
          [ts.factory.createParameterDeclaration(undefined, undefined, "index", undefined, Types.number, undefined)],
          arrayType.type
        ),
        indexOperator,
        clazz.name + ".operator%20[]",
        undefined
      )
      members.push({ original: indexOperator, member: indexSignature })
      return
    }
    if (!(existing?.kind === "type" && existing.indexOperator)) {
      context.warning("No index operator manual definition for class", clazz.name)
      return
    }

    const existingIndexOp = existing.indexOperator
    const shortName = removeLuaPrefix(clazz.name)
    if (ts.isMappedTypeNode(existingIndexOp)) {
      return ts.factory.createTypeAliasDeclaration(
        undefined,
        shortName + "Indexer",
        existing.node.typeParameters,
        addJsDoc(context, existingIndexOp, indexOperator, clazz.name + ".operator%20[]", undefined)
      )
    }
    if (ts.isTypeLiteralNode(existingIndexOp)) {
      const indexSignature = addJsDoc(
        context,
        existingIndexOp.members[0] as ts.IndexSignatureDeclaration,
        indexOperator,
        clazz.name + ".operator%20[]",
        undefined
      )
      return ts.factory.createInterfaceDeclaration(undefined, shortName + "Indexer", undefined, undefined, [
        indexSignature,
      ])
    }
    assertNever(existingIndexOp)
  }

  function fillMethodsAndOperators() {
    members.push(
      ...clazz.methods.sort(sortByOrder).map((method) => ({
        original: method,
        member: mapMethod(context, method, clazz.name, existing, statements),
      }))
    )

    const callOperator = clazz.operators.find((x) => x.name === "call") as CallOperator | undefined
    if (callOperator) {
      // manual define for operator not supported yet
      const asMethod = mapMethod(
        context,
        {
          ...callOperator,
          name: "operator%20()",
        },
        clazz.name,
        existing,
        statements
      ) as ts.MethodSignature
      const callSignature = ts.factory.createCallSignature(undefined, asMethod.parameters, asMethod.type)
      ts.setSyntheticLeadingComments(callSignature, ts.getSyntheticLeadingComments(asMethod))
      members.push({ original: callOperator, member: callSignature })
    }

    const lengthOperator = clazz.operators.find((x) => x.name === "length") as LengthOperator | undefined
    if (lengthOperator) {
      // length operator is (supposed to be) numeric, so not map with transforms
      const type = mapType(context, lengthOperator.type, clazz.name + ".length", RWUsage.Read).mainType
      const lengthProperty = addJsDoc(
        context,
        ts.factory.createPropertySignature(
          [Modifiers.readonly],
          "length",
          undefined,
          arrayType ? type : ts.factory.createTypeReferenceNode("LuaLengthMethod", [type])
        ),
        lengthOperator,
        clazz.name + ".operator%20#",
        undefined
      )
      members.push({ original: lengthOperator, member: lengthProperty })
    }
  }

  function fillAttributes() {
    members.push(
      ...clazz.attributes.sort(sortByOrder).map((attr) => ({
        original: attr,
        member: mapAttribute(context, attr, clazz.name, existing),
      }))
    )
  }
  function checkManuallyDefined() {
    if (!existing) return
    const allAttributes = new Set(clazz.attributes.map((x) => x.name).concat(clazz.methods.map((x) => x.name)))
    for (const name of Object.keys(existing.members)) {
      if (!allAttributes.has(name)) {
        context.warning(`Attribute ${name} is not defined in class ${clazz.name}`, clazz.name)
      }
    }
  }

  function shiftLuaObjectMembers() {
    const standardMembers: {
      valid?: { original: Attribute; member: ts.PropertySignature }
      object_name?: { original: Attribute; member: ts.PropertySignature }
      help?: { original: Method; member: ts.MethodSignature }
    } = {}
    for (let i = 0; i < members.length; i++) {
      const group = members[i]
      const member = group.member
      if (Array.isArray(member)) continue
      if (!member.name || !ts.isIdentifier(member.name)) continue
      const name = member.name.text
      if (name === "valid" || name === "object_name" || name === "help") {
        standardMembers[name] = group as never
        members.splice(i, 1)
        i--
      }
    }

    function setNoRefJsDoc(property: { original: Attribute | Method; member: ts.TypeElement }) {
      ts.setSyntheticLeadingComments(property.member, undefined)
      addJsDoc(context, property.member, property.original, undefined, undefined)
    }

    if (standardMembers.valid) {
      const property = standardMembers.valid
      setNoRefJsDoc(property)
      members.push(standardMembers.valid)
    }

    if (standardMembers.object_name) {
      const attribute = standardMembers.object_name
      const member = attribute.member
      setNoRefJsDoc(attribute)
      if (!clazz.description.match(/abstract/i)) {
        attribute.member = ts.factory.updatePropertySignature(
          member,
          member.modifiers,
          member.name,
          member.questionToken,
          Types.stringLiteral(clazz.name)
        )
      }
      members.push(standardMembers.object_name)
    }

    if (standardMembers.help) {
      const property = standardMembers.help
      setNoRefJsDoc(property)
      members.push(standardMembers.help)
    }
  }

  function processSubclasses() {
    type MapName = string & { _mapNameBrand: never }
    type UseName = string & { _useNameBrand: never }

    let getMapName: (name: string) => MapName
    function normalizeName(origName: string) {
      return origName.replace(/[-_ ]/g, "").toLowerCase() as MapName
    }
    const mapMembersBySubclass = new Map<MapName, MemberAndOriginal[]>()
    const useNames = new Map<MapName, UseName>()

    discriminantProperty = existing?.annotations.discriminatedUnion?.[0]
    if (discriminantProperty) {
      const property = members.find((m) => m.original.name === discriminantProperty)
      if (property === undefined) {
        throw new Error(`Discriminant property ${discriminantProperty} was not found on ${clazz.name}`)
      }
      const memberNode = property.member
      if (Array.isArray(memberNode) || !ts.isPropertySignature(memberNode)) {
        throw new Error(`Discriminant property ${clazz.name}.${discriminantProperty} should be a property signature`)
      }
      const types = tryGetStringEnumType(context, (property.original as Attribute).type, memberNode.type!)
      if (!types) {
        throw new Error(`Discriminant property ${clazz.name}.${discriminantProperty} is not a string literal union`)
      }

      getMapName = normalizeName
      for (const type of types) {
        const mapName = getMapName(type)
        useNames.set(mapName, toPascalCase(type) as UseName)
        mapMembersBySubclass.set(mapName, [
          {
            member: ts.factory.updatePropertySignature(
              memberNode,
              memberNode.modifiers,
              memberNode.name,
              memberNode.questionToken,
              Types.stringLiteral(type)
            ),
            original: property.original,
          },
        ])
      }
    } else {
      const words = clazz.name.match(/($[a-z])|[A-Z][a-z]+/g)!.reverse()

      function trimName(name: string) {
        name = removeLuaPrefix(name)
        for (const word of words) {
          if (name.endsWith(word)) name = name.substring(0, name.length - word.length)
        }
        return name
      }
      getMapName = (name: string) => normalizeName(trimName(name))

      for (const memberAndOriginal of members) {
        const subclasses = getSubclasses(memberAndOriginal.original)
        if (!subclasses) continue
        for (const subclass of subclasses) {
          const baseName = trimName(subclass)
          const mapName = normalizeName(baseName)
          const existingUseName = useNames.get(mapName)
          const useName = toPascalCase(baseName) as UseName
          if (existingUseName !== undefined) {
            if (useName !== existingUseName) {
              throw new Error(`Multiple derived names for ${subclass} (${mapName}): ${existingUseName}, ${useName}`)
            }
          } else {
            useNames.set(mapName, useName)
            mapMembersBySubclass.set(mapName, [])
          }
        }
      }
      if (mapMembersBySubclass.size <= 1) return {}
    }

    mapMembersBySubclass.set("" as MapName, [])
    useNames.set("" as MapName, "" as UseName)

    // const ignoreSubclasses = new Set(existing.annotations.ignoreSubclasses)

    for (const memberAndOriginal of members) {
      const { original } = memberAndOriginal
      const subclasses = getSubclasses(original)
      if (!subclasses) {
        mapMembersBySubclass.get("" as MapName)!.push(memberAndOriginal)
        continue
      }
      for (const subclass of subclasses) {
        const mapName = getMapName(subclass)
        const subclassMembers = mapMembersBySubclass.get(mapName)
        if (subclassMembers === undefined) {
          // if (ignoreSubclasses.has(mapName)) continue
          throw new Error(
            `Subclass restriction ${subclass} (${mapName}) for ${clazz.name}.${
              original.name
            } does not fit subclass types: ${Array.from(mapMembersBySubclass.keys())}`
          )
        }
        subclassMembers.push(memberAndOriginal)
      }
    }

    membersBySubclass = new Map(
      Array.from(mapMembersBySubclass.entries()).map(([mapName, v]) => [useNames.get(mapName)!, v])
    )

    function getSubclasses(member: Method | Attribute): string[] | undefined {
      const existingMember = existing?.members[member.name]?.[0]
      return (
        (existingMember && getAnnotations(existingMember as unknown as ts.JSDocContainer).subclasses) ??
        member.subclasses
      )
    }
  }

  function createDeclaration(
    name: string,
    thisSupertypes: ts.ExpressionWithTypeArguments[],
    thisMembers: MemberAndOriginal[],
    indexTypeName: string | undefined,
    classForDocs: Class | undefined
  ) {
    const baseSupertypes: ts.ExpressionWithTypeArguments[] = thisSupertypes.filter((x) => !x.typeArguments)
    const declarationSupertypes: ts.ExpressionWithTypeArguments[] = thisSupertypes.filter((x) => x.typeArguments)
    if (!indexTypeName) baseSupertypes.push(...declarationSupertypes)

    const baseDeclaration = ts.factory.createInterfaceDeclaration(
      undefined,
      indexTypeName ? name + "Members" : name,
      indexTypeName ? undefined : existing?.node.typeParameters,
      baseSupertypes.length !== 0
        ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, baseSupertypes)]
        : undefined,
      thisMembers.flatMap((m) => m.member)
    )
    statements.add(baseDeclaration)
    context.typeNames[name] = name

    if (!indexTypeName) {
      if (classForDocs) {
        addJsDoc(
          context,
          baseDeclaration,
          classForDocs,
          classForDocs.name,
          needsNoSelfAnnotation(baseDeclaration) ? [noSelfAnnotation] : []
        )
      } else {
        addNoSelfAnnotationOnly(baseDeclaration)
      }
    } else {
      addNoSelfAnnotationOnly(baseDeclaration)
      const typeArguments = existing?.node.typeParameters?.map((p) => ts.factory.createTypeReferenceNode(p.name))
      const declaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        name,
        existing?.node.typeParameters,
        ts.factory.createIntersectionTypeNode([
          ts.factory.createTypeReferenceNode(name + "Members"),
          ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(indexTypeName), typeArguments),
          ...declarationSupertypes,
        ])
      )
      if (classForDocs) {
        addJsDoc(context, declaration, classForDocs, classForDocs.name, undefined)
      }
      statements.add(declaration)
    }
  }

  function generateDeclarations() {
    if (indexType) {
      statements.add(indexType)
    }
    const shortName = removeLuaPrefix(clazz.name)
    const indexTypeName = indexType ? shortName + "Indexer" : undefined
    if (!membersBySubclass || !discriminantProperty) {
      // if no discriminant property, generate normal class as well as subclasses
      createDeclaration(clazz.name, superTypes, members, indexTypeName, clazz)
    }
    if (!membersBySubclass) return
    const baseName = "Base" + shortName
    createDeclaration(baseName, superTypes, membersBySubclass.get("")!, undefined, undefined)
    const groupSupertypes = [
      ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(baseName), undefined),
    ]
    for (const [groupName, subclassMembers] of membersBySubclass) {
      if (groupName === "") continue
      createDeclaration(toPascalCase(groupName) + shortName, groupSupertypes, subclassMembers, indexTypeName, undefined)
    }

    const allSubclassTypes = Array.from(membersBySubclass.keys())
      .filter((x) => x !== "")
      .map((subclass) => toPascalCase(subclass) + (indexTypeName ? shortName + "Members" : shortName))
    if (discriminantProperty) {
      // union
      const unionDeclaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        indexTypeName ? shortName + "Members" : clazz.name,
        undefined,
        ts.factory.createUnionTypeNode(allSubclassTypes.map((x) => ts.factory.createTypeReferenceNode(x)))
      )
      if (!indexTypeName) addJsDoc(context, unionDeclaration, clazz, clazz.name, undefined)
      statements.add(unionDeclaration)
    }

    // if (existing?.annotations.generateByTypeIndex) {
    //   const typeMembers = Array.from(subclassesInfo.originalSubclassNames.entries()).map(
    //     ([subclassName, origName]) =>
    //       ts.factory.createPropertySignature(
    //         undefined,
    //         GenerationContext.escapePropertyName(origName),
    //         undefined,
    //         ts.factory.createTypeReferenceNode(toPascalCase(subclassName) + shortName)
    //       )
    //   )
    //   const outName = shortName + "ByType"
    //   statements.add(
    //     ts.factory.createInterfaceDeclaration(undefined, undefined, outName, undefined, undefined, typeMembers)
    //   )
    //   context.typeNames[outName] = outName
    // }

    if (indexTypeName) {
      const declaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        clazz.name,
        existing?.node.typeParameters,
        ts.factory.createIntersectionTypeNode([
          ts.factory.createTypeReferenceNode(shortName + "Members"),
          ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(indexTypeName)),
        ])
      )
      addJsDoc(context, declaration, clazz, clazz.name, undefined)
      statements.add(declaration)
    }
  }
}

const noSelfAnnotation = ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("noSelf"))
function needsNoSelfAnnotation(node: ts.Node) {
  return ts.isInterfaceDeclaration(node) && node.members.some((m) => ts.isMethodSignature(m))
}

function addNoSelfAnnotationOnly(node: ts.InterfaceDeclaration) {
  if (!needsNoSelfAnnotation(node)) return
  const jsDoc = ts.factory.createJSDocComment(undefined, [noSelfAnnotation])
  addFakeJSDoc(node, jsDoc)
}
