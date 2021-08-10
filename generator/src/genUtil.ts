import ts from "typescript"

export const Modifiers = {
  declare: ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword),
  readonly: ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
}

export const Types = {
  void: ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
  undefined: ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
  unknown: ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
  object: ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword),
  number: ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  symbol: ts.factory.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword),

  stringLiteral(text: string): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(text))
  },
}

export const Tokens = {
  question: ts.factory.createToken(ts.SyntaxKind.QuestionToken),
  dotDotDot: ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

export function toPascalCase(str: string): string {
  return str.split(/[-_ ]/g).map(capitalize).join("")
}

export function mergeUnion(a: ts.TypeNode, b: ts.TypeNode): ts.UnionTypeNode {
  function getTypes(t: ts.TypeNode): readonly ts.TypeNode[] {
    if (ts.isUnionTypeNode(t)) return t.types
    return [t]
  }

  return ts.factory.createUnionTypeNode([...getTypes(a), ...getTypes(b)])
}

export function createNamespace(
  modifiers: ts.Modifier[] | undefined,
  name: string,
  statements: ts.Statement[]
): ts.ModuleDeclaration {
  return ts.factory.createModuleDeclaration(
    undefined,
    modifiers,
    ts.factory.createIdentifier(name),
    ts.factory.createModuleBlock(statements),
    ts.NodeFlags.Namespace
  )
}

export function createConst(name: string, type: ts.TypeNode): ts.VariableStatement {
  return ts.factory.createVariableStatement(
    undefined,
    ts.factory.createVariableDeclarationList(
      [ts.factory.createVariableDeclaration(name, undefined, type)],
      ts.NodeFlags.Const
    )
  )
}
