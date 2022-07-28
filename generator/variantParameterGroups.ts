import assert from "assert"
import ts from "typescript"
import { StatementsList } from "./DefinitionsFile"
import { addJsDoc, processDescription } from "./documentation"
import { Parameter, ParameterGroup, WithVariantParameterGroups } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { createExtendsClause, Modifiers, removeLuaPrefix, toPascalCase, Types } from "./genUtil"
import { mapParameterToProperty } from "./members"
import { RWUsage } from "./read-write-types"
import { sortByOrder } from "./util"

export function createVariantParameterTypes(
  context: GenerationContext,
  name: string,
  value: WithVariantParameterGroups,
  usage: RWUsage,
  statements: StatementsList
): {
  declarations: [mainType: ts.TypeAliasDeclaration, altWriteType?: ts.TypeAliasDeclaration]
  description: string
} {
  context.typeNames[name] = name
  const shortName = removeLuaPrefix(name)

  const baseName = "Base" + shortName
  const existingBase = context.getInterfaceDef(baseName)

  value.variant_parameter_groups!.sort(sortByOrder)

  const baseProperties = value.parameters.sort(sortByOrder).map((p) => ({
    original: p,
    member: mapParameterToProperty(context, p, baseName, usage, existingBase),
  }))

  const { isDefine, variants, discriminantProperty } = getAllVariants(context, value, baseProperties, name)
  const baseHasAttributes = baseProperties.length > (discriminantProperty ? 1 : 0)

  {
    assert(!baseProperties.some((p) => p.member.altWriteProperty)) // not supported for now
    const baseDeclaration = ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      baseName,
      undefined,
      undefined,
      baseProperties.map((g) => g.member.mainProperty)
    )
    if (baseHasAttributes) {
      addJsDoc(
        context,
        baseDeclaration,
        {
          description: `Common attributes to all variants of {@link ${name}}.`,
        },
        undefined
      )
    }
    statements.add(baseDeclaration)
    context.typeNames[baseName] = name
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

    const typeName = variantToTypeName(group.name)

    const existing = context.getInterfaceDef(typeName)

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
            : variantToTypeNode(group.name)
        )
      }
      declarations = []
      const properties = group.parameters
        .sort(sortByOrder)
        .map((p) => mapParameterToProperty(context, p, typeName, usage, existing))

      const readMembers = properties.map((p) => p.mainProperty)
      if (discriminantMember) readMembers.unshift(discriminantMember)
      declarations.push(
        ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          typeName,
          undefined,
          createExtendsClause(baseName),
          readMembers
        )
      )

      if (properties.some((p) => p.altWriteProperty)) {
        hasSeparateWrite = true
        const writeMembers = properties.map((p) => p.altWriteProperty ?? p.mainProperty).filter((x) => x)
        if (discriminantMember) writeMembers.unshift(discriminantMember)
        declarations.push(
          ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            typeName + "Write",
            undefined,
            createExtendsClause(baseName),
            writeMembers
          )
        )
        writeTypeNames.push(typeName + "Write")
      } else {
        writeTypeNames.push(typeName)
      }
    }
    const variantDescription = getVariantDescription(group)
    group.description = variantDescription + "\n\n" + (group.description ?? "")
    addJsDoc(context, declarations[0], group, undefined)
    declarations.forEach((d) => statements.add(d))

    context.typeNames[typeName] = typeName

    if (isOtherTypes) variants?.clear()
  }

  const resultDeclarations: ts.TypeAliasDeclaration[] = []
  const unionDeclaration: ts.TypeAliasDeclaration = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.factory.createUnionTypeNode(
      value
        .variant_parameter_groups!.map((x) => variantToTypeName(x.name))
        .map((x) => ts.factory.createTypeReferenceNode(x))
    )
  )
  resultDeclarations.push(unionDeclaration)

  let writeUnionDeclaration: ts.TypeAliasDeclaration | undefined
  if (hasSeparateWrite) {
    writeUnionDeclaration = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      name + "Write",
      undefined,
      ts.factory.createUnionTypeNode(writeTypeNames.map((x) => ts.factory.createTypeReferenceNode(x)))
    )
    resultDeclarations.push(writeUnionDeclaration)
  }
  resultDeclarations.forEach((d) => statements.add(d))

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
          return `- ${variantToLink(variantName)}: [${typeName}](${typeName})`
        })
        .join("\n")
    const result = processDescription(context, rawDescription)
    assert(result !== undefined)
    return result
  }

  function variantToLink(variantName: string) {
    if (variantName === "Other") return "Other types"
    return isDefine ? `[${variantName}](${variantName})` : `\`"${variantName}"\``
  }
}

function getAllVariants(
  context: GenerationContext,
  withVariants: WithVariantParameterGroups,
  baseProperties: {
    original: Parameter
    member: { mainProperty: ts.PropertySignature }
  }[],
  name: string
) {
  const discriminantProperty = withVariants.variant_parameter_description.match(/depending on `(.+?)`:/)?.[1]
  let isDefine = false
  let variants: Set<string> | undefined
  if (discriminantProperty) {
    const property = baseProperties.find((p) => p.original.name === discriminantProperty)
    if (property === undefined) {
      throw new Error(`Discriminant property ${discriminantProperty} was not found on ${name}`)
    }
    const originalType = property.original.type
    let types: string[] | undefined
    if (typeof originalType === "string" && originalType.startsWith("defines.")) {
      isDefine = true
      types = context.defines.get(originalType)?.values?.map((value) => originalType + "." + value.name)
      if (!types) {
        throw new Error(
          `Discriminant property ${name}.${discriminantProperty} has nonexistent define type ${originalType}`
        )
      }
    } else {
      const memberType = property.member.mainProperty
      types = context.tryGetStringEnumType(memberType.type!)
      if (!types) {
        throw new Error(`Discriminant property ${name}.${discriminantProperty} is not a string literal union`)
      }
    }
    variants = new Set<string>(types)
  }
  return { isDefine, variants, discriminantProperty }
}

function addOtherVariant(
  context: GenerationContext,
  variants: WithVariantParameterGroups,
  allVariants: Set<string> | undefined
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
