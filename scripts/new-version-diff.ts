import child_process from "child_process"
import { getCurrentFactorioVersion } from "./util.js"
import { fileURLToPath } from "url"
import path from "path"
import { ExecSyncOptionsWithStringEncoding } from "node:child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projDir = path.resolve(__dirname, "..")

function run(cmd: string, options?: Partial<ExecSyncOptionsWithStringEncoding>) {
  return child_process.execSync(cmd, { stdio: "inherit", encoding: "utf8", cwd: projDir, ...options })
}

// get current branch
const currentBranch = run("git rev-parse --abbrev-ref HEAD", { stdio: "pipe" }).trim()

run(`git branch -f new-version-diff`)
run(`git checkout new-version-diff`)

run("npm run generate -- --no-link")
function commit(message: string) {
  run(`git add .`)
  run(`git commit -m "${message}"`)
}
commit("Run generator without link")

run("npm run download-latest-json-apis")
run("npm run generate -- --no-link")
const newFactorioVersion = getCurrentFactorioVersion()
commit(`Diff for factorio version ${newFactorioVersion}`)

// switch back to previous branch
run(`git checkout ${currentBranch}`)
