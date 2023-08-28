import { FactorioPrototypeApiJson } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { checkApiJson, GenerationContext } from "../GenerationContext.js"

export class PrototypeGenerationContext extends GenerationContext {
  manualDefinitionsSource = undefined
  constructor(readonly apiDocs: FactorioPrototypeApiJson, checker: ts.TypeChecker) {
    super(checker)
    checkApiJson(apiDocs, {
      application: "factorio",
      api_version: 4,
      stage: "prototype",
    })
  }
}
