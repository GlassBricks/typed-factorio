import { GenerationContext } from "./GenerationContext"
import type * as runtime from "./FactorioRuntimeApiJson"
import type * as prototype from "./FactorioPrototypeApiJson"
import { addJsDoc } from "./documentation"

export function generateBuiltinType(
  context: GenerationContext,
  concept: runtime.Concept | prototype.PrototypeConcept,
): void {
  const name = concept.name
  if (name === "boolean" || name === "string" || name === "number") return
  const existing = context.manualDefs.getDeclaration(name)
  if (!existing) {
    context.warning(`No existing definition for builtin ${name}`)
    return undefined
  }
  addJsDoc(context, existing.node, concept, name)
  context.currentFile.add(existing.node)
}
