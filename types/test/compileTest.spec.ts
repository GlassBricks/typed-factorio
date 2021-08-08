import * as path from "path"
import * as ts from "typescript"
import * as fs from "fs"

function testCompiles(factorioVersion: string, file: string): void {
  const declarations = path.resolve(__dirname, `../${factorioVersion}.d.ts`)
  const rootNames = [file, declarations]
  const program = ts.createProgram(rootNames, {
    target: ts.ScriptTarget.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    types: [],
    lib: ["lib.esnext.d.ts"],
    strict: true,
  })
  const diagnostics = ts.sortAndDeduplicateDiagnostics(ts.getPreEmitDiagnostics(program))
  expect(diagnostics.map((d) => d.messageText)).toEqual([])
}

const versions = ["1.1.35", "1.1.36", "1.1.37"]

const compileTestDir = path.resolve(__dirname, "./compileTest")
const files = fs.readdirSync(compileTestDir).filter((f) => f.endsWith(".ts"))

versions.forEach((v) => {
  describe(`factorio version ${v}`, () => {
    files.forEach((file) => {
      test(file, () => {
        testCompiles(v, path.resolve(compileTestDir, file))
      })
    })
  })
})
