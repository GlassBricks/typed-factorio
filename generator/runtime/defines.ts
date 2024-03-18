import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { Define } from "../FactorioRuntimeApiJson.js"
import { createConst, createNamespace, Types } from "../genUtil.js"
import { AnyDef } from "../manualDefinitions.js"
import { byOrder } from "../util.js"
import { getMappedEventName } from "./events.js"
import { ModuleType } from "../OutputFile.js"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessDefines(context: RuntimeGenerationContext): void {
  function addDefine(define: Define, parent: string) {
    const name = parent + (parent ? "." : "") + define.name
    context.references.set(name, name)
    context.defines.set(name, define)
    if (define.values) {
      for (const value of define.values) {
        const valueName = name + "." + value.name
        context.references.set(valueName, valueName)
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

export function generateDefines(context: RuntimeGenerationContext): void {
  context.addFile("defines", ModuleType.Global, () => {
    const [defines] = generateDefinesDeclaration(
      context,
      createRootDefine(context),
      "",
      context.manualDefs.getNamespace("defines"),
    )
    context.currentFile.add(defines)

    // manually added imports for now
    context.currentFile.addImport("runtime", "EventId")
    context.currentFile.addImport("prototype", "PrototypeSubclassMap")
  })
}

function generateEventsDefine(context: RuntimeGenerationContext, define: Define) {
  // namespace events { const member: EventId<Id> }
  const members = define.values!.sort(byOrder).map((m) => {
    const eventType = getMappedEventName(m.name)
    const typeArguments = [eventType]
    const event = context.events.get(m.name)!
    const eventFilterName = event.description.match(/Lua[A-Za-z]+?EventFilter/)?.[0]
    if (eventFilterName) {
      typeArguments.push(eventFilterName)
    }

    let description = `Event type: {@link ${eventType}}`
    if (eventFilterName) {
      description += `\nEvent filter: {@link ${eventFilterName}}`
    }

    for (const typeArg of typeArguments) {
      context.currentFile.addImport("runtime", typeArg)
    }

    const statement = createConst(
      m.name,
      ts.factory.createTypeReferenceNode(
        "EventId",
        typeArguments.map((t) => ts.factory.createTypeReferenceNode(t)),
      ),
    )
    return addJsDoc(context, statement, { description }, undefined, undefined)
  })
  const namespace = createNamespace(undefined, define.name, members)

  // type events = typeof events[keyof typeof events]
  const typeofExp = ts.factory.createExpressionWithTypeArguments(
    ts.factory.createTypeOfExpression(ts.factory.createIdentifier(define.name)),
    undefined,
  )
  const keyofTypeof = ts.factory.createTypeOperatorNode(ts.SyntaxKind.KeyOfKeyword, typeofExp)
  const type = ts.factory.createTypeAliasDeclaration(
    undefined,
    "events",
    undefined,
    ts.factory.createIndexedAccessTypeNode(typeofExp, keyofTypeof),
  )
  return [namespace, type]
}

function generateDefinesDeclaration(
  context: RuntimeGenerationContext,
  define: Define,
  parent: string,
  existing: AnyDef | undefined,
): ts.Statement[] {
  let declarations: ts.Statement[]
  const thisPath = parent + (parent ? "." : "") + define.name
  if (define.values) {
    if (thisPath === "defines.events") {
      declarations = generateEventsDefine(context, define)
    } else {
      if (existing && existing.kind !== "enum") {
        throw new Error(`Manual definition for ${thisPath} should be a enum, got ${ts.SyntaxKind[existing.node.kind]}`)
      }
      const members = define.values
        .sort(byOrder)
        .map((m, i) =>
          addJsDoc(
            context,
            ts.factory.createEnumMember(
              m.name,
              existing?.annotations.numericEnum ? ts.factory.createNumericLiteral(i) : undefined,
            ),
            m,
            thisPath + "." + m.name,
            undefined,
          ),
        )
      declarations = [ts.factory.createEnumDeclaration(undefined, define.name, members)]
    }
  } else if (define.subkeys) {
    if (existing && existing.kind !== "namespace") {
      throw new Error(
        `Manual definition for ${thisPath} should be a namespace, got ${ts.SyntaxKind[existing.node.kind]}`,
      )
    }
    const subkeys = define.subkeys
      .sort(byOrder)
      .flatMap((d) => generateDefinesDeclaration(context, d, thisPath, existing?.members[d.name]))
    declarations = [createNamespace(undefined, define.name, subkeys)]
  } else if (!existing) {
    context.warning("Incomplete define for", thisPath)
    declarations = [ts.factory.createTypeAliasDeclaration(undefined, define.name, undefined, Types.unknown)]
  } else {
    declarations = [existing.node]
  }
  declarations.forEach((d) => {
    addJsDoc(context, d, define, thisPath, undefined)
  })
  return declarations
}

function createRootDefine(context: RuntimeGenerationContext): Define {
  return {
    order: 0,
    name: "defines",
    description: "",
    subkeys: context.apiDocs.defines,
  }
}
