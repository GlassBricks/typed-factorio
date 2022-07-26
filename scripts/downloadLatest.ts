import * as child_process from "child_process"
import * as fs from "fs"
import * as https from "https"
import * as path from "path"

const url = "https://lua-api.factorio.com/latest/runtime-api.json"

const destinationFolder = path.resolve(__dirname, "../generatorSrc")
const destination = path.join(destinationFolder, "downloaded-runtime-api.json")
new Promise((resolve, reject) => {
  const file = fs.createWriteStream(destination)
  const request = https.get(url, (response) => {
    if (response.statusCode !== 200) {
      return reject("Status code:" + response.statusCode)
    }
    response.pipe(file)
    file.on("finish", () => {
      file.close(resolve)
    })
  })
  request.on("error", (err) => {
    fs.unlink(destination, () => {})
    reject(err.message)
  })
}).then(() => {
  const contents = JSON.parse(fs.readFileSync(destination, "utf8")) as {
    application: string
    stage: string
    application_version: string
    api_version: number
  }
  const expected = {
    application: "factorio",
    stage: "runtime",
    api_version: 3,
  }
  for (const [k, value] of Object.entries(expected)) {
    const key = k as keyof typeof expected
    if (contents[key] !== value) {
      throw new Error(`Unexpected in downloaded: ${key} ${contents[key]}`)
    }
  }
  const version = contents.application_version
  console.log(`downloaded runtime api for version ${version}`)
  // delete all previous versions
  fs.readdirSync(destinationFolder)
    .filter((file) => /runtime-api-\d+\.\d+\.\d+\.json$/.test(file))
    .forEach((file) => {
      fs.unlinkSync(path.join(destinationFolder, file))
    })
  const resultFile = path.resolve(destinationFolder, `runtime-api-${version}.json`)
  fs.renameSync(destination, resultFile)

  // add to git
  const projectDir = path.resolve(__dirname, "..")
  child_process.spawnSync("git", ["add", path.relative(projectDir, resultFile)], {
    cwd: projectDir,
    stdio: "inherit",
  })
})
