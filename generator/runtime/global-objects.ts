import { RuntimeGenerationContext } from "./index.js"
import { analyzeType, RWUsage } from "../read-write-types.js"
import { ModuleType } from "../OutputFile.js"
import { byOrder } from "../util.js"
import { createComment, createConst, createDeclareModule, Modifiers } from "../genUtil.js"
import { mapRuntimeType } from "../types.js"
import { addJsDoc } from "../documentation.js"
import { GlobalObject } from "../FactorioRuntimeApiJson.js"
import assert from "assert"
import ts from "typescript"

export function preprocessGlobalObjects(context: RuntimeGenerationContext): void {
  for (const globalObject of context.apiDocs.global_objects) {
    context.references.set(globalObject.name, globalObject.name)
    analyzeType(context, globalObject.type, RWUsage.Read)
  }
}
export function generateGlobalObjects(context: RuntimeGenerationContext): void {
  context.addFile("global-objects", ModuleType.Global, () => {
    for (const globalObject of context.apiDocs.global_objects.sort(byOrder)) {
      if (globalObject.name === "settings") {
        handleSettingsGlobal(context, globalObject)
        continue
      }
      const definition = createConst(
        globalObject.name,
        mapRuntimeType(context, globalObject.type, globalObject.name, RWUsage.Read).mainType
      )
      addJsDoc(context, definition, globalObject, globalObject.name, undefined)
      context.currentFile.add(definition)
    }
  })
}

function handleSettingsGlobal(context: RuntimeGenerationContext, globalObject: GlobalObject) {
  assert(globalObject.name === "settings")
  assert(globalObject.type === "LuaSettings")
  const statement = createComment(
    'The "settings" global is declared in common/settings-global.d.ts; its runtime type is handled below.'
  )
  context.currentFile.add(statement)

  context.currentFile.addImport("runtime", "LuaSettings")

  const heritageClause = ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
    ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("LuaSettings"), undefined),
  ])
  const intf = ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    "SettingsGlobal",
    undefined,
    [heritageClause],
    []
  )

  const declareModule = createDeclareModule("factorio:common", [intf])
  context.currentFile.addOutsideModule(declareModule)
}
