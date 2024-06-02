import { analyzeMethod, mapFunction } from "./members.js"
import { byOrder } from "../util.js"
import { ModuleType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessGlobalFunctions(context: RuntimeGenerationContext): void {
  for (const globalFunction of context.apiDocs.global_functions) {
    context.references.set(globalFunction.name, globalFunction.name)
    analyzeMethod(context, globalFunction)
  }
}

export function generateGlobalFunctions(context: RuntimeGenerationContext): void {
  context.addFile("global-functions", ModuleType.Global, () => {
    for (const globalFunction of context.apiDocs.global_functions.sort(byOrder)) {
      const definition = mapFunction(context, globalFunction)
      context.currentFile.add(definition)
    }
  })
}
