import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import GenerationContext from "../GenerationContext"
import { createExtendsClause, toPascalCase } from "../genUtil"
import { mapParameterToProperty } from "../members"
import { analyzeType, RWUsage } from "../read-write-types"
import { sortByOrder } from "../util"

export function preprocessEvents(context: GenerationContext) {
  for (const event of context.apiDocs.events) {
    context.typeNames[event.name] = getMappedEventName(event.name)
    for (const parameter of event.data) {
      analyzeType(context, parameter.type, RWUsage.Read)
    }
  }
}

export function generateEvents(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "events")
  const heritageClause = createExtendsClause("EventData")
  for (const event of context.apiDocs.events.sort(sortByOrder)) {
    const name = getMappedEventName(event.name)
    const existing = context.getInterfaceDef(name)
    const declaration = ts.factory.createInterfaceDeclaration(
      undefined,
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
    statements.add(declaration)
  }

  return statements.getResult()
}

export function getMappedEventName(eventName: string): string {
  let name = toPascalCase(eventName)
  if (!name.endsWith("Event")) name += "Event"
  return name
}
