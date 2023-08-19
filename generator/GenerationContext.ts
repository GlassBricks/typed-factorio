import chalk from "chalk"
import ts from "typescript"
import { Class, Concept, Define, Event, FactorioRuntimeApiJson } from "./FactorioRuntimeApiJson.js"
import { InterfaceDef, NamespaceDef, processManualDefinitions, TypeAliasDef } from "./manualDefinitions.js"
import { RWUsage } from "./read-write-types.js"
import { createComment, createNamespace, Modifiers } from "./genUtil.js"

type OutFileName =
  | "classes"
  | "concepts"
  | "defines"
  | "events"
  | "global-functions"
  | "global-objects"
  | "builtin-types"
  | "index-types"

type ModuleType = "namespace" | "global"

export class GenerationContext {
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

  addBefore = new Map<string, ts.Statement[]>()
  addAfter = new Map<string, ts.Statement[]>()
  addTo = new Map<string, ts.Statement[]>()

  conceptUsages = new Map<Concept, RWUsage>(this.apiDocs.concepts.map((e) => [e, RWUsage.None]))
  conceptUsagesToPropagate = new Map<Concept, RWUsage>()
  conceptReferencedBy = new Map<Concept, Set<Concept>>(this.apiDocs.concepts.map((e) => [e, new Set()]))
  conceptReadWriteTypes = new Map<Concept, { read: string | ts.TypeNode; write: string | ts.TypeNode }>()
  // ^: empty object = has separate read/write types, but not yet known form (may use default)

  hasWarnings: boolean = false

  namespaceName = "FactorioRuntime"

  private _currentFile: OutputFileBuilder | undefined
  get currentFile(): OutputFileBuilder {
    if (!this._currentFile) throw new Error("No current file")
    return this._currentFile
  }

  constructor(
    readonly apiDocs: FactorioRuntimeApiJson,
    readonly manualDefinitionsSource: ts.SourceFile,
    readonly checker: ts.TypeChecker
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application " + apiDocs.application)
    }
    if (apiDocs.api_version !== 4) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
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

  warning(...args: unknown[]): void {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }

  docUrlBase(): string {
    return `https://lua-api.factorio.com/${this.apiDocs.application_version}/`
  }

  createFile(fileName: OutFileName, moduleType: ModuleType, fn: () => void): OutputFile {
    if (this._currentFile) throw new Error("Nested createFile")
    const builder = new OutputFileBuilderImpl(this, fileName, moduleType)
    this._currentFile = builder
    fn()
    this._currentFile = undefined
    return builder.getResult()
  }
}

export interface OutputFileBuilder {
  fileName: OutFileName

  moduleType: ModuleType

  add(statement: ts.Statement): void

  // only if moduleType === "namespace"
  addGlobal(statement: ts.Statement): void
}

class OutputFileBuilderImpl implements OutputFileBuilder {
  private statements: ts.Statement[] = []
  private globalStatements: ts.Statement[] = []

  constructor(private context: GenerationContext, public fileName: OutFileName, public moduleType: ModuleType) {}

  add(statement: ts.Statement): this {
    const name = OutputFileBuilderImpl.getName(statement)
    if (name) {
      const addBefore = this.context.addBefore.get(name)
      if (addBefore) {
        this.statements.push(...addBefore)
        this.context.addBefore.delete(name)
      }
    }
    this.statements.push(statement)

    if (name) {
      const addAfter = this.context.addAfter.get(name)
      if (addAfter) {
        this.statements.push(...addAfter)
        this.context.addAfter.delete(name)
      }
    }
    return this
  }

  addGlobal(statement: ts.Statement) {
    this.globalStatements.push(statement)
  }

  private static getName(statement: ts.Statement) {
    let name: string | undefined
    if (
      ts.isInterfaceDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement) ||
      ts.isModuleDeclaration(statement)
    ) {
      name = statement.name.text
    } else if (ts.isVariableStatement(statement)) {
      name = (statement.declarationList.declarations[0].name as ts.Identifier).text
    }
    return name
  }

  getResult(): OutputFile {
    const addTo = this.context.addTo.get(this.fileName)
    if (addTo) {
      this.statements.push(...addTo)
      this.context.addTo.delete(this.fileName)
    }
    const result: ts.Statement[] = []
    result.push(createComment("* @noSelfInFile ", true))

    result.push(...this.globalStatements)

    if (this.moduleType === "namespace") {
      // wrap everything in `declare namespace`...
      result.push(createNamespace([Modifiers.declare], this.context.namespaceName, this.statements))
    } else {
      result.push(...this.statements)
    }

    return {
      name: this.fileName,
      statements: result,
    }
  }
}

export interface OutputFile {
  name: OutFileName
  statements: readonly ts.Statement[]
}
