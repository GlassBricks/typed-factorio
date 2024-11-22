import ts from "typescript"
import { FactorioModule, OutputFile, OutputFileBuilder } from "./OutputFile.js"
import { checkManualDefinitions, ManualDefinitions, processManualDefinitions } from "./ManualDefinitions"
import * as runtime from "./FactorioRuntimeApiJson.js"
import * as prototype from "./FactorioPrototypeApiJson.js"

export interface AnyApiJson {
  application: "factorio"
  stage: string
  api_version: 6
  application_version: string
}

export interface Options {
  readonly noLink: boolean
}

export function associateByName<T extends { name: string }>(arr: T[]): Map<string, T> {
  const map = new Map<string, T>()
  for (const item of arr) {
    map.set(item.name, item)
  }
  return map
}

export abstract class GenerationContext<A extends AnyApiJson = AnyApiJson> {
  // This is also a record of which types exist
  tsToFactorioType = new Map<string, string>()

  hasWarnings = false

  public readonly manualDefs: ManualDefinitions

  constructor(
    protected readonly apiDocs: A,
    public readonly manualDefsSource: ts.SourceFile,
    public readonly checker: ts.TypeChecker,
    public readonly options: Options,
  ) {
    this.manualDefs = processManualDefinitions(this.manualDefsSource)
  }

  abstract get stageName(): FactorioModule

  private _currentFile: OutputFileBuilder | undefined
  get currentFile(): OutputFileBuilder {
    if (!this._currentFile) throw new Error("No current file")
    return this._currentFile
  }

  private allFiles: OutputFile[] = []

  addFile(fileName: string, moduleType: FactorioModule, fn: () => void): void {
    if (this._currentFile) throw new Error("Nested addFile")
    const builder = new OutputFileBuilder(fileName, moduleType)
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

  protected abstract generateAll(): void

  private checkApiDocs() {
    for (const [k, v] of Object.entries({
      application: "factorio",
      api_version: 6,
      stage: this.stageName,
    })) {
      if (this.apiDocs[k as keyof AnyApiJson] !== v) {
        throw new Error(`Expected ${k}=${v}, got ${this.apiDocs[k as keyof AnyApiJson]}`)
      }
    }
  }

  warning(...args: unknown[]): void {
    console.error(...args)
    this.hasWarnings = true
  }

  generate(): OutputFile[] {
    this.checkApiDocs()
    this.generateAll()
    checkManualDefinitions(this)
    return this.allFiles
  }
}
