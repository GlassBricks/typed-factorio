import chalk from "chalk"
import ts from "typescript"
import { Class, Concept, Define, Event, FactorioRuntimeApiJson } from "./FactorioRuntimeApiJson.js"
import { InterfaceDef, NamespaceDef, processManualDefinitions, TypeAliasDef } from "./manualDefinitions.js"
import { RWUsage } from "./read-write-types.js"
import { ModuleType, OutputFile, OutputFileBuilder, OutputFileBuilderImpl } from "./OutputFile.js"
import { FactorioPrototypeApiJson } from "./FactorioPrototypeApiJson.js"

interface AnyApiJson {
  application: "factorio"
  stage: string
  api_version: 4
}
function checkApiJson(actual: AnyApiJson, expected: AnyApiJson) {
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
  abstract readonly stageName: string
  abstract readonly manualDefinitionsSource: ts.SourceFile | undefined

  protected constructor(readonly checker: ts.TypeChecker) {}

  private _currentFile: OutputFileBuilder | undefined
  get currentFile(): OutputFileBuilder {
    if (!this._currentFile) throw new Error("No current file")
    return this._currentFile
  }

  warning(...args: unknown[]): void {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }

  createFile(fileName: string, moduleType: ModuleType, fn: () => void): OutputFile {
    if (this._currentFile) throw new Error("Nested createFile")
    const builder = new OutputFileBuilderImpl(this, fileName, moduleType)
    this._currentFile = builder
    fn()
    this._currentFile = undefined
    return builder.getResult()
  }
}

export class RuntimeGenerationContext extends GenerationContext {
  public readonly _manualDefinitions = processManualDefinitions(this.manualDefinitionsSource)

  builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  concepts = new Map<string, Concept>(this.apiDocs.concepts.map((e) => [e.name, e]))
  globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))
  globalFunctions = new Set<string>(this.apiDocs.global_functions.map((e) => e.name))

  numericTypes = new Set<string>()
  // This is also a record of which types exist
  references = new Map<string, string>()

  conceptUsages = new Map<Concept, RWUsage>(this.apiDocs.concepts.map((e) => [e, RWUsage.None]))
  conceptUsagesToPropagate = new Map<Concept, RWUsage>()
  conceptReferencedBy = new Map<Concept, Set<Concept>>(this.apiDocs.concepts.map((e) => [e, new Set()]))
  conceptReadWriteTypes = new Map<Concept, { read: string | ts.TypeNode; write: string | ts.TypeNode }>()
  // ^: empty object = has separate read/write types, but not yet known form (may use default)

  stageName = "runtime"

  constructor(
    readonly apiDocs: FactorioRuntimeApiJson,
    readonly manualDefinitionsSource: ts.SourceFile,
    checker: ts.TypeChecker
  ) {
    super(checker)
    checkApiJson(apiDocs, {
      application: "factorio",
      api_version: 4,
      stage: "runtime",
    })
  }

  getInterfaceDef(name: string): InterfaceDef | TypeAliasDef | undefined {
    const result = this._manualDefinitions[name]
    if (!result) return
    if (result.kind !== "interface" && result.kind !== "type") {
      throw new Error(`Existing definition for ${name} is not an interface`)
    }
    return result
  }

  getNamespaceDef(name: string): NamespaceDef | undefined {
    const result = this._manualDefinitions[name]
    if (!result) return
    if (result.kind !== "namespace") {
      throw new Error(`Existing definitions for ${name} is not a namespace`)
    }
    return result
  }
  docUrlBase(): string {
    return `https://lua-api.factorio.com/${this.apiDocs.application_version}/`
  }
}

export class PrototypeGenerationContext extends GenerationContext {
  stageName = "prototype"
  manualDefinitionsSource = undefined
  constructor(readonly apiDocs: FactorioPrototypeApiJson, checker: ts.TypeChecker) {
    super(checker)
    checkApiJson(apiDocs, {
      application: "factorio",
      api_version: 4,
      stage: "prototype",
    })
  }
}
