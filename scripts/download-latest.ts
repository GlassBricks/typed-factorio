import child_process from "child_process"
import * as fs from "fs/promises"
import * as path from "path"
import download from "download"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const destinationFolder = path.resolve(__dirname, "../generator/input")

async function downloadApi(stage: string) {
  const url = `https://lua-api.factorio.com/latest/${stage}-api.json`
  const result = (await download(url)).toString("utf8")
  const contents = JSON.parse(result) as {
    application: string
    stage: string
    application_version: string
    api_version: number
  }
  const expected = {
    application: "factorio",
    stage,
    // api_version: 3,
  }
  for (const [k, value] of Object.entries(expected)) {
    const key = k as keyof typeof expected
    if (contents[key] !== value) {
      throw new Error(`Unexpected in downloaded: ${key} ${contents[key]}`)
    }
  }
  const version = contents.application_version
  console.log(`downloaded ${stage} api for version ${version}`)
  // delete all previous versions
  for (const file of (await fs.readdir(destinationFolder)).filter((file) =>
    new RegExp(`${stage}-api-\\d+\\.\\d+\\.\\d+\.json$`).test(file),
  )) {
    await fs.unlink(path.join(destinationFolder, file))
  }
  const resultContents = JSON.stringify(contents, undefined, 2) + "\n"
  const resultFile = path.resolve(destinationFolder, `${stage}-api-${version}.json`)
  await fs.writeFile(resultFile, resultContents)
}

const stages = ["runtime", "prototype"]
await Promise.all(stages.map(downloadApi))

// add to git
const projectDir = path.resolve(__dirname, "..")
child_process.spawnSync("git", ["add", path.relative(projectDir, destinationFolder)], {
  cwd: projectDir,
  stdio: "inherit",
})
