import * as console from "console"
import * as fs from "fs/promises"
import * as path from "path"
import * as prettier from "prettier"
import ts from "typescript"
import { fileURLToPath } from "url"
import { AnyApiJson, GenerationContext } from "./GenerationContext.js"
import { PrototypeGenerationContext } from "./prototype/index.js"
import { RuntimeGenerationContext } from "./runtime/index.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcDir = path.resolve(__dirname, "./input")

const srcFiles = await fs.readdir(srcDir)
const noFormat = process.argv.includes("--no-format")

async function generateFiles<C extends AnyApiJson>(
  stage: C["stage"],
  manualDefsFile: string,
  cls: new (apiDocs: C, manualDefinitionsSource: ts.SourceFile, typeChecker: ts.TypeChecker) => GenerationContext<C>
) {
  console.log("Generating for", stage)

  if (!srcFiles.some((x) => x === manualDefsFile)) {
    throw new Error(`Could not find ${manualDefsFile} in ${srcDir}`)
  }
  const manualDefinesFilePath: string = path.join(srcDir, manualDefsFile)
  let version: string | undefined
  let jsonFile: string | undefined
  for (const file of srcFiles) {
    // const match = file.match(/runtime-api-([0-9-.]+)\.json/)
    const match = file.match(new RegExp(`${stage}-api-([0-9-.]+)\\.json`))
    if (!match) continue
    const thisVersion = match[1]
    // noinspection JSUnusedAssignment
    if (version === undefined || thisVersion > version) {
      version = thisVersion
      jsonFile = match[0]
    }
  }
  if (!jsonFile) {
    throw new Error(`Could not find ${stage} api json file in ${srcDir}`)
  }

  console.log("Reading input")
  const apiJson = JSON.parse(await fs.readFile(path.join(srcDir, jsonFile), "utf-8")) as C
  const jsonVersion = apiJson.application_version
  if (apiJson.stage !== stage) {
    throw new Error(`Expected stage ${stage}, got ${apiJson.stage}`)
  }

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

  const { files, hasWarnings } = new cls(apiJson, manualDefines, typeChecker).generate()

  console.log("Writing files")

  const outDir = path.resolve(__dirname, "..")

  // eslint-disable-next-line prefer-const
  for (let [name, content] of files) {
    if (!noFormat) {
      console.log(`  formatting ${name}`)
      content = prettier.format(content, {
        parser: "typescript",
        printWidth: 120,
        semi: false,
      })
    }
    const fileName = path.join(outDir, name)
    // make sure the directory exists
    await fs.mkdir(path.dirname(fileName), { recursive: true })
    await fs.writeFile(fileName, content)
  }

  return hasWarnings
}

const runtimePromise = await generateFiles("runtime", "manual-defs-runtime.ts", RuntimeGenerationContext)
const prototypesHasWarnings = await generateFiles("prototype", "manual-defs-prototype.ts", PrototypeGenerationContext)

const hasWarnings = runtimePromise || prototypesHasWarnings
if (hasWarnings) {
  process.exit(1)
}
