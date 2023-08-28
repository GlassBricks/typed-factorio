import chalk from "chalk"
import ts from "typescript"
import { DeclarationType, OutputFile, OutputFileBuilder, OutputFileBuilderImpl } from "./OutputFile.js"

export interface AnyApiJson {
  application: "factorio"
  stage: string
  api_version: 4
}
export function checkApiJson(actual: AnyApiJson, expected: AnyApiJson): void {
  for (const [k, v] of Object.entries(expected)) {
    if (actual[k as keyof AnyApiJson] !== v) {
      throw new Error(`Expected ${k}=${v}, got ${actual[k as keyof AnyApiJson]}`)
    }
  }
}
export abstract class GenerationContext {
  addBefore = new Map<string, ts.Statement[]>()
  addAfter = new Map<string, ts.Statement[]>()
  addTo = new Map<string, ts.Statement[]>()

  hasWarnings = false

  abstract apiDocs: AnyApiJson
  abstract readonly manualDefinitionsSource: ts.SourceFile | undefined

  get stageName(): string {
    return this.apiDocs.stage
  }

  protected constructor(readonly checker: ts.TypeChecker) {}

  private _currentFile: OutputFileBuilder | undefined
  get currentFile(): OutputFileBuilder {
    if (!this._currentFile) throw new Error("No current file")
    return this._currentFile
  }

  private allFiles: OutputFile[] = []

  warning(...args: unknown[]): void {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }

  addFile(fileName: string, decType: DeclarationType, fn: () => void): void {
    if (this._currentFile) throw new Error("Nested addFile")
    const builder = new OutputFileBuilderImpl(this, fileName, decType)
    this._currentFile = builder
    fn()
    this._currentFile = undefined
    this.allFiles.push(builder.build())
  }

  getAllFiles(): OutputFile[] {
    return this.allFiles
  }
}
