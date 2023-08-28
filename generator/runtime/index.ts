import { InterfaceDef, NamespaceDef, TypeAliasDef } from "../manualDefinitions.js"
import { Class, Concept, Define, Event, FactorioRuntimeApiJson } from "../FactorioRuntimeApiJson.js"
import { RWUsage } from "../read-write-types.js"
import ts from "typescript"
import { GenerationContext } from "../GenerationContext.js"
import {
  generateBuiltins,
  generateGlobalFunctions,
  generateGlobalObjects,
  preprocessBuiltins,
  preprocessGlobalFunctions,
  preprocessGlobalObjects,
} from "./others.js"
import { generateDefines, preprocessDefines } from "./defines.js"
import { generateEvents, preprocessEvents } from "./events.js"
import { generateClasses, preprocessClasses } from "./classes.js"
import { generateConcepts, preprocessConcepts } from "./concepts.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./index-types.js"

export class RuntimeGenerationContext extends GenerationContext<FactorioRuntimeApiJson> {
  stageName = "runtime"

  builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  concepts = new Map<string, Concept>(this.apiDocs.concepts.map((e) => [e.name, e]))
  globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))
  globalFunctions = new Set<string>(this.apiDocs.global_functions.map((e) => e.name))

  numericTypes = new Set<string>()

  conceptUsages = new Map<Concept, RWUsage>(this.apiDocs.concepts.map((e) => [e, RWUsage.None]))
  conceptUsagesToPropagate = new Map<Concept, RWUsage>()
  conceptReferencedBy = new Map<Concept, Set<Concept>>(this.apiDocs.concepts.map((e) => [e, new Set()]))
  // empty object = has separate read/write types, but not yet known form (may use default)
  conceptReadWriteTypes = new Map<Concept, { read: string | ts.TypeNode; write: string | ts.TypeNode }>()

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

  getOnlineDocUrl(reference: string): string {
    let relative_link: string
    if (this.builtins.has(reference)) {
      relative_link = "builtin-types.html#" + reference
    } else if (this.classes.has(reference)) {
      relative_link = `classes/${reference}.html`
    } else if (this.events.has(reference)) {
      relative_link = "events.html#" + reference
    } else if (reference.startsWith("defines.")) {
      relative_link = "defines.html#" + reference
    } else if (this.concepts.has(reference)) {
      relative_link = "concepts.html#" + reference
    } else if (this.globalObjects.has(reference)) {
      relative_link = ""
    } else if (this.globalFunctions.has(reference)) {
      relative_link = "auxiliary/libraries.html#new-functions"
    } else if (reference.includes(".")) {
      const className = reference.substring(0, reference.indexOf("."))
      const memberName = reference.substring(reference.indexOf(".") + 1)
      const operatorMatch = memberName.match(/^operator%20(.*)$/)?.[1]
      let referenceLink: string
      if (!operatorMatch) {
        referenceLink = reference
      } else if (operatorMatch === "#") {
        referenceLink = className + ".length_operator"
      } else if (operatorMatch === "[]") {
        referenceLink = className + ".index_operator"
      } else if (operatorMatch === "()") {
        referenceLink = className + ".call_operator"
      } else {
        this.warning(`Unknown operator ${operatorMatch}`)
        referenceLink = reference
      }
      return this.getOnlineDocUrl(className) + "#" + referenceLink
    } else {
      this.warning(`Could not get doc url for ${reference}`)
      relative_link = ""
    }
    return this.docUrlBase() + relative_link
  }

  preprocessAll(): void {
    preprocessBuiltins(this)
    preprocessGlobalObjects(this)
    preprocessGlobalFunctions(this)
    preprocessDefines(this)
    preprocessEvents(this)
    preprocessClasses(this)
    preprocessConcepts(this)
    preprocessIndexTypes(this)
  }
  generateAll(): void {
    generateBuiltins(this)
    generateGlobalObjects(this)
    generateGlobalFunctions(this)
    generateDefines(this)
    generateEvents(this)
    generateClasses(this)
    generateConcepts(this)
    generateIndexTypesFile(this)
  }
}
