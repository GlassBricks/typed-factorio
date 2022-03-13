import * as fs from "fs"
import * as prettier from "prettier"
import * as path from "path"
import ts from "typescript"
import * as console from "console"
import { FactorioApiJson } from "./FactorioApiJson"
import { generateDefinitions } from "./generate"

const srcDir = path.resolve(__dirname, "../generatorSrc")

const srcFiles = fs.readdirSync(srcDir)

const manualDefinesFileName = "manual-defs.ts"
if (!srcFiles.some((x) => x === manualDefinesFileName)) {
  throw new Error(`Could not find manual-defs.ts defines file in ${srcDir}`)
}
const manualDefinesFilePath = path.join(srcDir, manualDefinesFileName)

let version: string | undefined
let jsonFile: string | undefined
for (const file of srcFiles) {
  const match = file.match(/runtime-api-([0-9-.]+)\.json/)
  if (!match) continue
  const thisVersion = match[1]
  // noinspection JSUnusedAssignment
  if (version === undefined || thisVersion > version) {
    version = thisVersion
    jsonFile = match[0]
  }
}
if (!jsonFile) {
  throw new Error(`Could not find runtime api json file in ${srcDir}`)
}

console.log("Reading input")
const apiJson = JSON.parse(fs.readFileSync(path.join(srcDir, jsonFile!), "utf-8")) as FactorioApiJson
const jsonVersion = apiJson.application_version

console.log(`  factorio version ${jsonVersion}`)
const tsProgram = ts.createProgram({
  rootNames: [manualDefinesFilePath],
  options: {},
})
const manualDefines = tsProgram.getSourceFile(manualDefinesFilePath)
if (!manualDefines) {
  throw new Error("Manual definitions file not found or not valid")
}
const typeChecker = tsProgram.getTypeChecker()

console.log("Generating files")
const { files, hasWarnings } = generateDefinitions(apiJson, manualDefines, typeChecker)

console.log("Writing files")

const outDir = path.resolve(__dirname, "..")
for (let [name, content] of files) {
  console.log(`  formatting ${name}`)
  content = prettier.format(content, {
    parser: "typescript",
    printWidth: 120,
    semi: false,
  })
  const fileName = path.join(outDir, name)
  fs.writeFileSync(fileName, content)
}

if (hasWarnings) {
  process.exit(1)
}
