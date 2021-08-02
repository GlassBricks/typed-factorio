import * as ts from "typescript"
import { NewLineKind, ScriptTarget } from "typescript"

export const printer = ts.createPrinter({
  omitTrailingSemicolon: true,
  newLine: NewLineKind.LineFeed,
})
export const emptySourceFile = ts.createSourceFile("", "", ScriptTarget.ESNext)
