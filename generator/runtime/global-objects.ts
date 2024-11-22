import { RuntimeGenerationContext } from "./index.js"
import { FactorioModule } from "../OutputFile.js"
import { createComment, createConst } from "../genUtil.js"
import { mapRuntimeType, RWUsage } from "../types.js"
import { addJsDoc } from "../documentation.js"
import assert from "assert"
import { Parameter } from "../FactorioRuntimeApiJson"
import { recordUsage } from "./concept-usage-analysis"

export function preprocessGlobalObjects(context: RuntimeGenerationContext): void {
  for (const globalObject of context.globalObjects.values()) {
    context.tsToFactorioType.set(globalObject.name, globalObject.name)
    recordUsage(context, globalObject.type, RWUsage.Read)
  }
}
export function generateGlobalObjects(context: RuntimeGenerationContext): void {
  context.addFile("global-objects", FactorioModule.Global, () => {
    for (const globalObject of context.globalObjects.values()) {
      if (globalObject.name === "settings") {
        handleSettingsGlobal(context, globalObject)
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

function handleSettingsGlobal(context: RuntimeGenerationContext, globalObject: Parameter) {
  assert(globalObject.name === "settings")
  assert(globalObject.type === "LuaSettings")
  const statement = createComment(
    'The "settings" global is declared in common/settings-global.d.ts; its runtime type is handled below.',
  )
  context.currentFile.add(statement)
}
