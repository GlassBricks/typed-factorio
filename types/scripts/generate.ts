import * as fs from "fs"
import * as path from "path"
import concurrently from "concurrently"

const args = process.argv.slice(2)
const dev = args[0] === "dev"

const generatorSrc = path.resolve(__dirname, "../generatorSrc")
const files = fs.readdirSync(generatorSrc)
const manualDefines = path.resolve(generatorSrc, files.find((f) => f.endsWith(".d.ts"))!)
const jsonFiles = new Map(
  files
    .map((file) => file.match(/runtime-api-([0-9-.]+)\.json/))
    .filter((file) => !!file)
    .map((file) => [file![1], path.resolve(generatorSrc, file![0])])
)

const outPath = path.resolve(__dirname, "../generated/%version.d.ts")

function runForFile(version: string, file: string, extraArgs?: string): string {
  return `yarn run gen --json "${file}" --defines "${manualDefines}" --out "${outPath}" ` + (extraArgs ?? "")
}

function maxOf(arr: string[]): string {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}

main().catch(() => {
  process.exit(1)
})

async function main() {
  let versions: string[]
  let commands: string[]
  if (dev) {
    const latest = maxOf([...jsonFiles.keys()])
    versions = [latest]
    commands = [runForFile(latest, jsonFiles.get(latest)!, "--noformat")]
  } else {
    versions = [...jsonFiles.keys()]
    commands = [...jsonFiles.entries()].map(([versions, file]) => runForFile(versions, file, "--error-on-warnings"))
  }
  await concurrently(
    commands.map((c, i) => ({
      command: c,
      name: versions[i],
    })),
    {
      cwd: path.resolve(__dirname, "../../generator"),
      prefix: dev ? "none" : undefined,
    }
  )
}
