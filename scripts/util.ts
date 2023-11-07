import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function isNotNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}
function versionGreater(v1: string, v2: string) {
  const [a1, b1, c1] = v1.split(".")
  const [a2, b2, c2] = v2.split(".")
  if (a1 !== a2) return a1 > a2
  if (b1 !== b2) return b1 > b2
  return c1 > c2
}
export function getCurrentFactorioVersion() {
  return fs
    .readdirSync(path.resolve(__dirname, "../generator/input"))
    .map((file) => file.match(/runtime-api-(\d+)\.(\d+)\.(\d+)\.json$/))
    .filter(isNotNull)
    .map(([, major, minor, patch]) => `${major}.${minor}.${patch}`)
    .reduce((acc, version) => {
      if (versionGreater(version, acc)) return version
      return acc
    }, "0.0.0")
}
