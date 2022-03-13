import ts from "typescript"
import { addFakeJSDoc } from "./genUtil"
import DefinitionsGenerator from "./DefinitionsGenerator"

// preprocessed TS AST easier to use

export interface BaseDef {
  readonly kind: string
  readonly node: ts.Node
  readonly name: string
}

export enum AnnotationKind {
  AddTo = "addTo",
  AddBefore = "addBefore",
  AddAfter = "addAfter",
  Omit = "omit",

  NumericEnum = "numericEnum",

  Subclasses = "subclasses",
  DiscriminatedUnion = "discriminatedUnion",
  VariantsName = "variantsName",

  TableOrArray = "tableOrArray",

  ReadType = "readType",

  Deprecated = "deprecated",
}

const annotationValues = new Set<string>(Object.values(AnnotationKind))

export type AnnotationMap = Partial<Record<AnnotationKind, string[]>>

export interface InterfaceDef extends BaseDef {
  readonly kind: "interface"
  readonly node: ts.InterfaceDeclaration
  readonly supertypes: readonly ts.ExpressionWithTypeArguments[]
  readonly members: Record<string, ts.TypeElement[] | undefined>
  readonly annotations: AnnotationMap
}

export interface TypeAliasDef extends BaseDef {
  readonly kind: "type"
  readonly node: ts.TypeAliasDeclaration
  readonly supertypes: readonly (ts.TypeReferenceNode | ts.ExpressionWithTypeArguments)[]
  readonly indexOperator: ts.MappedTypeNode | ts.TypeLiteralNode | undefined
  readonly members: Record<string, ts.TypeElement[] | undefined>
  readonly annotations: AnnotationMap
}

export interface NamespaceDef extends BaseDef {
  readonly kind: "namespace"
  readonly node: ts.NamespaceDeclaration
  readonly members: Record<string, NamespaceDef | ConstDef | EnumDef>
  readonly annotations: AnnotationMap
}

export interface ConstDef extends BaseDef {
  readonly kind: "const"
  readonly node: ts.VariableStatement
  readonly type: ts.TypeNode
}

export interface EnumDef extends BaseDef {
  readonly kind: "enum"
  readonly node: ts.EnumDeclaration
  readonly annotations: AnnotationMap
}

export type RootDef = InterfaceDef | TypeAliasDef | NamespaceDef
export type NamespaceDefMember = NamespaceDef | ConstDef | EnumDef
export type AnyDef = InterfaceDef | TypeAliasDef | NamespaceDef | ConstDef | EnumDef

export function processManualDefinitions(file: ts.SourceFile): Record<string, RootDef | undefined> {
  const result: Record<string, RootDef | undefined> = {}
  for (const statement of file.statements) {
    const def = createDef(statement)
    if (def) {
      if (def.kind === "namespace" || def.kind === "interface" || def.kind === "type") {
        if (result[def.name]) {
          console.log("Warning: duplicate definition for " + def.name)
        }
        result[def.name] = def
      }
    }
  }
  return result
}

function createDef(node: ts.Statement): AnyDef {
  if (ts.isInterfaceDeclaration(node)) {
    return {
      kind: "interface",
      node,
      name: node.name.text,
      supertypes: node.heritageClauses?.find((value) => value.token === ts.SyntaxKind.ExtendsKeyword)?.types ?? [],
      members: getMembers(node.members),
      annotations: getAnnotations(node),
    }
  } else if (ts.isTypeAliasDeclaration(node)) {
    const types: ReadonlyArray<ts.TypeNode> = ts.isIntersectionTypeNode(node.type) ? node.type.types : [node.type]
    const mappedTypeIndexOperator = types.find((t) => ts.isMappedTypeNode(t)) as ts.MappedTypeNode | undefined
    const literalIndexOperator = types.find((t) => {
      return ts.isTypeLiteralNode(t) && t.members.length === 1 && ts.isIndexSignatureDeclaration(t.members[0])
    }) as ts.TypeLiteralNode
    const membersNode = types.find((t) => ts.isTypeLiteralNode(t) && t !== literalIndexOperator) as
      | ts.TypeLiteralNode
      | undefined
    const inherits: ts.TypeReferenceNode[] = types.filter(ts.isTypeReferenceNode)
    return {
      kind: "type",
      node,
      name: node.name.text,
      supertypes: inherits,
      members: membersNode ? getMembers(membersNode.members) : {},
      indexOperator: mappedTypeIndexOperator ?? literalIndexOperator,
      annotations: getAnnotations(node),
    }
  } else if (ts.isModuleDeclaration(node) && node.flags & ts.NodeFlags.Namespace) {
    return {
      kind: "namespace",
      node: node as ts.NamespaceDeclaration,
      name: node.name.text,
      members: getNamespaceMembers(node as ts.NamespaceDeclaration),
      annotations: getAnnotations(node),
    }
  } else if (ts.isVariableStatement(node)) {
    const type = node.declarationList.declarations[0].type
    if (!type) throw new Error("Const declaration without type")
    return {
      kind: "const",
      node,
      name: (node.declarationList.declarations[0].name as ts.Identifier).text,
      type,
    }
  } else if (ts.isEnumDeclaration(node)) {
    return {
      kind: "enum",
      node,
      name: node.name.text,
      annotations: getAnnotations(node),
    }
  } else {
    throw new Error("Unknown node given to manual defines, type " + ts.SyntaxKind[node.kind])
  }

  function getMembers(members: ts.NodeArray<ts.TypeElement>) {
    const result: Record<string, ts.TypeElement[]> = {}
    for (const member of members) {
      let name: string
      if (ts.isIndexSignatureDeclaration(member)) {
        name = "[]"
      } else if (ts.isCallSignatureDeclaration(member)) {
        name = "()"
      } else {
        const propertyName = member.name
        if (!propertyName || ts.isComputedPropertyName(propertyName))
          throw new Error(
            `Element without property name in manual define for ${(node as ts.DeclarationStatement).name?.text}, type ${
              ts.SyntaxKind[node.kind]
            }`
          )
        name =
          ts.isStringLiteral(propertyName) || ts.isNumericLiteral(propertyName)
            ? propertyName.text
            : ts.idText(propertyName)
      }
      result[name] = result[name] || []
      result[name].push(member)
    }
    return result
  }

  function getNamespaceMembers(namespace: ts.NamespaceDeclaration): Record<string, NamespaceDefMember> {
    const result: Record<string, NamespaceDefMember> = {}
    if (!ts.isModuleBlock(namespace.body)) return getNamespaceMembers(namespace.body)
    for (const statement of (namespace.body as ts.ModuleBlock).statements) {
      const def = createDef(statement)
      if (!def) continue
      if (def.kind === "namespace" || def.kind === "const" || def.kind === "enum") {
        result[def.name] = def
      } else if (def.kind !== "type") {
        throw new Error("Namespace member must be another namespace, const, or enum")
      }
    }
    return result
  }
}

export function getAnnotations(node: ts.JSDocContainer): AnnotationMap {
  const result: AnnotationMap = {}
  node.jsDoc?.forEach((value) =>
    value.tags?.forEach((tag) => {
      const annotationName = tag.tagName.text
      if (!annotationValues.has(annotationName)) {
        throw new Error(`Unknown annotation ${annotationName}`)
      }
      result[annotationName as AnnotationKind] = !tag.comment
        ? []
        : typeof tag.comment === "string"
        ? tag.comment.split(" ")
        : tag.comment.map((part) => part.text)
    })
  )
  return result
}

export function preprocessManualDefinitions(generator: DefinitionsGenerator) {
  for (const def of Object.values(generator.manualDefinitions as Record<string, RootDef>)) {
    const addBefore = def.annotations.addBefore?.[0]
    const addAfter = def.annotations.addAfter?.[0]
    const addTo = def.annotations.addTo?.[0]
    const node = def.node
    if (addBefore) {
      if (addTo || addAfter) throw new Error(`Can only specify one of addBefore, addAfter, addTo for ${node.name.text}`)

      if (!generator.addBefore.has(addBefore)) {
        generator.addBefore.set(addBefore, [])
      }
      generator.addBefore.get(addBefore)!.push(node)
    }
    if (addAfter) {
      if (addTo || addBefore)
        throw new Error(`Can only specify one of addBefore, addAfter, addTo for ${node.name.text}`)

      if (!generator.addAfter.has(addAfter)) {
        generator.addAfter.set(addAfter, [])
      }
      generator.addAfter.get(addAfter)!.push(node)
    }
    if (addTo) {
      if (!generator.addTo.has(addTo)) {
        generator.addTo.set(addTo, [])
      }
      generator.addTo.get(addTo)!.push(node)
    }
    if (addBefore || addTo || addAfter) {
      ts.setEmitFlags(node, ts.EmitFlags.NoLeadingComments)
      const docs = node.jsDoc!
      if (docs.length > 1) {
        addFakeJSDoc(node, docs[docs.length - 1], generator.manualDefinitionsSource)
      }
    }
  }
}

export function checkManualDefinitions(generator: DefinitionsGenerator) {
  for (const [name, d] of Object.entries(generator.manualDefinitions)) {
    const def = d!
    const hasAdd = def.annotations.addBefore || def.annotations.addAfter || def.annotations.addTo
    const isExisting = name in generator.typeNames
    if (!!hasAdd === isExisting) {
      generator.warning(
        `Manually defined declaration ${isExisting ? "matches" : "does not match"} existing statement, but ${
          hasAdd ? "has" : "does not have"
        } add annotation:`,
        name
      )
    }
  }
  for (const name of generator.addBefore.keys()) {
    generator.warning("Could not find existing statement", name, "to add before")
  }

  for (const name of generator.addAfter.keys()) {
    generator.warning("Could not find existing statement", name, "to add after")
  }

  for (const name of generator.addTo.keys()) {
    generator.warning("Could not find existing file", name, "to add to")
  }
}
