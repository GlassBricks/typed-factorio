import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import GenerationContext from "../GenerationContext"
import { createExtendsClause, toPascalCase } from "../genUtil"
import { mapParameterToProperty } from "../members"
import { sortByOrder } from "../util"

export function preprocessEvents(context: GenerationContext) {
  for (const event of context.apiDocs.events) {
    context.typeNames[event.name] = getMappedEventName(event.name)
  }
}

export function generateEvents(context: GenerationContext): DefinitionsFile {
  const statements = new StatementsList(context, "events")
  const heritageClause = createExtendsClause("EventData")
  for (const event of context.apiDocs.events.sort(sortByOrder)) {
    const name = getMappedEventName(event.name)
    const existing = context.manualDefinitions[name]
    if (existing && existing.kind !== "interface") {
      throw new Error(`Manual definition for ${name} should be a interface, got ${ts.SyntaxKind[existing.node.kind]}`)
    }
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
        return mapParameterToProperty(context, p, name, existing)
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
