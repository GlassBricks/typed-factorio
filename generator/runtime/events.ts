import ts from "typescript"
import { FactorioModule } from "../OutputFile.js"
import { addJsDoc } from "../documentation.js"
import { createExtendsClause, toPascalCase } from "../genUtil.js"
import { RWUsage } from "../types"
import { byOrder } from "../util.js"
import { recordUsage } from "./concept-usage-analysis"
import { RuntimeGenerationContext } from "./index.js"
import { mapParameterToProperty } from "./members.js"

export function preprocessEvents(context: RuntimeGenerationContext): void {
  for (const event of context.events.values()) {
    context.tsToFactorioType.set(event.name, getMappedEventName(event.name))
    for (const parameter of event.data) {
      recordUsage(context, parameter.type, RWUsage.Read)
    }
    if (event.filter) {
      recordUsage(context, event.filter, RWUsage.ReadWrite)
    }
  }
}

export function generateEvents(context: RuntimeGenerationContext): void {
  context.addFile("events", FactorioModule.Runtime, () => {
    const heritageClause = createExtendsClause("EventData")
    for (const event of context.events.values()) {
      const name = getMappedEventName(event.name)
      const existing = context.manualDefs.getDeclaration(name)
      const declaration = ts.factory.createInterfaceDeclaration(
        undefined,
        name,
        undefined,
        heritageClause,
        event.data.sort(byOrder).map((p) => {
          if (p.name === "name" && event.name !== "CustomInputEvent") {
            p.type = `typeof ${p.type as string}.${event.name}`
          }
          return mapParameterToProperty(context, p, name, RWUsage.Read, existing).mainProperty
        }),
      )
      const additions = event.filter
        ? {
            post: `Event filter: [${event.filter}](${event.filter}]`,
          }
        : undefined
      addJsDoc(context, declaration, event, event.name, additions)
      context.currentFile.add(declaration)
    }
  })
}

export function getMappedEventName(eventName: string): string {
  let name = toPascalCase(eventName)
  if (!name.endsWith("Event")) name += "Event"
  return name
}
