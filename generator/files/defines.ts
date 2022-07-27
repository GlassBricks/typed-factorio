import ts from "typescript"
import { DefinitionsFile, StatementsList } from "../DefinitionsFile"
import { addJsDoc } from "../documentation"
import { Define } from "../FactorioApiJson"
import GenerationContext from "../GenerationContext"
import { createConst, createNamespace, Modifiers, Types } from "../genUtil"
import { AnyDef } from "../manualDefinitions"
import { sortByOrder } from "../util"
import { getMappedEventName } from "./events"

export function preprocessDefines(context: GenerationContext) {
  const addDefine = (define: Define, parent: string) => {
    const name = parent + (parent ? "." : "") + define.name
    context.typeNames[name] = name
    context.defines.set(name, define)
    if (define.values) {
      for (const value of define.values) {
        const valueName = name + "." + value.name
        context.typeNames[valueName] = valueName
      }
    }
    if (define.subkeys) {
      for (const subkey of define.subkeys) {
        addDefine(subkey, name)
      }
    }
  }
  addDefine(createRootDefine(context), "")
}

export function generateDefines(context: GenerationContext): DefinitionsFile {
  const [defines] = generateDefinesDeclaration(createRootDefine(context), "", context.getNamespaceDef("defines"), [
    Modifiers.declare,
  ])
  return new StatementsList(context, "defines").add(defines).getResult()

  function generateEventsDefine(define: Define) {
    // namespace events { const member: EventId<Id> }
    const members = define.values!.sort(sortByOrder).map((m) => {
      const eventType = getMappedEventName(m.name)
      const typeArguments = [ts.factory.createTypeReferenceNode(eventType)]
      const event = context.events.get(m.name)!
      const eventFilterName = event.description.match(/Lua[A-Za-z]+?EventFilter/)?.[0]
      if (eventFilterName) {
        typeArguments.push(ts.factory.createTypeReferenceNode(eventFilterName))
      }

      let description = `Event type: {@link ${eventType}}`
      if (eventFilterName) {
        description += `\nEvent filter: {@link ${eventFilterName}}`
      }

      const statement = createConst(m.name, ts.factory.createTypeReferenceNode("EventId", typeArguments))
      return addJsDoc(context, statement, { description }, undefined, undefined)
    })
    const namespace = createNamespace(undefined, define.name, members)

    // type events = typeof events[keyof typeof events]
    const typeofExp = ts.factory.createExpressionWithTypeArguments(
      ts.factory.createTypeOfExpression(ts.factory.createIdentifier(define.name)),
      undefined
    )
    const keyofTypeof = ts.factory.createTypeOperatorNode(ts.SyntaxKind.KeyOfKeyword, typeofExp)
    const type = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      "events",
      undefined,
      ts.factory.createIndexedAccessTypeNode(typeofExp, keyofTypeof)
    )
    return [namespace, type]
  }

  function generateDefinesDeclaration(
    define: Define,
    parent: string,
    existing: AnyDef | undefined,
    modifiers?: ts.Modifier[]
  ): ts.Statement[] {
    let declarations: ts.Statement[]
    const thisPath = parent + (parent ? "." : "") + define.name
    if (define.values) {
      if (thisPath === "defines.events") {
        declarations = generateEventsDefine(define)
      } else {
        if (existing && existing.kind !== "enum") {
          throw new Error(
            `Manual definition for ${thisPath} should be a enum, got ${ts.SyntaxKind[existing.node.kind]}`
          )
        }
        const members = define.values
          .sort(sortByOrder)
          .map((m, i) =>
            addJsDoc(
              context,
              ts.factory.createEnumMember(
                m.name,
                existing?.annotations.numericEnum ? ts.factory.createNumericLiteral(i) : undefined
              ),
              m,
              thisPath + "." + m.name,
              undefined
            )
          )
        declarations = [ts.factory.createEnumDeclaration(undefined, modifiers, define.name, members)]
      }
    } else if (define.subkeys) {
      if (existing && existing.kind !== "namespace") {
        throw new Error(
          `Manual definition for ${thisPath} should be a namespace, got ${ts.SyntaxKind[existing.node.kind]}`
        )
      }
      const subkeys = define.subkeys
        .sort(sortByOrder)
        .flatMap((d) => generateDefinesDeclaration(d, thisPath, existing?.members[d.name]))
      declarations = [createNamespace(modifiers, define.name, subkeys)]
    } else if (!existing) {
      context.warning("Incomplete define for", thisPath)
      declarations = [
        ts.factory.createTypeAliasDeclaration(undefined, undefined, define.name, undefined, Types.unknown),
      ]
    } else {
      declarations = [existing.node]
    }
    declarations.forEach((d) => {
      addJsDoc(context, d, define, thisPath, undefined)
    })
    return declarations
  }
}

function createRootDefine(context: GenerationContext): Define {
  return {
    order: 0,
    name: "defines",
    description: "",
    subkeys: context.apiDocs.defines,
  }
}
