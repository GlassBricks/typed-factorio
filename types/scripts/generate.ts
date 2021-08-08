import * as fs from "fs"
import * as child_process from "child_process"
import * as path from "path"

const args = process.argv.slice(2)
const dev = args[0] === "dev"

let generatorSrc = path.resolve(__dirname, "../generatorSrc")
const files = fs.readdirSync(generatorSrc)
const manualDefines = path.resolve(generatorSrc, files.find((f) => f.endsWith(".d.ts"))!)
const jsonFiles = new Map(
  files
    .map((file) => file.match(/runtime-api-([0-9-.]+)\.json/))
    .filter((file) => !!file)
    .map((file) => [file![1], path.resolve(generatorSrc, file![0])])
)

const outDir = dev ? path.resolve("./out/%version.d.ts") : path.resolve("./%version.d.ts")

async function runForFile(name: string, file: string, extraArgs?: string) {
  const process = child_process.exec(
    `cd ../generator && yarn run gen --json "${file}" --defines "${manualDefines}" --out "${outDir}" ` +
      (extraArgs ?? "")
  )
  process.stdout?.on("data", (data) => {
    console.log(`${name}: ${data}`)
  })
  process.stderr?.on("data", (data) => {
    console.error(`${name}: ${data}`)
  })
  return new Promise((resolve, reject) => {
    process.on("exit", resolve)
    process.on("error", reject)
  })
}

function maxOf(arr: string[]): string {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}

main().catch((e) => {
  console.error(e)
  throw e
})

async function main() {
  if (dev) {
    const latest = maxOf([...jsonFiles.keys()])
    await runForFile(latest, jsonFiles.get(latest)!, "--noformat")
  } else {
    await Promise.all([...jsonFiles.entries()].map(([version, file]) => runForFile(version, file, "--errorOnWarnings")))
  }
}
