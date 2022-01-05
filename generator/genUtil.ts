import ts from "typescript"

export const printer = ts.createPrinter({
  omitTrailingSemicolon: true,
  newLine: ts.NewLineKind.LineFeed,
})
export const emptySourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)

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

const toPascalDictionary: Record<string, string> = {
  progressbar: "ProgressBar",
  radiobutton: "RadioButton",
  textfield: "TextField",
}

export function toPascalCase(str: string): string {
  return toPascalDictionary[str] ?? str.split(/[-_ ]/g).map(capitalize).join("")
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

export function createConst(name: string, type: ts.TypeNode, modifiers?: ts.Modifier[]): ts.VariableStatement {
  return ts.factory.createVariableStatement(
    modifiers,
    ts.factory.createVariableDeclarationList(
      [ts.factory.createVariableDeclaration(name, undefined, type)],
      ts.NodeFlags.Const
    )
  )
}

export function indent(str: string): string {
  return "    " + str.split("\n").join("\n    ")
}

export function removeLuaPrefix(str: string): string {
  if (str.startsWith("Lua")) str = str.substring(3)

  return str
}

export function addFakeJSDoc(node: ts.Node, jsDoc: ts.JSDoc, sourceFile?: ts.SourceFile) {
  const text: string = sourceFile
    ? jsDoc.getText(sourceFile)
    : printer.printNode(ts.EmitHint.Unspecified, jsDoc, emptySourceFile)
  node.emitNode = node.emitNode ?? {}
  ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    text.trim().replace(/^\/\*|\*\/$/g, ""),
    true
  )
  return node
}

export function createComment(text: string, multiline?: boolean): ts.EmptyStatement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createEmptyStatement(),
    multiline ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia,
    text,
    true
  )
}
