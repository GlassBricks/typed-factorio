// This file is based off of https://github.com/TypeScriptToLua/lua-types/blob/ad475f6dea148f16297301e55f90d8768aa69e5a/test/test-utils.ts
// Lua types is released under the MIT license.

import * as path from "path"
import * as ts from "typescript"
import { CompilerOptions, Transpiler } from "typescript-to-lua"

export class CompileTestBuilder {
  constructor(public readonly diagnostics: any[], public readonly lua: string) {}

  public expectToHaveDiagnostics(): this {
    expect(this.diagnostics).not.toEqual([])
    return this
  }

  public expectToHaveNoDiagnostics(): this {
    expect(this.diagnostics).toEqual([])
    return this
  }

  public expectToMatchSnapshot(): this {
    this.expectToHaveNoDiagnostics()
    expect(this.lua).toMatchSnapshot()
    return this
  }
}

const declarationsFile = path.resolve(__dirname, `../runtime/index.d.ts`)

export function tstl(...args: [string] | [TemplateStringsArray, ...any[]]) {
  let tsCode: string
  if (typeof args[0] === "string") {
    tsCode = args[0]
  } else {
    let [raw, ...substitutions] = args
    tsCode = String.raw(raw, ...substitutions)
  }

  const rootNames = ["input.ts", declarationsFile]
  const options: CompilerOptions = {
    lib: ["lib.esnext.d.ts"],
    noHeader: true,
    target: ts.ScriptTarget.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    types: [],
  }
  const compilerHost = getCompilerHostWithInput(tsCode)
  const program = ts.createProgram(rootNames, options, compilerHost)

  const outFiles: Array<{ fileName: string; fileContent: string }> = []
  const { diagnostics: transpileDiagnostics } = new Transpiler().emit({
    program,
    writeFile: (fileName, fileContent) => outFiles.push({ fileName, fileContent }),
  })

  const diagnostics = ts
    .sortAndDeduplicateDiagnostics([...ts.getPreEmitDiagnostics(program), ...transpileDiagnostics])
    .map((d) => d.messageText)
  const outFile = outFiles.find((f) => f.fileName.endsWith("input.lua"))
  expect(outFile).toBeDefined()

  return new CompileTestBuilder(diagnostics, outFile!.fileContent)
}

const fileCache: Record<string, string> = {}

const compilerHost = ts.createCompilerHost({
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
})

// Create a compiler host that simply reads files from disk, except for "input.ts", for which it returns its input parameter.
function getCompilerHostWithInput(input: string): ts.CompilerHost {
  return {
    ...compilerHost,
    fileExists(fileName: string) {
      if (fileName === "input.ts") return true
      return compilerHost.fileExists(fileName)
    },
    writeFile() {},

    getSourceFile(fileName: string, languageVersion) {
      if (fileName === "input.ts") {
        return ts.createSourceFile(fileName, input, languageVersion)
      }
      return compilerHost.getSourceFile(fileName, languageVersion)
    },
  }
}
