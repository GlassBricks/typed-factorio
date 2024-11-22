import { FactorioPrototypeApiJson, Property, Prototype, PrototypeConcept, Type } from "../FactorioPrototypeApiJson.js"
import { GenerationContext } from "../GenerationContext.js"
import { generatePrototypes, preprocessPrototypes } from "./prototypes.js"
import { generateTypes, preprocessTypes } from "./concepts.js"
import { FactorioModule } from "../OutputFile"
import { manualDefToPrototypeConcept, preprocessTypesWithManualDefs } from "../added-types"

export class PrototypeGenerationContext extends GenerationContext<FactorioPrototypeApiJson> {
  stageName = FactorioModule.Prototype

  prototypes!: Map<string, Prototype>
  types!: Map<string, PrototypeConcept>

  prototypeProperties = new Map<string, Map<string, Property>>(
    this.apiDocs.prototypes.map((e) => [e.name, new Map(e.properties.map((p) => [p.name, p]))]),
  )
  conceptProperties = new Map<string, Map<string, Property>>(
    this.apiDocs.types.map((e) => [e.name, new Map(e.properties?.map((p) => [p.name, p]))]),
  )

  inlineConceptReferences = new Map<string, string>()
  hasInnerStructType = new Set<string>()

  tryGetTypeOfReference(reference: string): Type | undefined {
    return this.types.get(reference)?.type
  }

  getOnlineDocUrl(reference: string): string {
    let relative_link: string
    if (this.prototypes.has(reference)) {
      relative_link = `prototypes/${reference}.html`
    } else if (this.types.has(reference)) {
      relative_link = `types/${reference}.html`
    } else if (reference.includes(".")) {
      const className = reference.substring(0, reference.indexOf("."))
      const memberName = reference.substring(reference.indexOf(".") + 1)
      return this.getOnlineDocUrl(className) + "#" + memberName
    } else {
      this.warning(`Could not get doc url for ${reference}`)
      relative_link = ""
    }

    return this.docUrlBase() + relative_link
  }

  generateAll(): void {
    const prototypes = preprocessTypesWithManualDefs(this, this.apiDocs.prototypes, "prototypes")
    const types = preprocessTypesWithManualDefs(this, this.apiDocs.types, "types", manualDefToPrototypeConcept)
    this.prototypes = new Map(prototypes.map((e) => [e.name, e]))
    this.types = new Map(types.map((e) => [e.name, e]))

    preprocessPrototypes(this)
    preprocessTypes(this)
    generatePrototypes(this)
    generateTypes(this)
  }
}
