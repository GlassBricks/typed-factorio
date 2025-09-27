import assert from "assert"
import ts, { TypeElement } from "typescript"
import { PrototypeConcept } from "./FactorioPrototypeApiJson"
import { BasicMember, Concept, Parameter, Type } from "./FactorioRuntimeApiJson"
import { GenerationContext } from "./GenerationContext"
import { DeclarationDef } from "./ManualDefinitions"
import { RuntimeGenerationContext } from "./runtime"
import { byOrder } from "./util"

function manualDefMembersToTypeElements(
  context: GenerationContext,
  members: DeclarationDef["members"],
): [string, ts.TypeElement][] {
  return Object.entries(members)
    .map(([name, types]) => {
      if (types?.length !== 1) {
        context.warning("Added property has more than one type")
        return [name, undefined] as const
      }
      return [name, types[0]] as const
    })
    .filter((x): x is [string, ts.TypeElement] => !!x[1])
}

export function addPropertiesToConcept(
  context: RuntimeGenerationContext,
  concept: Concept,
  manualDef: DeclarationDef,
): void {
  if (!manualDef?.annotations.addProperties) return
  const conceptType = concept.type
  if (!(typeof conceptType === "object" && conceptType.complex_type === "table")) {
    context.warning("Add properties to non-table concepts not supported")
    return
  }
  const parameters = conceptType.parameters

  const properties = manualDefMembersToTypeElements(context, manualDef.members)
    .filter(([name]) => !parameters.some((p) => p.name === name))
    .map(([, type]) => type)
  parameters.push(...typeElemsToParameters(properties, parameters.length + 1))
}

export function manualDefToRuntimeConcept(context: RuntimeGenerationContext, manualDef: DeclarationDef): Concept {
  if (manualDef.kind === "interface") {
    return {
      name: manualDef.name,
      type: {
        complex_type: "table",
        parameters: typeElemsToParameters(
          manualDefMembersToTypeElements(context, manualDef.members).map(([, type]) => type),
          0,
        ),
        variant_parameter_description: "",
      },
      order: 0,
      description: getDescriptionFromJsDoc(manualDef.node),
      manuallyAdded: true,
    }
  } else if (manualDef.kind === "type") {
    return {
      name: manualDef.name,
      type: getTypeFromTsType(manualDef.node.type),
      order: 0,
      description: getDescriptionFromJsDoc(manualDef.node),
      manuallyAdded: true,
    }
  } else {
    error("Unsupported manual definition kind")
  }
}

export function manualDefToPrototypeConcept(
  _: GenerationContext,
  manualDef: DeclarationDef,
  original?: PrototypeConcept,
): PrototypeConcept {
  if (manualDef.kind === "interface") {
    throw new Error("not yet implemented")
  } else if (manualDef.kind === "type") {
    if (!original) throw new Error("original is required for now")
    return {
      ...original,
      type: manualDef.node.type.getText(),
    }
  }
  throw new Error("Unsupported manual definition kind")
}

function typeElemsToParameters(entries: readonly TypeElement[], startIndex: number): Parameter[] {
  return entries.map((element, i) => {
    if (!ts.isPropertySignature(element)) {
      throw new Error("Unsupported type element " + ts.SyntaxKind[element.kind])
    }
    return {
      order: startIndex + i,
      name: (element.name as ts.Identifier).text,
      type: getTypeFromTsType(element.type),
      optional: element.questionToken !== undefined,
      description: getDescriptionFromJsDoc(element),
      manuallyAdded: true,
    }
  })
}
function error(message: string): never {
  throw new Error(message)
}

function getDescriptionFromJsDoc(node: ts.JSDocContainer): string {
  return ts.getTextOfJSDocComment(node.jsDoc?.[0].comment) ?? ""
}

function getTypeFromTsType(type: ts.TypeNode | undefined): Type {
  assert(type, "Type is undefined")
  if (ts.isTypeReferenceNode(type)) {
    return type.getText()
  }
  if (ts.isArrayTypeNode(type)) {
    return {
      complex_type: "array",
      value: getTypeFromTsType(type.elementType),
    }
  }
  if (ts.isUnionTypeNode(type)) {
    return {
      complex_type: "union",
      options: type.types.map(getTypeFromTsType),
      full_format: false,
    }
  }
  if (ts.isTupleTypeNode(type)) {
    if (type.elements.some((e) => ts.isNamedTupleMember(e))) {
      return type.getText()
    }
    return {
      complex_type: "tuple",
      values: type.elements.map(getTypeFromTsType),
    }
  }
  if (ts.isTypeLiteralNode(type)) {
    return {
      complex_type: "table",
      parameters: typeElemsToParameters(type.members, 0),
      variant_parameter_description: "",
    }
  }
  if (ts.isLiteralTypeNode(type)) {
    return {
      complex_type: "literal",
      value: ts.isStringLiteral(type.literal)
        ? type.literal.text
        : ts.isNumericLiteral(type.literal)
          ? Number(type.literal.text)
          : type.literal.kind === ts.SyntaxKind.TrueKeyword
            ? true
            : type.literal.kind === ts.SyntaxKind.FalseKeyword
              ? false
              : error("Unsupported literal type"),
    }
  }
  if (ts.isTypeOperatorNode(type) && type.operator === ts.SyntaxKind.ReadonlyKeyword) {
    return getTypeFromTsType(type.type)
  }
  if (
    ts.isParenthesizedTypeNode(type) ||
    ts.isIntersectionTypeNode(type) ||
    ts.isTemplateLiteralTypeNode(type) ||
    ts.isTypeQueryNode(type) ||
    ts.isConditionalTypeNode(type) ||
    type.kind === ts.SyntaxKind.BooleanKeyword ||
    type.kind === ts.SyntaxKind.StringKeyword ||
    type.kind === ts.SyntaxKind.NumberKeyword
  ) {
    return type.getText()
  }

  throw new Error("Unsupported type " + ts.SyntaxKind[type.kind] + " on " + type.getText())
}

export function preprocessTypesWithManualDefs<C extends GenerationContext, T extends BasicMember>(
  context: C,
  elements: T[],
  file?: string,
  declarationToType: (context: C, declaration: DeclarationDef, original?: T) => T | undefined = () => undefined,
  handleAddProperties: (context: C, concept: T, manualDef: DeclarationDef) => void = (context, concept) => {
    context.warning("handleAddProperties not implemented for: " + concept.name)
  },
): T[] {
  const result: T[] = []
  const toAdd = file ? context.manualDefs.takeAddedTypes(file) : undefined
  function declarationToTypeWarn(declaration: DeclarationDef, original?: T): T | undefined {
    const result = declarationToType(context, declaration, original)
    if (!result) {
      context.warning("No handler for creating type from declaration for " + declaration.name)
    }
    return result
  }

  function maybeAddType(declarations: DeclarationDef[] | undefined) {
    if (!declarations) return
    const types = declarations.map((x) => declarationToTypeWarn(x)).filter((x): x is T => !!x)
    result.push(...types)
  }
  for (const element of elements.sort(byOrder)) {
    const manualDef = context.manualDefs.getDeclaration(element.name)
    const omit = manualDef?.annotations.omit
    const replace = manualDef?.annotations.replace
    const addProperties = manualDef?.annotations.addProperties
    if (omit && replace) {
      context.warning("Cannot have both omit and replace annotations")
    }
    if (addProperties && (omit || replace)) {
      context.warning("Cannot have addProperties with omit or replace annotations")
    }

    maybeAddType(toAdd?.addBefore[element.name])
    if (replace) {
      const replaced = declarationToTypeWarn(manualDef, element)
      if (replaced)
        result.push({
          ...element,
          ...replaced,
          name: element.name,
          order: element.order,
          description: element.description,
        })
    } else if (!omit) {
      if (addProperties) {
        handleAddProperties(context, element, manualDef)
      }
      result.push(element)
    }
    maybeAddType(toAdd?.addAfter[element.name])
  }

  maybeAddType(toAdd?.addAtEnd)

  return result
}
