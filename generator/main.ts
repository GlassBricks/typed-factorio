import * as console from "console"
import * as fs from "fs"
import * as path from "path"
import * as prettier from "prettier"
import ts from "typescript"
import { fileURLToPath } from "url"
import { AnyApiJson, GenerationContext, Options } from "./GenerationContext.js"
import { PrototypeGenerationContext } from "./prototype"
import { RuntimeGenerationContext } from "./runtime"
import { printer } from "./genUtil.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcDir = path.resolve(__dirname, "./input")

const noFormat = process.argv.includes("--no-format")
const noLink = process.argv.includes("--no-link")

const srcFiles = fs.readdirSync(srcDir)
function getApiJsonFileName(stage: string) {
  let version: string | undefined
  let jsonFile: string | undefined
  for (const file of srcFiles) {
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
  return jsonFile
}

function getApiJson<C extends AnyApiJson>(stage: string) {
  const json = getApiJsonFileName(stage)

  const apiJson = JSON.parse(fs.readFileSync(path.join(srcDir, json), "utf-8")) as C
  const jsonVersion = apiJson.application_version
  if (apiJson.stage !== stage) {
    throw new Error(`Expected stage ${stage}, got ${apiJson.stage}`)
  }

  console.log(`${stage}: loaded v${jsonVersion}`)
  return apiJson
}

function getManualDefsFile(manualDefsFile: string) {
  if (!srcFiles.some((x) => x === manualDefsFile)) {
    throw new Error(`Could not find ${manualDefsFile} in ${srcDir}`)
  }
  const manualDefinesFilePath: string = path.join(srcDir, manualDefsFile)
  const tsProgram = ts.createProgram({
    rootNames: [manualDefinesFilePath],
    options: {},
  })
  const manualDefines = tsProgram.getSourceFile(manualDefinesFilePath)
  if (!manualDefines) {
    throw new Error("Manual definitions file not found or not valid")
  }
  const typeChecker = tsProgram.getTypeChecker()
  return { typeChecker, manualDefines }
}

function generateFiles(context: GenerationContext) {
  const files = context.generate()
  const fileResults: Map<string, string> = new Map()
  for (const { name, statements } of files) {
    let content = "// This is an auto-generated file. Do not edit directly!\n\n"
    for (const statement of statements) {
      content += printer.printNode(ts.EmitHint.Unspecified, statement, context.manualDefsSource) + "\n\n"
    }
    fileResults.set(`${context.stageName}/generated/${name}.d.ts`, content)
  }
  return fileResults
}

async function writeFiles(fileResults: Map<string, string>) {
  const outDir = path.resolve(__dirname, "..")
  for (const [name, content] of fileResults) {
    let printContent = content
    if (!noFormat) {
      console.log(`  formatting ${name}`)
      printContent = await prettier.format(content, {
        parser: "typescript",
        semi: false,
        printWidth: 120,
      })
    }
    const fileName = path.join(outDir, name)
    // make sure the directory exists
    fs.mkdirSync(path.dirname(fileName), { recursive: true })
    fs.writeFileSync(fileName, printContent)
  }
}
const options: Options = {
  noLink,
}

async function doGeneration<C extends AnyApiJson>(
  stage: C["stage"],
  manualDefsFile: string,
  cls: new (
    apiDocs: C,
    manualDefinitionsSource: ts.SourceFile,
    typeChecker: ts.TypeChecker,
    option: Options,
  ) => GenerationContext<C>,
) {
  console.log(`${stage}: reading input files`)
  const apiJson = getApiJson<C>(stage)
  const { typeChecker, manualDefines } = getManualDefsFile(manualDefsFile)

  console.log(`${stage}: generating`)
  const genContext = new cls(apiJson, manualDefines, typeChecker, options)
  const files = generateFiles(genContext)

  console.log(`${stage}: writing files`)
  await writeFiles(files)
  return genContext.hasWarnings
}

const runtimeHasWarnings = await doGeneration("runtime", "manual-defs-runtime.ts", RuntimeGenerationContext)
const prototypesHasWarnings = await doGeneration("prototype", "manual-defs-prototype.ts", PrototypeGenerationContext)

if (runtimeHasWarnings || prototypesHasWarnings) {
  process.exit(1)
}
