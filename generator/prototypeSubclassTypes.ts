import { RuntimeGenerationContext } from "./runtime"
import { Type } from "./FactorioRuntimeApiJson.js"
import { capitalize } from "./genUtil.js"
import ts from "typescript"

export const nameToToPrototypeType = {
  // hardcoded for now; could possibly instead get from prototype definitions, but this is unlikely to change
  achievement: "achievement",
  entity: "entity",
  equipment: "equipment",
  item: "item",
  EventFilter: "entity",
  Prototype: "prototype",
  get_history: "prototype",
} as const

const toIgnore = ["damage", "get_prototype_history", "GuiAnchor", "Noise", "LuaPrototypeBase"]

/**
 * For attributes of the `type : string` or `ghost_type : string` form,
 * try to map to a more specific prototype type, e.g. `EntityType`.
 */
export function getSpecificPrototypeTypeForTypeAttribute(
  context: RuntimeGenerationContext,
  sourceName: string,
  member: {
    name?: string
    description: string
  },
  hasManuallyDefinedType: boolean,
  type: Type,
): ts.TypeNode | undefined {
  if (
    hasManuallyDefinedType ||
    !(member.name === "type" || member.name === "ghost_type") ||
    type !== "string" ||
    member.description.includes("Name of the ")
  )
    return
  let thisName: string
  if (sourceName.includes(".")) {
    thisName = sourceName.split(".")[1]
  } else {
    thisName = sourceName
  }

  for (const [searchString, name] of Object.entries(nameToToPrototypeType)) {
    if (!(thisName.includes(capitalize(searchString)) || thisName === searchString)) {
      continue
    }
    const importName = capitalize(name) + "Type"
    context.currentFile.addImport("prototype", importName)
    return ts.factory.createTypeReferenceNode(importName)
  }
  if (toIgnore.some((t) => thisName.includes(t))) {
    return
  }

  context.warning(`Could not determine prototype subclass type for ${sourceName}`)
}
