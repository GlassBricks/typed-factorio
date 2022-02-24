import ts from "typescript"
import { RWType } from "./DefinitionsGenerator"

export const printer = ts.createPrinter({
  omitTrailingSemicolon: true,
  newLine: ts.NewLineKind.LineFeed,
})
export const emptySourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)

export function printNode(node: ts.Node) {
  return printer.printNode(ts.EmitHint.Unspecified, node, emptySourceFile)
}

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

export function makeNullable(type: RWType) {
  function makeTypeNullable(t: ts.TypeNode): ts.TypeNode {
    if (!ts.isUnionTypeNode(t)) {
      return ts.factory.createUnionTypeNode([t, Types.undefined])
    }
    if (t.types.some((t) => t.kind === ts.SyntaxKind.UndefinedKeyword)) {
      return t
    }
    return ts.factory.createUnionTypeNode([...t.types, Types.undefined])
  }
  if (type.read === type.write) {
    const read = makeTypeNullable(type.read!)
    return { read, write: read }
  }

  return {
    read: type.read && makeTypeNullable(type.read),
    write: type.write && makeTypeNullable(type.write),
  }
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
