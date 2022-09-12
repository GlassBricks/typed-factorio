import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import child_process from "child_process"

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

const factorioVersion = fs
  .readdirSync(path.resolve(__dirname, "../generatorSrc"))
  .map((file) => file.match(/runtime-api-(\d+)\.(\d+)\.(\d+)\.json$/))
  .filter(isNotNull)
  .map(([, major, minor, patch]) => `${major}.${minor}.${patch}`)
  .reduce((acc, version) => {
    if (versionGreater(version, acc)) return version
    return acc
  }, "0.0.0")

if (factorioVersion === "0.0.0") {
  throw new Error("No runtime api json found")
}

const [major, minor] = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8")).version.split(".")
const nextVersion = `${major}.${Number(minor) + 1}.0`

const sectionHeader = `# v${nextVersion}\n`
const noteContent = `- Updated to factorio version ${factorioVersion}\n`

const changelogDir = path.resolve(__dirname, "../Changelog.md")
const changelogContent = fs.readFileSync(changelogDir, "utf8")
if (changelogContent.includes(sectionHeader)) {
  console.log(`Changelog for ${nextVersion} already exists`)
  process.exit(0)
}
if (changelogContent.includes(noteContent)) {
  console.log(`Changelog for factorio ${factorioVersion} already exists`)
  process.exit(0)
}

const newContent = `${sectionHeader}\n${noteContent}\n${changelogContent}`
fs.writeFileSync(changelogDir, newContent)

child_process.execSync("git add .", { cwd: path.resolve(__dirname, "..") })
child_process.execSync(`git commit -m "update to factorio version ${factorioVersion}"`, {
  cwd: path.resolve(__dirname, ".."),
})
