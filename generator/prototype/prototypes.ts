import { PrototypeGenerationContext } from "./index.js"
import { DeclarationType } from "../OutputFile.js"
import { sortByOrder } from "../util.js"
import { Prototype } from "../FactorioPrototypeApiJson.js"
import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { Modifiers } from "../genUtil.js"

export function preprocessPrototypes(context: PrototypeGenerationContext): void {
  for (const prototype of context.apiDocs.prototypes.sort(sortByOrder)) {
    context.references.set(prototype.name, prototype.name)
  }
}

export function generatePrototypes(context: PrototypeGenerationContext): void {
  context.addFile("prototypes", DeclarationType.Types, () => {
    for (const prototype of context.apiDocs.prototypes.sort(sortByOrder)) {
      generatePrototype(context, prototype)
    }
  })
}

function generatePrototype(context: PrototypeGenerationContext, prototype: Prototype): void {
  const members: ts.TypeElement[] = []

  const heritageClauses = getHeritageClauses(context, prototype)

  const intf = ts.factory.createInterfaceDeclaration(
    [Modifiers.export],
    prototype.name,
    undefined,
    heritageClauses,
    members
  )

  addJsDoc(context, intf, prototype, prototype.name)
  context.currentFile.add(intf)
}

function getHeritageClauses(
  context: PrototypeGenerationContext,
  prototype: Prototype
): ts.HeritageClause[] | undefined {
  if (!prototype.parent) return
  const parentPrototype = context.prototypes.get(prototype.parent)
  if (!parentPrototype) {
    context.warning("Unknown parent prototype: " + prototype.parent)
    return
  }

  if (parentPrototype.typename) {
    return [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("OmitType"), [
          ts.factory.createTypeReferenceNode(parentPrototype.name),
        ]),
      ]),
    ]
  }

  return [
    ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(prototype.parent), undefined),
    ]),
  ]
}
