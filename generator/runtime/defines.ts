import ts from "typescript"
import { addJsDoc } from "../documentation.js"
import { Define } from "../FactorioRuntimeApiJson.js"
import { createConst, createNamespace, escapePropertyName, Types } from "../genUtil.js"
import { AnyDef } from "../ManualDefinitions"
import { FactorioModule } from "../OutputFile.js"
import { byOrder } from "../util.js"
import { getMappedEventName } from "./events.js"
import { RuntimeGenerationContext } from "./index.js"

export function preprocessDefines(context: RuntimeGenerationContext): void {
  function addDefine(define: Define, parent: string) {
    const name = parent + (parent ? "." : "") + define.name
    context.tsToFactorioType.set(name, name)
    context.defines.set(name, define)
    if (define.values) {
      for (const value of define.values) {
        const valueName = name + "." + value.name
        context.tsToFactorioType.set(valueName, valueName)
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
  context.addFile("defines", FactorioModule.Global, () => {
    const [defines] = generateDefinesDeclaration(
      context,
      createRootDefine(context),
      "",
      context.manualDefs.getNamespace("defines"),
    )
    context.currentFile.add(defines)

    // manually added imports for now
    context.currentFile.addImport(FactorioModule.Runtime, "EventId")
  })
}

function generateEventsDefine(context: RuntimeGenerationContext, define: Define) {
  // namespace events { const member: EventId<Id> }
  const members = define.values!.sort(byOrder).map((m) => {
    const eventType = getMappedEventName(m.name)
    const typeArguments = [eventType]
    const event = context.events.get(m.name)!

    if (event.filter) {
      typeArguments.push(event.filter)
    }

    let description = `Event type: {@link ${eventType}}`
    if (event.filter) {
      description += `\nEvent filter: {@link ${event.filter}}`
    }

    for (const typeArg of typeArguments) {
      context.currentFile.addImport(FactorioModule.Runtime, typeArg)
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

  if (thisPath === "defines.events") {
    declarations = generateEventsDefine(context, define)
  } else if (thisPath === "defines.prototypes") {
    declarations = generatePrototypesDefine(context, define)
  } else if (define.values) {
    if (existing && existing.kind !== "enum") {
      throw new Error(`Manual definition for ${thisPath} should be a enum, got ${ts.SyntaxKind[existing.node.kind]}`)
    }
    if (existing?.annotations.omit) return []
    const members = define.values
      .sort(byOrder)
      .map((m, i) =>
        addJsDoc(
          context,
          ts.factory.createEnumMember(
            escapePropertyName(m.name),
            existing?.annotations.numericEnum ? ts.factory.createNumericLiteral(i) : undefined,
          ),
          m,
          thisPath + "." + m.name,
          undefined,
        ),
      )
    declarations = [ts.factory.createEnumDeclaration(undefined, define.name, members)]
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
    subkeys: context.rootDefines,
  }
}

function generatePrototypesDefine(_context: RuntimeGenerationContext, define: Define) {
  // interface prototypes {
  //    "member-name": {
  //      "subclass-name": 0
  //      ...
  //    }
  //    ...
  // }

  const members = define.subkeys!.sort(byOrder).map((member) => {
    const subclasses = member.values!.sort(byOrder).map((subclass) =>
      ts.factory.createPropertySignature(
        undefined,

        escapePropertyName(subclass.name),
        undefined,
        Types.numberLiteral(0),
      ),
    )
    return ts.factory.createPropertySignature(
      undefined,
      escapePropertyName(member.name),
      undefined,
      ts.factory.createTypeLiteralNode(subclasses),
    )
  })
  const intf = ts.factory.createInterfaceDeclaration(undefined, "prototypes", undefined, undefined, members)
  // declare const prototypes: prototypes
  const decl = createConst("prototypes", ts.factory.createTypeReferenceNode("prototypes"))
  return [intf, decl]
}
