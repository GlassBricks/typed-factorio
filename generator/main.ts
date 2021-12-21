import * as fs from "fs"
import * as prettier from "prettier"
import DefinitionsGenerator from "./DefinitionsGenerator"
import * as path from "path"
import ts from "typescript"
import * as console from "console"
import { program } from "commander"
import { FactorioApiJson } from "./FactorioApiJson"

program
  .option("--in <path>", "Source folder containing manualDefinitions(.d).ts and runtime-api(-version).json")
  .option("--out <path>", "output directory")
  .option("--no-docs", "Do not output docs")
  .option("--no-format", "Do not format with prettier (significant speedup)")
  .option("--warn-as-error", "Treat warnings as errors")

program.parse()
const opts = program.opts<{
  in: string
  out: string
  docs: boolean
  format: boolean
  warnAsError: boolean
}>()
const srcFolder = path.resolve(opts.in)
const srcFiles = fs.readdirSync(srcFolder)

const manualDefinesFile = path.resolve(srcFolder, srcFiles.find((f) => f.endsWith(".ts"))!)
if (!manualDefinesFile) {
  throw new Error(`could not find manual defines file in ${srcFolder}`)
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
  throw new Error(`could not find json api file in ${srcFolder}`)
}

console.log("reading files")
const jsonApi = JSON.parse(fs.readFileSync(path.join(srcFolder, jsonFile!), "utf-8")) as FactorioApiJson
const tsProgram = ts.createProgram({
  rootNames: [manualDefinesFile],
  options: {},
})
const manualDefines = tsProgram.getSourceFile(manualDefinesFile)
if (!manualDefines) {
  throw new Error("Manual definitions file not found or not valid")
}
const typeChecker = tsProgram.getTypeChecker()

console.log("generating docs")
const outFiles = new DefinitionsGenerator(
  jsonApi,
  manualDefines,
  typeChecker,
  opts.docs,
  opts.warnAsError
).generateDeclarations()

console.log("writing files")
const outDir = path.resolve(opts.out)
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}
for (let [name, content] of outFiles) {
  if (opts.format) {
    content = prettier
      .format(content, {
        parser: "typescript",
        printWidth: 120,
        semi: false,
        plugins: ["prettier-plugin-jsdoc"],
      })
      .replace(/;```/g, "```") // workaround for prettier plugin jsdoc bug
  }
  const fileName = path.join(outDir, name + ".d.ts")
  fs.promises.writeFile(fileName, content).catch((e) => {
    console.error(e)
  })
}