import ts from "typescript"
import { FactorioRuntimeApiJson } from "./FactorioRuntimeApiJson.js"
import { generateClasses, preprocessClasses } from "./files/classes.js"
import { generateConcepts, preprocessConcepts } from "./files/concepts.js"
import { generateDefines, preprocessDefines } from "./files/defines.js"
import { generateEvents, preprocessEvents } from "./files/events.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./files/index-types.js"
import {
  generateBuiltins,
  generateGlobalFunctions,
  generateGlobalObjects,
  preprocessBuiltins,
  preprocessGlobalFunctions,
  preprocessGlobalObjects,
} from "./files/others.js"
import { GenerationContext } from "./GenerationContext.js"
import { checkManualDefinitions, preprocessManualDefinitions } from "./manualDefinitions.js"
import { getGlobalsFile, getIndexFile, Section } from "./Section.js"
import * as fs from "fs"
import { fileURLToPath } from "url"
import path from "path"

const header = "// This is an auto-generated file. Do not edit directly!\n\n"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function generateDefinitions(
  apiJson: FactorioRuntimeApiJson,
  manualDefinitionsSource: ts.SourceFile,
  checker: ts.TypeChecker
): { files: Map<string, string>; hasWarnings: boolean } {
  const context = new GenerationContext(apiJson, manualDefinitionsSource, checker)
  preprocessAll(context)
  const sections = generateAllSections(context)

  const indexFooter = getFooter(context, "index")
  const globalsFooter = getFooter(context, "globals")

  const files = {
    [`${context.stageName}/index.d.ts`]: getIndexFile(context, sections, header, indexFooter),
    [`${context.stageName}/globals.d.ts`]: getGlobalsFile(context, sections, header, globalsFooter),
  }

  return { files: new Map(Object.entries(files)), hasWarnings: context.hasWarnings }
}

function getFooter(context: GenerationContext, sectionName: string) {
  const fileContent = fs.readFileSync(
    path.join(__dirname, `../${context.stageName}/${sectionName}-additional.ts`),
    "utf-8"
  )
  return fileContent.substring(fileContent.indexOf("\n\n") + 2)
}

function preprocessAll(context: GenerationContext) {
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

function generateAllSections(context: GenerationContext): Section[] {
  const sections = [
    generateBuiltins(context),
    generateGlobalObjects(context),
    generateGlobalFunctions(context),
    generateDefines(context),
    generateEvents(context),
    generateClasses(context),
    generateConcepts(context),
    generateIndexTypesFile(context),
  ]
  checkManualDefinitions(context)
  return sections
}
