import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { analyzeMethod, mapFunction } from "./members.js"
import { byOrder } from "../util.js"
import { ModuleType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessBuiltins(context: RuntimeGenerationContext): void {
  for (const builtin of context.apiDocs.builtin_types) {
    if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
    context.references.set(builtin.name, builtin.name)
    const existing = context.manualDefs.getDeclaration(builtin.name)
    if (existing?.kind === "type" && existing.node.type.kind === ts.SyntaxKind.NumberKeyword)
      context.numericTypes.add(builtin.name)
  }
}

export function preprocessGlobalFunctions(context: RuntimeGenerationContext): void {
  for (const globalFunction of context.apiDocs.global_functions) {
    context.references.set(globalFunction.name, globalFunction.name)
    analyzeMethod(context, globalFunction)
  }
}

export function generateBuiltins(context: RuntimeGenerationContext): void {
  context.addFile("builtin-types", ModuleType.Runtime, () => {
    for (const builtin of context.apiDocs.builtin_types.sort(byOrder)) {
      if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
      const existing = context.manualDefs.getDeclaration(builtin.name)
      if (!existing) {
        context.warning(`No existing definition for builtin ${builtin.name}`)
        continue
      }
      context.currentFile.add(addJsDoc(context, existing.node, builtin, builtin.name, undefined))
    }
  })
}

export function generateGlobalFunctions(context: RuntimeGenerationContext): void {
  context.addFile("global-functions", ModuleType.Global, () => {
    for (const globalFunction of context.apiDocs.global_functions.sort(byOrder)) {
      const definition = mapFunction(context, globalFunction)
      context.currentFile.add(definition)
    }
  })
}
