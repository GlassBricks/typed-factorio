import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { createExtendsClause, toPascalCase } from "../genUtil.js"
import { mapParameterToProperty } from "../members.js"
import { analyzeType, RWUsage } from "../read-write-types.js"
import { sortByOrder } from "../util.js"
import { DeclarationType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./context.js"

export function preprocessEvents(context: RuntimeGenerationContext): void {
  for (const event of context.apiDocs.events) {
    context.references.set(event.name, getMappedEventName(event.name))
    for (const parameter of event.data) {
      analyzeType(context, parameter.type, RWUsage.Read)
    }
    const eventFilterName = event.description.match(/Lua[A-Za-z]+?EventFilter/)?.[0]
    if (eventFilterName) {
      analyzeType(context, eventFilterName, RWUsage.ReadWrite)
    }
  }
}

export function generateEvents(context: RuntimeGenerationContext): void {
  context.addFile("events", DeclarationType.Types, () => {
    const heritageClause = createExtendsClause("EventData")
    for (const event of context.apiDocs.events.sort(sortByOrder)) {
      const name = getMappedEventName(event.name)
      const existing = context.getInterfaceDef(name)
      const declaration = ts.factory.createInterfaceDeclaration(
        undefined,
        name,
        undefined,
        heritageClause,
        event.data.sort(sortByOrder).map((p) => {
          if (p.name === "name" && event.name !== "CustomInputEvent") {
            p.type = "typeof " + p.type + "." + event.name
          }
          return mapParameterToProperty(context, p, name, RWUsage.Read, existing).mainProperty
        })
      )
      addJsDoc(context, declaration, event, event.name, undefined)
      context.currentFile.add(declaration)
    }
  })
}

export function getMappedEventName(eventName: string): string {
  let name = toPascalCase(eventName)
  if (!name.endsWith("Event")) name += "Event"
  return name
}
