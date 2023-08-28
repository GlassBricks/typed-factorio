import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { PrototypeConcept } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc } from "../documentation.js"

export function preprocessTypes(context: PrototypeGenerationContext): void {
  for (const type of context.apiDocs.types) {
    context.references.set(type.name, type.name)
  }
}

export function generateTypes(context: PrototypeGenerationContext): void {
  context.addFile("types", DeclarationType.Types, () => {
    for (const type of context.apiDocs.types) {
      generateType(context, type)
    }
  })
}

function generateType(context: PrototypeGenerationContext, type: PrototypeConcept): void {
  const members: any[] = []

  const intf = ts.factory.createInterfaceDeclaration(undefined, type.name, undefined, undefined, members)

  addJsDoc(context, intf, type, type.name)
  context.currentFile.add(intf)
}
