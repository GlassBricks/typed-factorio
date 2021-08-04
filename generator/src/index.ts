import * as fs from "fs"
import * as prettier from "prettier"
import DefinitionsGenerator from "./DefinitionsGenerator"
import commandLineArgs from "command-line-args"
import * as path from "path"
import ts from "typescript"
import { processManualDefines } from "./manualDefines"

const options: commandLineArgs.OptionDefinition[] = [
  {
    name: "folder",
    type: String,
    defaultOption: true,
    multiple: true,
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
    name: "outdir",
    alias: "o",
  },
]

const opts: {
  folder: string[]
  nodocs: boolean
  noformat: boolean
  outdir?: string
} = commandLineArgs(options) as any

if (!opts.folder) throw Error("folder name not provided")

console.log("reading files")
const jsonApi = JSON.parse(fs.readFileSync(path.join(opts.folder[0], "runtime-api.json"), "utf-8"))

const manualDefinesFile = path.resolve(opts.folder[0], "manual-defines.ts")
const program = ts.createProgram({
  rootNames: [manualDefinesFile],
  options: {},
})
const manualDefines = processManualDefines(program.getSourceFile(manualDefinesFile))

console.log("generating docs")
let output = new DefinitionsGenerator(jsonApi, manualDefines, !opts.nodocs).generateDeclarations()

if (!opts.noformat) {
  console.log("formatting with prettier")
  output = prettier.format(output, {
    parser: "typescript",
    printWidth: 120,
    plugins: ["prettier-plugin-jsdoc"],
  })
}
console.log("writing file")
const outPath = path.join(
  opts.outdir || "",
  `${jsonApi.application}-${jsonApi.stage}-${jsonApi.application_version}.d.ts`
)
fs.writeFileSync(outPath, output)
console.log("done")
