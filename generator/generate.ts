import * as fs from "fs"
import * as path from "path"
import ts from "typescript"
import { FactorioRuntimeApiJson } from "./FactorioRuntimeApiJson.js"
import { generateClasses, preprocessClasses } from "./runtime/classes.js"
import { generateConcepts, preprocessConcepts } from "./runtime/concepts.js"
import { generateDefines, preprocessDefines } from "./runtime/defines.js"
import { generateEvents, preprocessEvents } from "./runtime/events.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./runtime/index-types.js"
import {
  generateBuiltins,
  generateGlobalFunctions,
  generateGlobalObjects,
  preprocessBuiltins,
  preprocessGlobalFunctions,
  preprocessGlobalObjects,
} from "./runtime/others.js"
import { GenerationContext, RuntimeGenerationContext } from "./GenerationContext.js"
import { emptySourceFile, printer } from "./genUtil.js"
import { checkManualDefinitions, preprocessManualDefinitions } from "./manualDefinitions.js"
import { fileURLToPath } from "url"
import { OutputFile } from "./OutputFile.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const header = "// This is an auto-generated file. Do not edit directly!\n\n"

export function generateRuntimeDeclaration(
  apiJson: FactorioRuntimeApiJson,
  manualDefinitionsSource: ts.SourceFile,
  checker: ts.TypeChecker
): { files: Map<string, string>; hasWarnings: boolean } {
  const context = new RuntimeGenerationContext(apiJson, manualDefinitionsSource, checker)
  preprocessRuntime(context)
  generateRuntime(context)

  return generateFiles(context)
}

function generateFiles(context: GenerationContext): {
  files: Map<string, string>
  hasWarnings: boolean
} {
  const result = new Map<string, string>()

  const outFiles = context.getAllFiles()

  for (const { name, statements } of outFiles) {
    let content = header
    for (const statement of statements) {
      content += printer.printNode(
        ts.EmitHint.Unspecified,
        statement,
        context.manualDefinitionsSource ?? emptySourceFile
      )
      content += "\n\n"
    }
    result.set(`${context.stageName}/generated/${name}.d.ts`, content)
  }

  const indexFiles = generateIndexFiles(context, outFiles)
  for (const [fileName, content] of indexFiles) {
    result.set(fileName, content)
  }

  return { files: result, hasWarnings: context.hasWarnings }
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

function generateIndexFiles(context: GenerationContext, outFiles: OutputFile[]): Map<string, string> {
  const result = new Map<string, string>()

  let globalReferences = ""
  for (const file of outFiles) {
    if (file.moduleType === "global") {
      globalReferences += `/// <reference path="./generated/${file.name}.d.ts" />\n`
    }
  }

  const globalIndexTemplate = fs.readFileSync(
    path.resolve(__dirname, `../${context.stageName}/index-template.ts`),
    "utf8"
  )
  result.set(
    "runtime/index.d.ts",
    globalIndexTemplate.replace("// globals\n", (m) => m + globalReferences)
  )

  let namespaceReferences = ""
  for (const file of outFiles) {
    if (file.moduleType === "namespace") {
      namespaceReferences += `/// <reference path="./${context.stageName}/generated/${file.name}.d.ts" />\n`
    }
  }

  const namespaceIndexTemplate = fs.readFileSync(path.resolve(__dirname, `../index-template.ts`), "utf8")
  result.set(
    "index.d.ts",
    namespaceIndexTemplate.replace(`// ${context.stageName}\n`, (m) => m + namespaceReferences)
  )

  return result
}
