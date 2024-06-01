import assert from "assert"
import ts from "typescript"
import { addJsDoc, processDescription } from "./documentation.js"
import { LiteralType, Parameter, ParameterGroup, Type, WithVariantParameterGroups } from "./FactorioRuntimeApiJson.js"
import { createExtendsClause, Modifiers, removeLuaPrefix, toPascalCase, Types } from "./genUtil.js"
import { mapParameterToProperty } from "./runtime/members.js"
import { RWUsage } from "./read-write-types.js"
import { byOrder } from "./util.js"
import { RuntimeGenerationContext } from "./runtime/index.js"

export function createVariantParameterTypes(
  context: RuntimeGenerationContext,
  name: string,
  value: WithVariantParameterGroups,
  usage: RWUsage,
): {
  declarations: [mainType: ts.TypeAliasDeclaration, altWriteType?: ts.TypeAliasDeclaration]
  description: string
} {
  context.references.set(name, name)
  const shortName = removeLuaPrefix(name)

  const baseName = "Base" + shortName
  context.references.set(baseName, name)
  const existingBase = context.manualDefs.getDeclaration(baseName)

  value.variant_parameter_groups!.sort(byOrder)

  const baseProperties = value.parameters.sort(byOrder).map((p) => ({
    original: p,
    member: mapParameterToProperty(context, p, baseName, usage, existingBase),
  }))

  const { isDefine, variants, discriminantProperty } = getAllVariants(context, value, baseProperties, name)
  const baseHasAttributes = baseProperties.length > (discriminantProperty ? 1 : 0)

  {
    assert(!baseProperties.some((p) => p.member.altWriteProperty)) // not supported for now
    const baseDeclaration = ts.factory.createInterfaceDeclaration(
      [Modifiers.export],
      baseName,
      undefined,
      undefined,
      baseProperties.map((g) => g.member.mainProperty),
    )
    if (baseHasAttributes) {
      addJsDoc(
        context,
        baseDeclaration,
        {
          description: `Common attributes to all variants of {@link ${name}}.`,
        },
        undefined,
      )
    }
    context.currentFile.add(baseDeclaration)
  }

  addOtherVariant(context, value, variants)

  const writeTypeNames: string[] = []
  let hasSeparateWrite = false

  for (const group of value.variant_parameter_groups!) {
    const isOtherTypes = group.name === "Other"
    if (isOtherTypes && (!variants || variants.size === 0)) {
      context.warning('"Other" variant parameter group with no other values')
      continue
    }

    const variantName = variantToTypeName(group.name)

    const existing = context.manualDefs.getDeclaration(variantName)

    let declarations: (ts.InterfaceDeclaration | ts.TypeAliasDeclaration)[]
    if (existing?.kind === "type") {
      declarations = [existing.node]
    } else {
      let discriminantMember: ts.PropertySignature | undefined
      if (discriminantProperty) {
        discriminantMember = ts.factory.createPropertySignature(
          [Modifiers.readonly],
          discriminantProperty,
          undefined,
          isOtherTypes
            ? ts.factory.createUnionTypeNode(Array.from(variants!).map(variantToTypeNode))
            : variantToTypeNode(group.name),
        )
      }
      declarations = []
      const properties = group.parameters
        .sort(byOrder)
        .map((p) => mapParameterToProperty(context, p, variantName, usage, existing))

      const readMembers = properties.map((p) => p.mainProperty)
      if (discriminantMember) readMembers.unshift(discriminantMember)
      declarations.push(
        ts.factory.createInterfaceDeclaration(
          [Modifiers.export],
          variantName,
          undefined,
          createExtendsClause(baseName),
          readMembers,
        ),
      )

      if (properties.some((p) => p.altWriteProperty)) {
        hasSeparateWrite = true
        const writeMembers = properties.map((p) => p.altWriteProperty ?? p.mainProperty).filter((x) => x)
        if (discriminantMember) writeMembers.unshift(discriminantMember)
        declarations.push(
          ts.factory.createInterfaceDeclaration(
            [Modifiers.export],
            variantName + "Write",
            undefined,
            createExtendsClause(baseName),
            writeMembers,
          ),
        )
        writeTypeNames.push(variantName + "Write")
      } else {
        writeTypeNames.push(variantName)
      }
    }
    const variantDescription = getVariantDescription(group)
    addJsDoc(context, declarations[0], group, undefined, { pre: variantDescription })
    declarations.forEach((d) => context.currentFile.add(d))

    context.references.set(variantName, variantName)

    if (isOtherTypes) variants?.clear()
  }

  const resultDeclarations: ts.TypeAliasDeclaration[] = []
  const unionDeclaration: ts.TypeAliasDeclaration = ts.factory.createTypeAliasDeclaration(
    [Modifiers.export],
    name,
    undefined,
    ts.factory.createUnionTypeNode(
      value
        .variant_parameter_groups!.map((x) => variantToTypeName(x.name))
        .map((x) => ts.factory.createTypeReferenceNode(x)),
    ),
  )
  resultDeclarations.push(unionDeclaration)

  let writeUnionDeclaration: ts.TypeAliasDeclaration | undefined
  if (hasSeparateWrite) {
    writeUnionDeclaration = ts.factory.createTypeAliasDeclaration(
      [Modifiers.export],
      name + "Write",
      undefined,
      ts.factory.createUnionTypeNode(writeTypeNames.map((x) => ts.factory.createTypeReferenceNode(x))),
    )
    resultDeclarations.push(writeUnionDeclaration)
  }
  resultDeclarations.forEach((d) => context.currentFile.add(d))

  const description = getMainResultDescription()
  return { declarations: resultDeclarations as never, description }

  function variantToTypeNode(variantName: string) {
    return isDefine ? ts.factory.createTypeReferenceNode(variantName) : Types.stringLiteral(variantName)
  }

  function variantToTypeName(variantName: string): string {
    const prefix = toPascalCase(isDefine ? variantName.substring(variantName.lastIndexOf(".") + 1) : variantName)
    return prefix + shortName
  }

  function getVariantDescription(group: ParameterGroup): string {
    if (group.name === "Other") {
      return `Variants of {@link ${name}} with no additional attributes.`
    }
    return `${variantToLink(group.name)} variant of {@link ${name}}.`
  }

  function getMainResultDescription(): string {
    const rawDescription =
      (baseHasAttributes ? `Base attributes: {@link ${baseName}}\n` : "") +
      value.variant_parameter_description +
      "\n" +
      value
        .variant_parameter_groups!.filter((group) => group.name !== "Other" || group.parameters.length > 0)
        .map((group) => {
          const variantName = group.name
          const typeName = variantToTypeName(variantName)
          return `- ${variantToLink(variantName)}: [${typeName}](runtime:${typeName})`
        })
        .join("\n")
    const result = processDescription(context, rawDescription)
    assert(result !== undefined)
    return result
  }

  function variantToLink(variantName: string) {
    if (variantName === "Other") return "Other types"
    return isDefine ? `[${variantName}](runtime:${variantName})` : `\`"${variantName}"\``
  }
}

function getAllVariants(
  context: RuntimeGenerationContext,
  withVariants: WithVariantParameterGroups,
  baseProperties: {
    original: Parameter
    member: { mainProperty: ts.PropertySignature }
  }[],
  name: string,
): {
  discriminantProperty?: string
  variants?: Set<string>
  isDefine?: boolean
} {
  const discriminantProperty = withVariants.variant_parameter_description.match(/depending on `(.+?)`:/)?.[1]
  if (!discriminantProperty) return {}

  const property = baseProperties.find((p) => p.original.name === discriminantProperty)
  if (property === undefined) {
    throw new Error(`Discriminant property ${discriminantProperty} was not found on ${name}`)
  }

  const apiType = property.original.type
  // check for defines property
  if (typeof apiType === "string" && apiType.startsWith("defines.")) {
    const types = context.defines.get(apiType)?.values?.map((value) => apiType + "." + value.name)
    if (!types) {
      throw new Error(`Discriminant property ${name}.${discriminantProperty} has nonexistent define type ${apiType}`)
    }
    return {
      isDefine: true,
      variants: new Set<string>(types),
      discriminantProperty,
    }
  }

  // check for concept enum
  const stringEnumType = tryGetStringEnumType(context, apiType, property.member.mainProperty.type!)
  if (stringEnumType) {
    return {
      variants: new Set<string>(stringEnumType),
      discriminantProperty,
    }
  }

  throw new Error(`Could not determine values of discriminant property ${name}.${discriminantProperty}`)
}

export function tryGetStringEnumType(
  context: RuntimeGenerationContext,
  apiType: Type,
  tsType: ts.TypeNode,
): string[] | undefined {
  if (typeof apiType === "string") {
    const result = tryGetStringUnionValuesFromConcept(context, apiType)
    if (result) return result
  }
  if (
    typeof apiType === "object" &&
    apiType.complex_type === "union" &&
    apiType.options.every((o) => typeof o === "object" && o.complex_type === "literal" && typeof o.value === "string")
  ) {
    return apiType.options.map((o) => (o as LiteralType).value as string)
  }
  if (ts.isTypeReferenceNode(tsType)) {
    const result = tryGetStringUnionValuesFromConcept(context, tsType.typeName.getText())
    if (result) return result
  }

  // check for string literal union
  return tryGetStringUnionValuesFromTsType(context, tsType)
}

function tryGetStringUnionValuesFromConcept(
  context: RuntimeGenerationContext,
  conceptName: string,
): string[] | undefined {
  const concept = context.concepts.get(conceptName)
  if (!concept) return undefined

  const conceptType = concept.type
  function isStringLiteralType(type: Type): type is LiteralType & { value: string } {
    return typeof type !== "string" && type.complex_type === "literal" && typeof type.value === "string"
  }
  if (
    typeof conceptType !== "string" &&
    conceptType.complex_type === "union" &&
    conceptType.options.every(isStringLiteralType)
  ) {
    return conceptType.options.map((option) => option.value)
  }
}
function tryGetStringUnionValuesFromTsType(
  context: RuntimeGenerationContext,
  typeNode: ts.TypeNode,
): string[] | undefined {
  if (ts.isUnionTypeNode(typeNode)) {
    if (typeNode.types.some((t) => !ts.isLiteralTypeNode(t) || !ts.isStringLiteral(t.literal))) return undefined
    return typeNode.types.map((t) => ((t as ts.LiteralTypeNode).literal as ts.StringLiteral).text)
  }

  let type = context.checker.getTypeFromTypeNode(typeNode)
  while (!type.isUnion() && type.symbol) {
    const newType = context.checker.getDeclaredTypeOfSymbol(type.symbol)
    if (type === newType) break
    type = newType
  }
  if (!type.isUnion() || !type.types.every((t) => t.isStringLiteral())) {
    return undefined
  }
  return type.types.map((t) => (t as ts.StringLiteralType).value)
}

function addOtherVariant(
  context: RuntimeGenerationContext,
  variants: WithVariantParameterGroups,
  allVariants: Set<string> | undefined,
): void {
  const otherTypes = variants.variant_parameter_groups!.find((x) => x.name === "Other types")
  if (otherTypes) {
    otherTypes.order = variants.variant_parameter_groups!.length + 1
    otherTypes.name = "Other"
  }
  if (!allVariants) return
  variants.variant_parameter_groups!.forEach((x) => {
    if (!allVariants.delete(x.name) && x !== otherTypes) {
      context.warning(`Group ${x.name} is not in known variants`)
    }
  })
  if (!otherTypes && allVariants.size > 0)
    // add
    variants.variant_parameter_groups!.push({
      name: "Other",
      order: variants.variant_parameter_groups!.length + 1,
      parameters: [],
      description: "",
    })
}
