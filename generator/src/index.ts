import * as fs from "fs"
import * as prettier from "prettier"
import DefinitionsGenerator from "./DefinitionsGenerator"
import commandLineArgs from "command-line-args"

const options: commandLineArgs.OptionDefinition[] = [
  {
    name: "file",
    type: String,
    defaultOption: true,
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
]

const opts = commandLineArgs(options)

if (!opts.file) throw Error("json file name not provided")

console.log("reading file")
const api = JSON.parse(fs.readFileSync(opts.file, "utf-8"))

console.log("generating docs")
let output = new DefinitionsGenerator(api, {
  docs: !opts.nodocs,
}).generateDeclarations()

if (!opts.noformat) {
  console.log("formatting with prettier")
  output = prettier.format(output, {
    parser: "typescript",
    printWidth: 120,
    plugins: ["prettier-plugin-jsdoc"],
  })
}
console.log("writing file")
fs.writeFileSync(`factorio-${api.stage}-${api.application_version}.d.ts`, output)
console.log("done")
