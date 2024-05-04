import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import child_process from "child_process"
import { getCurrentFactorioVersion } from "./util.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const factorioVersion = getCurrentFactorioVersion()
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
