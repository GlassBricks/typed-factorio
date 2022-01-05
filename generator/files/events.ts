import ts from "typescript"
import { sortByOrder } from "../util"
import DefinitionsGenerator from "../DefinitionsGenerator"

export default function generateEvents(generator: DefinitionsGenerator) {
  const statements = generator.newStatements()
  const heritageClause = ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
    ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("EventData"), undefined),
  ])
  for (const event of generator.apiDocs.events.sort(sortByOrder)) {
    const name = DefinitionsGenerator.getMappedEventName(event.name)
    const existing = generator.manualDefinitions[name]
    if (existing && existing.kind !== "interface") {
      throw new Error(`Manual definition for ${name} should be a interface, got ${ts.SyntaxKind[existing.node.kind]}`)
    }
    const declaration = ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      name,
      undefined,
      [heritageClause],
      event.data.sort(sortByOrder).map((p) => {
        if (p.name === "name" && event.name !== "CustomInputEvent") {
          p.type = "typeof " + p.type + "." + event.name
        }
        return generator.mapParameterToProperty(p, name, existing)
      })
    )
    generator.addJsDoc(declaration, event, event.name)
    statements.add(declaration)
  }

  generator.addFile("events", statements)
}
