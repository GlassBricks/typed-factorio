import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { PrototypeConcept } from "../FactorioPrototypeApiJson.js"
import { addJsDoc } from "../documentation.js"
import { mapPrototypeConcept, typeToDeclaration } from "../types.js"
import { mapProperty } from "./properties.js"
import { sortByOrder } from "../util.js"

export function preprocessTypes(context: PrototypeGenerationContext): void {
  for (const type of context.apiDocs.types) {
    context.references.set(type.name, type.name)
  }
}

export function generateTypes(context: PrototypeGenerationContext): void {
  context.addFile("types", DeclarationType.Types, () => {
    for (const type of context.apiDocs.types.sort(sortByOrder)) {
      generateType(context, type)
    }
  })
}

function generateType(context: PrototypeGenerationContext, concept: PrototypeConcept): void {
  if (concept.type == "builtin") {
    return generateBuiltinType(context, concept)
  }

  const existing = context.getInterfaceDef(concept.name)

  const properties = concept.properties?.sort(sortByOrder).flatMap((p) => mapProperty(context, p, concept.name))

  const { type, description } = mapPrototypeConcept(context, concept.type, properties, existing)

  if (concept.parent || concept.abstract || concept.inline) {
    // context.warning("TODO")
  }

  const declaration = typeToDeclaration(type, concept.name)

  if (description) {
    concept.description += `\n\n${description}`
  }
  addJsDoc(context, declaration, concept, concept.name)

  context.currentFile.add(declaration)
}

function generateBuiltinType(context: PrototypeGenerationContext, concept: PrototypeConcept) {
  const name = concept.name
  if (name == "string" || name == "number" || name == "boolean") return
  const existing = context.getInterfaceDef(name)
  if (!existing) {
    context.warning(`No existing definition for builtin ${name}`)
    return
  }
  context.currentFile.add(addJsDoc(context, existing.node, concept, name, undefined))
}
