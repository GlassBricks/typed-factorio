import ts from "typescript"

// preprocessed TS AST easier to use

export interface BaseDef {
  readonly kind: string
  readonly node: ts.Node
  readonly name: string
}

export interface InterfaceDef extends BaseDef {
  readonly kind: "interface"
  readonly node: ts.InterfaceDeclaration
  readonly supertypes: readonly ts.ExpressionWithTypeArguments[]
  readonly members: Record<string, ts.TypeElement[] | undefined>
  readonly annotations: Record<string, string[] | undefined>
}

export interface TypeAliasDef extends BaseDef {
  readonly kind: "type"
  readonly node: ts.TypeAliasDeclaration
  readonly supertypes: readonly ts.TypeNode[]
  readonly indexOperator: ts.MappedTypeNode | ts.TypeLiteralNode | undefined
  readonly members: Record<string, ts.TypeElement[] | undefined>
  readonly annotations: Record<string, string[] | undefined>
}

export interface NamespaceDef extends BaseDef {
  readonly kind: "namespace"
  readonly node: ts.NamespaceDeclaration
  readonly members: Record<string, NamespaceDef | ConstDef | EnumDef>
  readonly annotations: Record<string, string[]>
}

export interface ConstDef extends BaseDef {
  readonly kind: "const"
  readonly node: ts.VariableStatement
  readonly type: ts.TypeNode
}

export interface EnumDef extends BaseDef {
  readonly kind: "enum"
  readonly node: ts.EnumDeclaration
}

export type RootDef = InterfaceDef | TypeAliasDef | NamespaceDef
export type NamespaceDefMember = NamespaceDef | ConstDef | EnumDef
export type AnyDef = InterfaceDef | TypeAliasDef | NamespaceDef | ConstDef | EnumDef

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
    const inherits = types.filter((t) => ts.isTypeReferenceNode(t))
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
      } else {
        throw new Error("Namespace member must be another namespace, const, or enum")
      }
    }
    return result
  }
}

export function processManualDefinitions(file: ts.SourceFile | undefined): Record<string, RootDef | undefined> {
  const result: Record<string, RootDef | undefined> = {}
  if (!file) {
    return result
  }
  for (const statement of file.statements) {
    const def = createDef(statement)
    if (def) {
      if (def.kind === "namespace" || def.kind === "interface" || def.kind === "type") {
        result[def.name] = def
      }
    }
  }
  return result
}

export function getAnnotations(node: ts.JSDocContainer): Record<string, string[]> {
  const result: Record<string, string[]> = {}
  node.jsDoc?.forEach((value) =>
    value.tags?.forEach((tag) => {
      result[tag.tagName.text] = !tag.comment
        ? []
        : typeof tag.comment === "string"
        ? tag.comment.split(" ")
        : tag.comment.map((part) => part.text)
    })
  )
  return result
}
