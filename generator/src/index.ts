import * as fs from "fs"
import * as prettier from "prettier"
import DefinitionsGenerator from "./DefinitionsGenerator"
import commandLineArgs from "command-line-args"
import * as path from "path"
import ts from "typescript"
import * as console from "console"

const options: commandLineArgs.OptionDefinition[] = [
  {
    name: "json",
  },
  {
    name: "defines",
  },
  {
    name: "nodocs",
    type: Boolean,
    defaultValue: false,
  },
  {
    name: "noformat",
    type: Boolean,
    defaultValue: false,
  },
  {
    name: "out",
    alias: "o",
    defaultValue: "%application-%stage-%version.d.ts",
  },
  { name: "errorOnWarnings", type: Boolean, defaultValue: false },
]

const opts = commandLineArgs(options) as {
  json: string
  defines: string
  nodocs: boolean
  noformat: boolean
  out: string
  errorOnWarnings: boolean
}

console.log("reading files")
const jsonApi = JSON.parse(fs.readFileSync(opts.json, "utf-8")) as FactorioApiJson

const manualDefinesFile = path.resolve(opts.defines)
const program = ts.createProgram({
  rootNames: [manualDefinesFile],
  options: {},
})
const manualDefines = program.getSourceFile(manualDefinesFile)
if (!manualDefines) {
  throw new Error("Manual definitions file not found or not valid")
}

console.log("generating docs")
let output = new DefinitionsGenerator(
  jsonApi,
  manualDefines,
  program.getTypeChecker(),
  !opts.nodocs,
  opts.errorOnWarnings
).generateDeclarations()

if (!opts.noformat) {
  console.log("formatting with prettier")
  output = prettier.format(output, {
    parser: "typescript",
    printWidth: 120,
    plugins: ["prettier-plugin-jsdoc"],
  })
}
console.log("writing file")
const outPath = path.resolve(
  opts.out
    .replace("%application", jsonApi.application)
    .replace("%stage", jsonApi.stage)
    .replace("%version", jsonApi.application_version)
)
const dir = path.dirname(outPath)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}
fs.writeFileSync(outPath, output)
console.log("done")
