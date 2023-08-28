import ts from "typescript"

export const printer = ts.createPrinter({
  omitTrailingSemicolon: true,
  newLine: ts.NewLineKind.LineFeed,
})

const emptySourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)
export function printNode(node: ts.Node): string {
  return printer.printNode(ts.EmitHint.Unspecified, node, emptySourceFile)
}

export const Modifiers = {
  declare: ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword),
  readonly: ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
  export: ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
}

export const Types = {
  void: ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
  undefined: ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
  nil: ts.factory.createTypeReferenceNode("nil"),
  unknown: ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
  object: ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword),
  number: ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  symbol: ts.factory.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword),

  stringLiteral(text: string): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(
      ts.setEmitFlags(ts.factory.createStringLiteral(text), ts.EmitFlags.NoAsciiEscaping)
    )
  },
  numberLiteral(value: number): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(value))
  },
  booleanLiteral(value: boolean): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(value ? ts.factory.createTrue() : ts.factory.createFalse())
  },
}

export const Tokens = {
  question: ts.factory.createToken(ts.SyntaxKind.QuestionToken),
  dotDotDot: ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}
export function decapitalize(str: string): string {
  return str[0].toLowerCase() + str.slice(1)
}

const toPascalDictionary: Record<string, string> = {
  progressbar: "ProgressBar",
  radiobutton: "RadioButton",
  textfield: "TextField",
}

export function toPascalCase(str: string): string {
  return toPascalDictionary[str] ?? str.split(/[-_ ]/g).map(capitalize).join("")
}

export function createNamespace(
  modifiers: ts.Modifier[] | undefined,
  name: string,
  statements: ts.Statement[]
): ts.ModuleDeclaration {
  return ts.factory.createModuleDeclaration(
    modifiers,
    ts.factory.createIdentifier(name),
    ts.factory.createModuleBlock(statements),
    ts.NodeFlags.Namespace
  )
}

const noResolutionAnnotation = ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("noResolution"))
function addNoResolutionAnnotation(node: ts.Node) {
  const jsDoc = ts.factory.createJSDocComment(undefined, [noResolutionAnnotation])
  addFakeJSDoc(node, jsDoc)
}
export function createDeclareModule(name: string, statements: ts.Statement[]): ts.ModuleDeclaration {
  const module = ts.factory.createModuleDeclaration(
    [Modifiers.declare],
    ts.factory.createStringLiteral(name),
    ts.factory.createModuleBlock(statements),
    undefined
    // ts.NodeFlags.GlobalAugmentation
  )
  addNoResolutionAnnotation(module)
  return module
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

export function createExtendsClause(...superTypes: string[]): [ts.HeritageClause] {
  return [
    ts.factory.createHeritageClause(
      ts.SyntaxKind.ExtendsKeyword,
      superTypes.map((name) =>
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(name), undefined)
      )
    ),
  ]
}

export function indent(str: string): string {
  return "    " + str.split("\n").join("\n    ")
}

export function removeLuaPrefix(str: string): string {
  if (str.startsWith("Lua")) str = str.substring(3)

  return str
}

export function addFakeJSDoc(node: ts.Node, jsDoc: ts.JSDoc, sourceFile?: ts.SourceFile): ts.Node {
  const text: string = sourceFile ? jsDoc.getText(sourceFile) + "\n" : printNode(jsDoc)
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
export function escapePropertyName(name: string): ts.PropertyName {
  if (name.includes("-")) {
    return ts.factory.createStringLiteral(name)
  }
  return ts.factory.createIdentifier(name)
}
