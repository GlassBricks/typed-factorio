import * as console from "console"
import * as fs from "fs/promises"
import * as path from "path"
import * as prettier from "prettier"
import ts from "typescript"
import { fileURLToPath } from "url"
import { AnyApiJson, GenerationContext } from "./GenerationContext.js"
import { PrototypeGenerationContext } from "./prototype/index.js"
import { RuntimeGenerationContext } from "./runtime/index.js"
import { printer } from "./genUtil.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcDir = path.resolve(__dirname, "./input")

const noFormat = process.argv.includes("--no-format")

const srcFiles = await fs.readdir(srcDir)
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

async function getApiJson<C extends AnyApiJson>(stage: string) {
  const json = getApiJsonFileName(stage)

  const apiJson = JSON.parse(await fs.readFile(path.join(srcDir, json), "utf-8")) as C
  const jsonVersion = apiJson.application_version
  if (apiJson.stage !== stage) {
    throw new Error(`Expected stage ${stage}, got ${apiJson.stage}`)
  }

  console.log(`  factorio ${apiJson.stage} v${jsonVersion}`)
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
      content += printer.printNode(ts.EmitHint.Unspecified, statement, context.manualDefinitionsSource) + "\n\n"
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
    await fs.mkdir(path.dirname(fileName), { recursive: true })
    await fs.writeFile(fileName, printContent)
  }
}
async function doGeneration<C extends AnyApiJson>(
  stage: C["stage"],
  manualDefsFile: string,
  cls: new (apiDocs: C, manualDefinitionsSource: ts.SourceFile, typeChecker: ts.TypeChecker) => GenerationContext<C>
) {
  console.log(`${stage}: reading files`)
  const apiJson = await getApiJson<C>(stage)
  const { typeChecker, manualDefines } = getManualDefsFile(manualDefsFile)

  console.log(`${stage}: generating files`)
  const genContext = new cls(apiJson, manualDefines, typeChecker)
  const files = generateFiles(genContext)

  console.log(`${stage}: writing files`)
  await writeFiles(files)
  return genContext.hasWarnings
}

const runtimeHasWarnings = doGeneration("runtime", "manual-defs-runtime.ts", RuntimeGenerationContext)
const prototypesHasWarnings = doGeneration("prototype", "manual-defs-prototype.ts", PrototypeGenerationContext)

const hasWarnings = (await runtimeHasWarnings) || (await prototypesHasWarnings)
if (hasWarnings) {
  process.exit(1)
}
