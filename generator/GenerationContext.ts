import chalk from "chalk"
import ts from "typescript"
import { ModuleType, OutputFile, OutputFileBuilder, OutputFileBuilderImpl } from "./OutputFile.js"
import { checkManualDefinitions, preprocessManualDefinitions, processManualDefinitions } from "./manualDefinitions.js"
import * as runtime from "./FactorioRuntimeApiJson.js"
import * as prototype from "./FactorioPrototypeApiJson.js"

export interface AnyApiJson {
  application: "factorio"
  stage: string
  api_version: 4
  application_version: string
}

export abstract class GenerationContext<A extends AnyApiJson = AnyApiJson> {
  // This is also a record of which types exist
  references = new Map<string, string>()

  addBefore = new Map<string, ts.Statement[]>()
  addAfter = new Map<string, ts.Statement[]>()
  addTo = new Map<string, ts.Statement[]>()

  hasWarnings = false

  public readonly manualDefs = processManualDefinitions(this.manualDefinitionsSource)

  constructor(
    public readonly apiDocs: A,
    public readonly manualDefinitionsSource: ts.SourceFile,
    public readonly checker: ts.TypeChecker
  ) {}

  abstract get stageName(): string

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

  addFile(fileName: string, moduleType: ModuleType, fn: () => void): void {
    if (this._currentFile) throw new Error("Nested addFile")
    const builder = new OutputFileBuilderImpl(this, fileName, moduleType)
    this._currentFile = builder
    fn()
    this._currentFile = undefined
    this.allFiles.push(builder.build())
  }

  getAllFiles(): OutputFile[] {
    return this.allFiles
  }

  abstract tryGetTypeOfReference(reference: string): runtime.Type | prototype.Type | undefined

  abstract getOnlineDocUrl(reference: string): string

  docUrlBase(): string {
    return `https://lua-api.factorio.com/${this.apiDocs.application_version}/`
  }

  protected abstract preprocessAll(): void
  protected abstract generateAll(): void

  private checkApiDocs() {
    for (const [k, v] of Object.entries({
      application: "factorio",
      api_version: 4,
      stage: this.stageName,
    })) {
      if (this.apiDocs[k as keyof AnyApiJson] !== v) {
        throw new Error(`Expected ${k}=${v}, got ${this.apiDocs[k as keyof AnyApiJson]}`)
      }
    }
  }

  generate(): OutputFile[] {
    this.checkApiDocs()
    this.preprocessAll()
    preprocessManualDefinitions(this)
    this.generateAll()
    checkManualDefinitions(this)
    return this.allFiles
    // return getGenerationResult(this)
  }
}
