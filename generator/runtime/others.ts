import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { createConst, Modifiers } from "../genUtil.js"
import { analyzeMethod, mapFunction } from "../members.js"
import { analyzeType, RWUsage } from "../read-write-types.js"
import { mapRuntimeType } from "../types.js"
import { sortByOrder } from "../util.js"
import { DeclarationType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessBuiltins(context: RuntimeGenerationContext): void {
  for (const builtin of context.apiDocs.builtin_types) {
    if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
    context.references.set(builtin.name, builtin.name)
    const existing = context.getInterfaceDef(builtin.name)
    if (existing?.kind === "type" && existing.node.type.kind === ts.SyntaxKind.NumberKeyword)
      context.numericTypes.add(builtin.name)
  }
}

export function preprocessGlobalObjects(context: RuntimeGenerationContext): void {
  for (const globalObject of context.apiDocs.global_objects) {
    context.references.set(globalObject.name, globalObject.name)
    analyzeType(context, globalObject.type, RWUsage.Read)
  }
}

export function preprocessGlobalFunctions(context: RuntimeGenerationContext): void {
  for (const globalFunction of context.apiDocs.global_functions) {
    context.references.set(globalFunction.name, globalFunction.name)
    analyzeMethod(context, globalFunction)
  }
}

export function generateBuiltins(context: RuntimeGenerationContext): void {
  context.addFile("builtin-types", DeclarationType.Types, () => {
    for (const builtin of context.apiDocs.builtin_types.sort(sortByOrder)) {
      if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "number") continue
      const existing = context.getInterfaceDef(builtin.name)
      if (!existing) {
        context.warning(`No existing definition for builtin ${builtin.name}`)
        continue
      }
      context.currentFile.add(addJsDoc(context, existing.node, builtin, builtin.name, undefined))
    }
  })
}

export function generateGlobalObjects(context: RuntimeGenerationContext): void {
  context.addFile("global-objects", DeclarationType.Globals, () => {
    for (const globalObject of context.apiDocs.global_objects.sort(sortByOrder)) {
      const definition = createConst(
        globalObject.name,
        mapRuntimeType(context, globalObject.type, globalObject.name, RWUsage.Read).mainType,
        [Modifiers.declare]
      )
      addJsDoc(context, definition, globalObject, globalObject.name, undefined)
      context.currentFile.add(definition)
    }
  })
}

export function generateGlobalFunctions(context: RuntimeGenerationContext): void {
  context.addFile("global-functions", DeclarationType.Globals, () => {
    for (const globalFunction of context.apiDocs.global_functions.sort(sortByOrder)) {
      const definition = mapFunction(context, globalFunction)
      context.currentFile.add(definition)
    }
  })
}
