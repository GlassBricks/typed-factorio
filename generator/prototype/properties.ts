import { PrototypeGenerationContext } from "./index.js"
import { Property } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { mapPrototypeType } from "../types.js"
import { Tokens } from "../genUtil.js"
import { addJsDoc } from "../documentation.js"

export function mapProperty(
  context: PrototypeGenerationContext,
  property: Property,
  parentName: string
): ts.TypeElement[] {
  const { type, description } = mapPrototypeType(context, property.type)

  const mainProperty = ts.factory.createPropertySignature(
    undefined,
    property.name,
    property.optional ? Tokens.question : undefined,
    type
  )
  if (description) {
    property.description += `\n\n${description}`
  }
  addJsDoc(context, mainProperty, property, parentName + "." + property.name)

  const result = [mainProperty]

  if (property.alt_name) {
    result.push(
      ts.factory.createPropertySignature(
        undefined,
        property.alt_name,
        property.optional ? Tokens.question : undefined,
        type
      )
    )
  }

  return result
}
