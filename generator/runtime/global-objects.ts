import { FactorioModule } from "../OutputFile.js"
import { addJsDoc } from "../documentation.js"
import { createComment, createConst } from "../genUtil.js"
import { RWUsage, mapRuntimeType } from "../types.js"
import { recordUsage } from "./concept-usage-analysis"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessGlobalObjects(context: RuntimeGenerationContext): void {
  for (const globalObject of context.globalObjects.values()) {
    context.tsToFactorioType.set(globalObject.name, globalObject.name)
    recordUsage(context, globalObject.type, RWUsage.Read)
  }
}
export function generateGlobalObjects(context: RuntimeGenerationContext): void {
  context.addFile("global-objects", FactorioModule.Global, () => {
    for (const globalObject of context.globalObjects.values()) {
      if (globalObject.name === "settings" || globalObject.name === "helpers") {
        handleOtherGlobals(context)
        continue
      }
      const definition = createConst(
        globalObject.name,
        mapRuntimeType(context, globalObject.type, globalObject.name, RWUsage.Read).mainType,
      )
      addJsDoc(context, definition, globalObject, globalObject.name, undefined)
      context.currentFile.add(definition)
    }
  })
}

function handleOtherGlobals(context: RuntimeGenerationContext) {
  context.currentFile.add(
    createComment(
      'The "settings" and "helpers" globals are declared in common/settings-global.d.ts and common/helpers.d.ts.',
    ),
  )
}
