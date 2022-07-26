import ts from "typescript"
import DefinitionsGenerator from "../DefinitionsGenerator"
import { Define } from "../FactorioApiJson"
import { createConst, createNamespace, Modifiers, Types } from "../genUtil"
import { AnyDef } from "../manualDefinitions"
import { sortByOrder } from "../util"
import { getMappedEventName } from "./events"

export function preprocessDefines(generator: DefinitionsGenerator) {
  const addDefine = (define: Define, parent: string) => {
    const name = parent + (parent ? "." : "") + define.name
    generator.typeNames[name] = name
    generator.defines.set(name, define)
    if (define.values) {
      for (const value of define.values) {
        const valueName = name + "." + value.name
        generator.typeNames[valueName] = valueName
      }
    }
    if (define.subkeys) {
      for (const subkey of define.subkeys) {
        addDefine(subkey, name)
      }
    }
  }
  addDefine(createRootDefine(generator), "")
}

export function generateDefines(generator: DefinitionsGenerator) {
  const [defines] = generateDefinesDeclaration(createRootDefine(generator), "", generator.manualDefinitions.defines, [
    Modifiers.declare,
  ])
  const statements = generator.newStatements()
  statements.add(defines)
  generator.addFile("defines", statements)

  function generateEventsDefine(define: Define) {
    // namespace events { const member: EventId<Id> }
    const members = define.values!.sort(sortByOrder).map((m) => {
      const eventType = getMappedEventName(m.name)
      const typeArguments = [ts.factory.createTypeReferenceNode(eventType)]
      const event = generator.events.get(m.name)!
      const eventFilterName = event.description.match(/Lua[A-Za-z]+?EventFilter/)?.[0]
      if (eventFilterName) {
        typeArguments.push(ts.factory.createTypeReferenceNode(eventFilterName))
      }

      let description = `Event type: {@link ${eventType}}`
      if (eventFilterName) {
        description += `\nEvent filter: {@link ${eventFilterName}}`
      }

      const statement = createConst(m.name, ts.factory.createTypeReferenceNode("EventId", typeArguments))
      return generator.addJsDoc(statement, { description }, undefined)
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
            generator.addJsDoc(
              ts.factory.createEnumMember(
                m.name,
                existing?.annotations.numericEnum ? ts.factory.createNumericLiteral(i) : undefined
              ),
              m,
              thisPath + "." + m.name
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
      generator.warning("Incomplete define for", thisPath)
      declarations = [
        ts.factory.createTypeAliasDeclaration(undefined, undefined, define.name, undefined, Types.unknown),
      ]
    } else {
      declarations = [existing.node]
    }
    declarations.forEach((d) => {
      generator.addJsDoc(d, define, thisPath)
    })
    return declarations
  }
}

function createRootDefine(generator: DefinitionsGenerator): Define {
  return {
    order: 0,
    name: "defines",
    description: "",
    subkeys: generator.apiDocs.defines,
  }
}
