import { InterfaceDef, NamespaceDef, processManualDefinitions, TypeAliasDef } from "../manualDefinitions.js"
import { Class, Concept, Define, Event, FactorioRuntimeApiJson } from "../FactorioRuntimeApiJson.js"
import { RWUsage } from "../read-write-types.js"
import ts from "typescript"
import { checkApiJson, GenerationContext } from "../GenerationContext.js"

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
