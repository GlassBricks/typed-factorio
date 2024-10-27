import {
  Class,
  Concept,
  Define,
  Event,
  FactorioRuntimeApiJson,
  TableType,
  TupleType,
  Type,
} from "../FactorioRuntimeApiJson.js"
import { RWUsage } from "../read-write-types.js"
import ts from "typescript"
import { GenerationContext } from "../GenerationContext.js"
import { generateGlobalFunctions, preprocessGlobalFunctions } from "./others.js"
import { generateDefines, preprocessDefines } from "./defines.js"
import { generateEvents, preprocessEvents } from "./events.js"
import { generateClasses, preprocessClasses } from "./classes.js"
import { generateConcepts, preprocessConcepts } from "./concepts.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./index-types.js"
import { generateGlobalObjects, preprocessGlobalObjects } from "./global-objects.js"

export class RuntimeGenerationContext extends GenerationContext<FactorioRuntimeApiJson> {
  stageName = "runtime"

  defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  concepts = new Map<string, Concept>(this.apiDocs.concepts.map((e) => [e.name, e]))
  globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))
  globalFunctions = new Set<string>(this.apiDocs.global_functions.map((e) => e.name))

  numericTypes = new Set<string>()

  conceptUsageAnalysis = new ConceptUsageAnalysis(this.apiDocs.concepts)

  tryGetTypeOfReference(reference: string): Type | undefined {
    return this.concepts.get(reference)?.type
  }

  getOnlineDocUrl(reference: string): string {
    let relative_link: string
    if (this.classes.has(reference)) {
      relative_link = `classes/${reference}.html`
    } else if (this.events.has(reference)) {
      relative_link = "events.html#" + reference
    } else if (reference.match(/^defines(\.|$)/)) {
      relative_link = "defines.html#" + reference
    } else if (this.concepts.has(reference)) {
      relative_link = "concepts.html#" + reference
    } else if (this.globalObjects.has(reference)) {
      relative_link = "index-runtime.html"
    } else if (this.globalFunctions.has(reference)) {
      relative_link = "auxiliary/libraries.html#new-functions"
    } else if (reference.includes(".")) {
      const className = reference.substring(0, reference.indexOf("."))
      if (this.classes.has(className)) {
        return this.getOnlineDocUrl(className) + "#" + reference
      }
      if (this.concepts.has(className)) {
        relative_link = "concepts.html#" + reference
        // concepts.html#Concept.property
      } else {
        this.warning(`unknown dot reference ${reference}`)
        relative_link = ""
      }
    } else {
      this.warning(`Could not get doc url for ${reference}`)
      relative_link = ""
    }
    return this.docUrlBase() + relative_link
  }

  preprocessAll(): void {
    preprocessGlobalObjects(this)
    preprocessGlobalFunctions(this)
    preprocessDefines(this)
    preprocessEvents(this)
    preprocessClasses(this)
    preprocessConcepts(this)
    preprocessIndexTypes(this)
  }
  generateAll(): void {
    generateGlobalObjects(this)
    generateGlobalFunctions(this)
    generateDefines(this)
    generateEvents(this)
    generateClasses(this)
    generateConcepts(this)
    generateIndexTypesFile(this)
  }
}

class ConceptUsageAnalysis {
  conceptUsages
  conceptUsagesToPropagate
  conceptReferencedBy
  conceptReadWriteTypes
  tableOrArrayConcepts
  constructor(private concepts: Concept[]) {
    this.conceptUsages = new Map<Concept, RWUsage>(this.concepts.map((e) => [e, RWUsage.None]))

    this.conceptUsagesToPropagate = new Map<Concept, RWUsage>()
    this.conceptReferencedBy = new Map<Concept, Set<Concept>>(this.concepts.map((e) => [e, new Set()]))
    // empty object = has separate read/write types, but not yet known form (may use default)
    this.conceptReadWriteTypes = new Map<Concept, { read: string | ts.TypeNode; write: string | ts.TypeNode }>()

    this.tableOrArrayConcepts = new Map<Concept, { table: TableType; array: TupleType }>()
  }
}
