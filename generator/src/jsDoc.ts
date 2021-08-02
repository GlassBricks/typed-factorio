import * as ts from "typescript"
import { SyntaxKind } from "typescript"
import { emptySourceFile, printer } from "./printer"

export function addJsDoc<T extends ts.Node>(
  node: T,
  element: BasicMember & WithNotes & { subclasses?: string[] },
  tags?: ts.JSDocTag[]
): T {
  const comment = [
    element.description,
    element.notes?.map((n) => "**Note**: " + n),
    element.subclasses &&
      `_Can only be used if this is ${
        element.subclasses.length === 1
          ? element.subclasses[0]
          : `${element.subclasses.slice(0, -1).join(", ")} or ${element.subclasses[element.subclasses.length - 1]}`
      }_`,
  ]
    .filter((x) => !!x)
    .join("\n\n")

  tags = tags || []
  if (element.examples) {
    tags.push(
      ...element.examples.map((e) =>
        ts.factory.createJSDocUnknownTag(
          ts.factory.createIdentifier("example"),
          "\n" + e.replace(/```\n(?=([\s\S]+?```))/g, "```lua\n")
        )
      )
    )
  }
  if (element.see_also) {
    tags.push(
      ...element.see_also?.map((l) =>
        ts.factory.createJSDocSeeTag(
          undefined,
          ts.factory.createJSDocNameReference(ts.factory.createIdentifier(l.replace(/::/g, ".")))
        )
      )
    )
  }
  if (!comment && tags.length === 0) return node

  const jsDoc = ts.factory.createJSDocComment(comment, tags)

  const text = printer
    .printNode(ts.EmitHint.Unspecified, jsDoc, emptySourceFile)
    .trim()
    .replace(/^\/\*|\*\/$/g, "")
  return ts.addSyntheticLeadingComment(node, SyntaxKind.MultiLineCommentTrivia, text, true)
}

export function createComment(text: string, multiline?: boolean): ts.EmptyStatement {
  const node = ts.factory.createEmptyStatement()
  ts.addSyntheticLeadingComment(
    node,
    multiline ? SyntaxKind.MultiLineCommentTrivia : SyntaxKind.SingleLineCommentTrivia,
    text,
    true
  )
  return node
}
