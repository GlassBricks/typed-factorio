import {
  Class,
  Concept,
  Define,
  Event,
  FactorioRuntimeApiJson,
  Method,
  Parameter,
  Type,
} from "../FactorioRuntimeApiJson.js"
import { associateByName, GenerationContext } from "../GenerationContext.js"
import { generateGlobalFunctions, preprocessGlobalFunctions } from "./others.js"
import { generateDefines, preprocessDefines } from "./defines.js"
import { generateEvents, preprocessEvents } from "./events.js"
import { generateClasses, preprocessClasses } from "./classes.js"
import { generateConcepts, preprocessConcepts } from "./concepts.js"
import { generateIndexTypesFile, preprocessIndexTypes } from "./index-types.js"
import { generateGlobalObjects, preprocessGlobalObjects } from "./global-objects.js"
import { FactorioModule } from "../OutputFile"
import { addPropertiesToConcept, manualDefToRuntimeConcept, preprocessTypesWithManualDefs } from "../added-types"
import { ConceptUsageAnalysis, finalizeConceptUsageAnalysis } from "./concept-usage-analysis"
import { byOrder } from "../util"

export class RuntimeGenerationContext extends GenerationContext<FactorioRuntimeApiJson> {
  stageName = FactorioModule.Runtime

  defines = new Map<string, Define>() // set by preprocessDefines
  rootDefines: Define[] = this.apiDocs.defines.sort(byOrder)
  events!: Map<string, Event>
  classes!: Map<string, Class>
  concepts!: Map<string, Concept>
  globalObjects!: Map<string, Parameter>
  globalFunctions!: Map<string, Method>

  numericTypes = new Set<string>()

  conceptUsageAnalysis!: ConceptUsageAnalysis

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
      relative_link = `concepts/${reference}.html`
    } else if (this.globalObjects.has(reference)) {
      relative_link = "index-runtime.html"
    } else if (this.globalFunctions.has(reference)) {
      relative_link = "auxiliary/libraries.html#new-functions"
    } else if (reference.includes(".")) {
      const dotIndex = reference.indexOf(".")
      const className = reference.substring(0, dotIndex)
      const memberName = reference.substring(dotIndex + 1)
      if (this.classes.has(className)) {
        return this.getOnlineDocUrl(className) + "#" + memberName
      }
      if (this.concepts.has(className)) {
        relative_link = `concepts/${reference}.html`
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

  private modifyBlueprintEntityConcept() {
    if (this.apiDocs.application_version !== "2.0.62") {
      this.warning("TODO: check if manual defs is still needed", this.apiDocs.application_version)
    }
    const bpEntity = this.concepts.get("BlueprintEntity")!.type
    if (typeof bpEntity !== "object" || bpEntity.complex_type !== "table") {
      this.warning(`BlueprintEntity concept is not a table`)
      return
    }
    bpEntity.variant_parameter_groups!.push({
      name: "rocket-silo",
      description: "",
      order: 1000,
      manuallyAdded: true,
      parameters: [
        {
          name: "control_behavior",
          description: "",
          order: 1,
          type: "RocketSiloBlueprintControlBehavior",
          optional: true,
        },
      ],
    })

    const type = this.concepts.get("TechnologyModifier")!.type
    if (typeof type !== "object" || type.complex_type !== "table") {
      this.warning(`TechnologyModifier concept is not a table`)
      return
    }
    const problemType = type.variant_parameter_groups!.find((group) => group.name === "vehicle-logistics")!
    problemType.name = "train-braking-force-bonus"
    problemType.parameters[0] = {
      name: "modifier",
      description: "",
      order: 1,
      type: "double",
      optional: false,
    }
  }

  generateAll(): void {
    this.events = associateByName(preprocessTypesWithManualDefs(this, this.apiDocs.events, "events"))
    this.classes = associateByName(preprocessTypesWithManualDefs(this, this.apiDocs.classes, "classes"))
    const concepts = preprocessTypesWithManualDefs(
      this,
      this.apiDocs.concepts,
      "concepts",
      manualDefToRuntimeConcept,
      addPropertiesToConcept,
    )
    this.concepts = associateByName(concepts)

    this.modifyBlueprintEntityConcept()

    this.globalObjects = associateByName(this.apiDocs.global_objects)
    this.globalFunctions = associateByName(this.apiDocs.global_functions)

    this.conceptUsageAnalysis = new ConceptUsageAnalysis(concepts)

    preprocessGlobalObjects(this)
    preprocessGlobalFunctions(this)
    preprocessDefines(this)
    preprocessEvents(this)
    preprocessClasses(this)
    preprocessIndexTypes(this)
    preprocessConcepts(this)
    finalizeConceptUsageAnalysis(this)

    generateGlobalObjects(this)
    generateGlobalFunctions(this)
    generateDefines(this)
    generateEvents(this)
    generateClasses(this)
    generateConcepts(this)
    generateIndexTypesFile(this)
  }
}
