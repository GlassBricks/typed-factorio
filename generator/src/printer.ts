import ts from "typescript"

export const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
})
export const emptySourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)
