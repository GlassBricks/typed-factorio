import * as fs from "fs"
import * as prettier from "prettier"
import DefinitionsGenerator from "./DefinitionsGenerator"
import * as path from "path"
import ts from "typescript"
import * as console from "console"
import { FactorioApiJson } from "./FactorioApiJson"

const srcDir = path.resolve(__dirname, "../generatorSrc")
const outDir = path.resolve(__dirname, "../generated")

const srcFiles = fs.readdirSync(srcDir)

const manualDefinesFile = path.resolve(srcDir, srcFiles.find((f) => f.endsWith(".ts"))!)
if (!manualDefinesFile) {
  throw new Error(`Could not find manual defines file in ${srcDir}`)
}
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
  rootNames: [manualDefinesFile],
  options: {},
})
const manualDefines = tsProgram.getSourceFile(manualDefinesFile)
if (!manualDefines) {
  throw new Error("Manual definitions file not found or not valid")
}
const typeChecker = tsProgram.getTypeChecker()

console.log("Generating files")
const generator = new DefinitionsGenerator(apiJson, manualDefines, typeChecker)
const outFiles = generator.generateDeclarations()

console.log("Writing files")
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

for (let [name, content] of outFiles) {
  console.log(`  formatting ${name}.d.ts`)
  content = prettier.format(content, {
    parser: "typescript",
    printWidth: 120,
    semi: false,
  })
  const fileName = path.join(outDir, name + ".d.ts")
  fs.writeFileSync(fileName, content)
}

if (generator.hasWarnings) {
  process.exit(1)
}
