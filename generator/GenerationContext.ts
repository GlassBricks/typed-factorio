import chalk from "chalk"
import ts from "typescript"
import { ModuleType, OutputFile, OutputFileBuilder, OutputFileBuilderImpl } from "./OutputFile.js"
import { checkManualDefinitions, processManualDefinitions } from "./manualDefinitions.js"
import * as runtime from "./FactorioRuntimeApiJson.js"
import * as prototype from "./FactorioPrototypeApiJson.js"

export interface AnyApiJson {
  application: "factorio"
  stage: string
  api_version: 5
  application_version: string
}

export interface Options {
  readonly noLink: boolean
}

export abstract class GenerationContext<A extends AnyApiJson = AnyApiJson> {
  // This is also a record of which types exist
  references = new Map<string, string>()

  hasWarnings = false

  public readonly manualDefs = processManualDefinitions(this.manualDefinitionsSource)
  constructor(
    public readonly apiDocs: A,
    public readonly manualDefinitionsSource: ts.SourceFile,
    public readonly checker: ts.TypeChecker,
    public readonly options: Options,
  ) {}

  abstract get stageName(): string

  private _currentFile: OutputFileBuilder | undefined
  get currentFile(): OutputFileBuilder {
    if (!this._currentFile) throw new Error("No current file")
    return this._currentFile
  }

  private allFiles: OutputFile[] = []

  addFile(fileName: string, moduleType: ModuleType, fn: () => void): void {
    if (this._currentFile) throw new Error("Nested addFile")
    const builder = new OutputFileBuilderImpl(this.manualDefs, fileName, moduleType)
    this._currentFile = builder
    fn()
    this._currentFile = undefined
    this.allFiles.push(builder.build())
  }

  abstract tryGetTypeOfReference(reference: string): runtime.Type | prototype.Type | undefined

  abstract getOnlineDocUrl(reference: string): string

  docUrlBase(): string {
    if (this.options.noLink) return "https://lua-api.factorio.com/latest/"
    return `https://lua-api.factorio.com/${this.apiDocs.application_version}/`
  }

  protected abstract preprocessAll(): void
  protected abstract generateAll(): void

  private checkApiDocs() {
    for (const [k, v] of Object.entries({
      application: "factorio",
      api_version: 5,
      stage: this.stageName,
    })) {
      if (this.apiDocs[k as keyof AnyApiJson] !== v) {
        throw new Error(`Expected ${k}=${v}, got ${this.apiDocs[k as keyof AnyApiJson]}`)
      }
    }
  }

  warning(...args: unknown[]): void {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }

  warnIfHasVisibility(obj: { visibility?: string[] }): void {
    if (obj.visibility && obj.visibility.length > 1) {
      this.warning("Visibility not implemented yet")
    }
  }

  generate(): OutputFile[] {
    this.checkApiDocs()
    this.preprocessAll()
    this.generateAll()
    checkManualDefinitions(this)
    return this.allFiles
  }
}
