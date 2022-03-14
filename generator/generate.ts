import { printer } from "./genUtil"
import ts from "typescript"
import { generateBuiltins, generateGlobalObjects, preprocessBuiltins, preprocessGlobalObjects } from "./files/others"
import { generateDefines, preprocessDefines } from "./files/defines"
import { generateEvents, preprocessEvents } from "./files/events"
import { generateClasses, preprocessClasses } from "./files/classes"
import { generateConcepts, preprocessConcepts } from "./files/concepts"
import { checkManualDefinitions, preprocessManualDefinitions } from "./manualDefinitions"
import DefinitionsGenerator from "./DefinitionsGenerator"
import { FactorioApiJson } from "./FactorioApiJson"
import * as path from "path"
import * as fs from "fs"
import { generateIndexTypesFile, preprocessIndexTypes } from "./files/index-types"

export function generateDefinitions(
  apiJson: FactorioApiJson,
  manualDefinitionsSource: ts.SourceFile,
  checker: ts.TypeChecker
): { files: Map<string, string>; hasWarnings: boolean } {
  const header = "// This is an auto-generated file. Do not edit directly!\n\n"
  const generator = new DefinitionsGenerator(apiJson, manualDefinitionsSource, checker)
  preprocessAll(generator)
  generateAll(generator)

  const result = new Map<string, string>()
  for (const [fileName, statements] of generator.outFiles) {
    let content = header
    for (const statement of statements) {
      content += printer.printNode(ts.EmitHint.Unspecified, statement, generator.manualDefinitionsSource)
      content += "\n\n"
    }
    result.set(path.join("generated", fileName + ".d.ts"), content)
  }

  const indexFiles = generateIndexFiles(Array.from(generator.outFiles.keys()))
  for (const [fileName, content] of indexFiles) {
    result.set(fileName, content)
  }

  const hasWarnings = generator.hasWarnings
  return { files: result, hasWarnings }
}

function preprocessAll(generator: DefinitionsGenerator) {
  preprocessBuiltins(generator)
  preprocessGlobalObjects(generator)
  preprocessDefines(generator)
  preprocessEvents(generator)
  preprocessClasses(generator)
  preprocessConcepts(generator)
  preprocessIndexTypes(generator)
  preprocessManualDefinitions(generator)
  generator.preprocessDone = true
}

function generateAll(generator: DefinitionsGenerator) {
  generateBuiltins(generator)
  generateGlobalObjects(generator)
  generateDefines(generator)
  generateEvents(generator)
  generateClasses(generator)
  generateConcepts(generator)
  generateIndexTypesFile(generator)
  checkManualDefinitions(generator)
}

function generateIndexFiles(fileNames: string[]): Map<string, string> {
  const result = new Map<string, string>()
  // hardcoded for now
  const indexTemplate = fs.readFileSync(path.resolve(__dirname, "../runtime/index-template.ts"), "utf8")
  function createIndexFile(useStrict: boolean) {
    let references = ""
    for (const file of fileNames) {
      if (file === "index-types") {
        if (useStrict) continue
      }
      if (file === "index-types-strict") {
        if (!useStrict) continue
      }
      references += `/// <reference path="../generated/${file}.d.ts" />\n`
    }
    return indexTemplate.replace("// generated\n", (m) => m + references)
  }

  const nonStrictIndexFile = createIndexFile(false)
  result.set("runtime/index.d.ts", nonStrictIndexFile)
  result.set("runtime/strict-index-types.d.ts", createIndexFile(true))

  const header = `// This references the same files as "typed-factorio/runtime".
// For example, if you want to modify a file, copy the file you want to modify to your project and make the changes. Then, copy this template file into your project and remove the line corresponding to modified file.
// If you think your modification will be useful to others, please consider making a change suggestion by creating an issue on GitHub.

// Replace "index-types.d.ts" with "index-types-strict.d.ts" below if you want strict index types.

`
  const customIndexFileContent =
    header +
    nonStrictIndexFile.replaceAll(/<reference path="(.*?)"/g, (match, filePath) => {
      const relPath = path.join("runtime", filePath)
      return `<reference types="typed-factorio/${relPath}"`
    })
  result.set("custom-index-template.d.ts", customIndexFileContent)

  return result
}
