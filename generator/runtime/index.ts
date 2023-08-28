import { FactorioRuntimeApiJson } from "../FactorioRuntimeApiJson.js"
import ts from "typescript"

import { RuntimeGenerationContext } from "./context.js"
import {
  generateBuiltins,
  generateGlobalFunctions,
  generateGlobalObjects,
  preprocessBuiltins,
  preprocessGlobalFunctions,
  preprocessGlobalObjects,
} from "./others.js"
import { generateDefines, preprocessDefines } from "./defines.js"
import { generateEvents, preprocessEvents } from "./events.js"
import { generateClasses, preprocessClasses } from "./classes.js"
import { generateConcepts, preprocessConcepts } from "./concepts.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./index-types.js"
import { checkManualDefinitions, preprocessManualDefinitions } from "../manualDefinitions.js"
import { getGenerationResult } from "../generate.js"

export default function generate(
  apiJson: FactorioRuntimeApiJson,
  manualDefinitionsSource: ts.SourceFile,
  checker: ts.TypeChecker
): { files: Map<string, string>; hasWarnings: boolean } {
  const context = new RuntimeGenerationContext(apiJson, manualDefinitionsSource, checker)
  preprocessRuntime(context)
  generateRuntime(context)

  return getGenerationResult(context)
}

function preprocessRuntime(context: RuntimeGenerationContext) {
  preprocessBuiltins(context)
  preprocessGlobalObjects(context)
  preprocessGlobalFunctions(context)
  preprocessDefines(context)
  preprocessEvents(context)
  preprocessClasses(context)
  preprocessConcepts(context)
  preprocessIndexTypes(context)
  preprocessManualDefinitions(context)
}

function generateRuntime(context: RuntimeGenerationContext) {
  generateBuiltins(context)
  generateGlobalObjects(context)
  generateGlobalFunctions(context)
  generateDefines(context)
  generateEvents(context)
  generateClasses(context)
  generateConcepts(context)
  generateIndexTypesFile(context)
  checkManualDefinitions(context)
}
