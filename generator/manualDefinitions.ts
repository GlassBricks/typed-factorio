import ts from "typescript"
import { addFakeJSDoc } from "./genUtil.js"
import { GenerationContext } from "./GenerationContext.js" // preprocessed TS AST easier to use

// preprocessed TS AST easier to use

export interface BaseDef {
  readonly kind: string
  readonly node: ts.Node
  readonly name: string
}

// noinspection JSUnusedGlobalSymbols
export enum AnnotationKind {
  AddTo = "addTo",
  AddBefore = "addBefore",
  AddAfter = "addAfter",
  Omit = "omit",

  NumericEnum = "numericEnum",

  Subclasses = "subclasses",
  DiscriminatedUnion = "discriminatedUnion",
  VariantsName = "variantsName",

  AddProperties = "addProperties",

  UnionAdd = "unionAdd",
  UnionReplace = "unionReplace",

  Replace = "replace",

  ReadType = "readType",
  WriteType = "writeType",

  Overload = "overload",
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

export class ManualDefinitions {
  constructor(readonly map: Map<string, RootDef>) {}

  private expectType<T extends string>(def: AnyDef, ...kinds: T[]): asserts def is Extract<AnyDef, { kind: T }> {
    if (!kinds.includes(def.kind as T)) {
      throw new Error(`Expected ${kinds.join(" or ")} for ${def.name} but found ${def.kind}`)
    }
  }

  getInterface(name: string): InterfaceDef | undefined {
    const def = this.map.get(name)
    if (def) {
      this.expectType(def, "interface")
      return def
    }
  }
  getTypeAlias(name: string): TypeAliasDef | undefined {
    const def = this.map.get(name)
    if (def) {
      this.expectType(def, "type")
      return def
    }
  }
  getDeclaration(name: string): InterfaceDef | TypeAliasDef | undefined {
    const def = this.map.get(name)
    if (def) {
      this.expectType(def, "interface", "type")
      return def
    }
  }
  getNamespace(name: string): NamespaceDef | undefined {
    const def = this.map.get(name)
    if (def) {
      this.expectType(def, "namespace")
      return def
    }
  }
  get<T extends string>(name: string, ...expectedTypes: T[]): Extract<AnyDef, { kind: T }> | undefined {
    const def = this.map.get(name)
    if (def) {
      this.expectType(def, ...expectedTypes)
      return def
    }
  }
}

export function processManualDefinitions(file: ts.SourceFile): ManualDefinitions {
  const result = new Map<string, RootDef>()
  for (const statement of file.statements) {
    const def = createDef(statement)
    if (def) {
      if (def.kind === "namespace" || def.kind === "interface" || def.kind === "type") {
        if (result.has(def.name)) {
          console.log("Warning: duplicate definition for " + def.name)
        }
        result.set(def.name, def)
      }
    }
  }
  return new ManualDefinitions(result)
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
    for (const statement of namespace.body.statements) {
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
  node.jsDoc?.[0]?.tags?.forEach((tag) => {
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
  return result
}

export function preprocessManualDefinitions(context: GenerationContext): void {
  for (const def of context.manualDefs.map.values()) {
    const addBefore = def.annotations.addBefore?.[0]
    const addAfter = def.annotations.addAfter?.[0]
    const addTo = def.annotations.addTo?.[0]
    const node = def.node
    if (addBefore) {
      if (addTo || addAfter) throw new Error(`Can only specify one of addBefore, addAfter, addTo for ${node.name.text}`)

      if (!context.addBefore.has(addBefore)) {
        context.addBefore.set(addBefore, [])
      }
      context.addBefore.get(addBefore)!.push(node)
    }
    if (addAfter) {
      if (addTo || addBefore)
        throw new Error(`Can only specify one of addBefore, addAfter, addTo for ${node.name.text}`)

      if (!context.addAfter.has(addAfter)) {
        context.addAfter.set(addAfter, [])
      }
      context.addAfter.get(addAfter)!.push(node)
    }
    if (addTo) {
      if (!context.addTo.has(addTo)) {
        context.addTo.set(addTo, [])
      }
      context.addTo.get(addTo)!.push(node)
    }
    if (addBefore || addTo || addAfter) {
      ts.setEmitFlags(node, ts.EmitFlags.NoLeadingComments)
      const docs = node.jsDoc!
      if (docs.length > 1) {
        addFakeJSDoc(node, docs[docs.length - 1], context.manualDefinitionsSource)
      }
    }
  }
}

export function checkManualDefinitions(context: GenerationContext): void {
  const typeNames = new Set(context.references.values())
  for (const [name, def] of context.manualDefs.map.entries()) {
    const hasAdd = def.annotations.addBefore || def.annotations.addAfter || def.annotations.addTo
    const isExisting = typeNames.has(name) || context.references.has(name)
    if (!!hasAdd === isExisting) {
      context.warning(
        `Manually defined declaration ${isExisting ? "matches" : "does not match"} existing statement, but ${
          hasAdd ? "has" : "does not have"
        } add annotation:`,
        name
      )
    }
  }
  for (const name of context.addBefore.keys()) {
    context.warning("Could not find existing statement", name, "to add before")
  }

  for (const name of context.addAfter.keys()) {
    context.warning("Could not find existing statement", name, "to add after")
  }

  for (const name of context.addTo.keys()) {
    context.warning("Could not find existing file", name, "to add to")
  }
}
