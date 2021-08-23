import * as https from "https"
import * as fs from "fs"
import * as path from "path"
import * as process from "process"

const url = "https://lua-api.factorio.com/latest/runtime-api.json"

async function main() {
  const destinationFolder = path.resolve(__dirname, "../generatorSrc")
  const destination = path.join(destinationFolder, "downloaded-runtime-api.json")
  await new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(destination)
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject("Status code:" + response.statusCode)
      }
      response.pipe(file)
      file.on("finish", () => {
        ;(file as any).close(resolve) // incomplete type...
      })
    })
    request.on("error", (err) => {
      fs.unlink(destination, () => {})
      reject(err.message)
    })
  })
  const contents = JSON.parse(await fs.promises.readFile(destination, "utf-8")) as {
    application: string
    stage: string
    application_version: string
    api_version: number
  }
  const expected = {
    application: "factorio",
    stage: "runtime",
    api_version: 1,
  }
  for (const [k, value] of Object.entries(expected)) {
    const key = k as keyof typeof expected
    if (contents[key] !== value) {
      throw new Error(`Unexpected in downloaded: ${key} ${contents[key]}`)
    }
  }
  const version = contents.application_version
  console.log(`downloaded runtime api for version ${version}`)
  await fs.promises.rename(destination, path.resolve(destinationFolder, `runtime-api-${version}.json`))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
