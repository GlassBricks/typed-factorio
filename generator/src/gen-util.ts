import * as ts from "typescript"
import { SyntaxKind } from "typescript"

export const Modifiers = {
  declare: ts.factory.createModifier(SyntaxKind.DeclareKeyword),
  readonly: ts.factory.createModifier(SyntaxKind.ReadonlyKeyword),
}

export const Types = {
  void: ts.factory.createKeywordTypeNode(SyntaxKind.VoidKeyword),
  unknown: ts.factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword),
  object: ts.factory.createKeywordTypeNode(SyntaxKind.ObjectKeyword),
  string: ts.factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
  number: ts.factory.createKeywordTypeNode(SyntaxKind.NumberKeyword),
  boolean: ts.factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword),

  numberLiteral(n: number | string): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(n))
  },
  stringLiteral(text: string): ts.LiteralTypeNode {
    return ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(text))
  },
}

export const Tokens = {
  question: ts.factory.createToken(SyntaxKind.QuestionToken),
  dotDotDot: ts.factory.createToken(SyntaxKind.DotDotDotToken),
  readonly: ts.factory.createToken(SyntaxKind.ReadonlyKeyword),
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

export function toPascalCase(str: string): string {
  return str.split(/[-_ ]/g).map(capitalize).join("")
}

export function createRecordType(
  readonly: boolean,
  optional: boolean,
  key: ts.TypeNode,
  value: ts.TypeNode
): ts.MappedTypeNode {
  return ts.factory.createMappedTypeNode(
    readonly ? Tokens.readonly : undefined,
    ts.factory.createTypeParameterDeclaration("K", key),
    undefined,
    optional ? Tokens.question : undefined,
    value
  )
}
