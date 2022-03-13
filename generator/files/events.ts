import ts from "typescript"
import { sortByOrder } from "../util"
import DefinitionsGenerator from "../DefinitionsGenerator"
import { createExtendsClause, toPascalCase } from "../genUtil"

export function preprocessEvents(generator: DefinitionsGenerator) {
  for (const event of generator.apiDocs.events) {
    generator.typeNames[event.name] = getMappedEventName(event.name)
    for (const parameter of event.data) {
      generator.mapTypeBasic(parameter.type, true, false)
    }
  }
}

export function generateEvents(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  const heritageClause = createExtendsClause("EventData")
  for (const event of generator.apiDocs.events.sort(sortByOrder)) {
    const name = getMappedEventName(event.name)
    const existing = generator.manualDefinitions[name]
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
        return generator.mapParameterToProperty(p, name, true, false, existing)
      })
    )
    generator.addJsDoc(declaration, event, event.name)
    statements.add(declaration)
  }

  generator.addFile("events", statements)
}

export function getMappedEventName(eventName: string): string {
  let name = toPascalCase(eventName)
  if (!name.endsWith("Event")) name += "Event"
  return name
}
