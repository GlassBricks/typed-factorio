import ts from "typescript"

export const printer = ts.createPrinter({
  omitTrailingSemicolon: true,
  newLine: ts.NewLineKind.LineFeed,
})
export const emptySourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ESNext)
