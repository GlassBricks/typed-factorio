import { FactorioModule } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"
import { analyzeMethod, mapFunction } from "./members.js"

export function preprocessGlobalFunctions(context: RuntimeGenerationContext): void {
  for (const globalFunction of context.globalFunctions.values()) {
    context.tsToFactorioType.set(globalFunction.name, globalFunction.name)
    analyzeMethod(context, globalFunction)
  }
}

export function generateGlobalFunctions(context: RuntimeGenerationContext): void {
  context.addFile("global-functions", FactorioModule.Global, () => {
    for (const globalFunction of context.globalFunctions.values()) {
      const definition = mapFunction(context, globalFunction)
      context.currentFile.add(definition)
    }
  })
}
