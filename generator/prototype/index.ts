import { FactorioPrototypeApiJson, Property, Prototype, PrototypeConcept, Type } from "../FactorioPrototypeApiJson.js"
import { GenerationContext } from "../GenerationContext.js"
import { generatePrototypes, preprocessPrototypes } from "./prototypes.js"
import { generateTypes, preprocessTypes } from "./concepts.js"

export class PrototypeGenerationContext extends GenerationContext<FactorioPrototypeApiJson> {
  stageName = "prototype"

  prototypes = new Map<string, Prototype>(this.apiDocs.prototypes.map((e) => [e.name, e]))
  types = new Map<string, PrototypeConcept>(this.apiDocs.types.map((e) => [e.name, e]))

  prototypeProperties = new Map<string, Map<string, Property>>(
    this.apiDocs.prototypes.map((e) => [e.name, new Map(e.properties.map((p) => [p.name, p]))])
  )
  conceptProperties = new Map<string, Map<string, Property>>(
    this.apiDocs.types.map((e) => [e.name, new Map(e.properties?.map((p) => [p.name, p]))])
  )

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
      return this.getOnlineDocUrl(className) + "#" + reference
    } else {
      this.warning(`Could not get doc url for ${reference}`)
      relative_link = ""
    }

    return this.docUrlBase() + relative_link
  }
  preprocessAll(): void {
    preprocessPrototypes(this)
    preprocessTypes(this)
  }

  generateAll(): void {
    generatePrototypes(this)
    generateTypes(this)
  }
}
