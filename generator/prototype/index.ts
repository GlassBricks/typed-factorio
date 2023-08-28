import ts from "typescript"

import { PrototypeGenerationContext } from "./context.js"
import { getGenerationResult } from "../generate.js"
import { FactorioPrototypeApiJson } from "../FactorioPrototypeApiJson.js"

export default function generate(
  apiJson: FactorioPrototypeApiJson,
  checker: ts.TypeChecker
): { files: Map<string, string>; hasWarnings: boolean } {
  const context = new PrototypeGenerationContext(apiJson, checker)

  // todo

  return getGenerationResult(context)
}
