import * as path from "path"
import * as ts from "typescript"
import * as fs from "fs"
import { Transpiler } from "typescript-to-lua"

const compileTestDir = path.resolve(__dirname, "./compileTest")

function testCompiles(factorioVersion: string, fileName: string): void {
  const file = path.resolve(compileTestDir, fileName)
  const declarations = path.resolve(__dirname, `../${factorioVersion}.d.ts`)
  const rootNames = [file, declarations]
  const options = {
    target: ts.ScriptTarget.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    types: [],
    lib: ["lib.esnext.d.ts"],
    strict: true,
  }
  const program = ts.createProgram(rootNames, options)

  const outFiles: Array<{ fileName: string; fileContent: string }> = []
  const { diagnostics: transpileDiagnostics } = new Transpiler().emit({
    program,
    writeFile: (fileName, fileContent) => outFiles.push({ fileName, fileContent }),
  })

  const diagnostics = ts.sortAndDeduplicateDiagnostics([...ts.getPreEmitDiagnostics(program), ...transpileDiagnostics])
  expect(diagnostics.map((d) => d.messageText)).toEqual([])

  const luaFileName = fileName.substring(0, fileName.lastIndexOf(".ts")) + ".lua"
  const outFile = outFiles.find((f) => f.fileName.endsWith(luaFileName))
  expect(outFile).toBeDefined()
  expect(outFile!.fileContent.trim()).toMatchSnapshot()
}

const generatorSrc = path.resolve(__dirname, "../generatorSrc")
const versions = fs
  .readdirSync(generatorSrc)
  .map((file) => file.match(/runtime-api-([0-9-.]+)\.json/)?.[1])
  .filter((file) => !!file) as string[]

const files = fs.readdirSync(compileTestDir).filter((f) => f.endsWith(".ts"))

files.forEach((file) => {
  describe(file, () => {
    versions.forEach((v) => {
      test(`factorio version ${v}`, () => {
        testCompiles(v, file)
      })
    })
  })
})
