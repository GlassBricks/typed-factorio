import assert from "assert"
import ts from "typescript"
import { StatementsList } from "./DefinitionsFile"
import { addJsDoc, processDescription } from "./documentation"
import { Parameter, ParameterGroup, WithVariantParameterGroups } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { createExtendsClause, Modifiers, removeLuaPrefix, toPascalCase, Types } from "./genUtil"
import { mapParameterToProperty } from "./members"
import { sortByOrder } from "./util"

export function createVariantParameterTypes(
  context: GenerationContext,
  name: string,
  value: WithVariantParameterGroups,
  statements: StatementsList
): { declaration: ts.TypeAliasDeclaration; description: string } {
  context.typeNames[name] = name
  const shortName = removeLuaPrefix(name)

  const baseName = "Base" + shortName
  const existingBase = context.getInterfaceDef(baseName)

  value.variant_parameter_groups!.sort(sortByOrder)

  const baseProperties = value.parameters.sort(sortByOrder).map((p) => ({
    original: p,
    member: mapParameterToProperty(context, p, baseName, existingBase),
  }))
  {
    const baseDeclaration = ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      baseName,
      undefined,
      undefined,
      baseProperties.map((g) => g.member)
    )
    addJsDoc(
      context,
      baseDeclaration,
      {
        description: `Common attributes to all variants of {@link ${name}}.`,
      },
      undefined
    )
    statements.add(baseDeclaration)
    context.typeNames[baseName] = name
  }

  const { isDefine, variants, discriminantProperty } = getAllVariants(context, value, baseProperties, name)
  addOtherVariant(context, value, variants)

  const variantTypeNames = new Map<string, string>(
    value.variant_parameter_groups!.map((group) => [group.name, variantToTypeName(group.name)])
  )

  for (const group of value.variant_parameter_groups!) {
    const isOtherTypes = group.name === "Other"
    if (isOtherTypes && (!variants || variants.size === 0)) {
      context.warning('"Other" variant parameter group with no other values')
      continue
    }

    const typeName = variantTypeNames.get(group.name)!
    const existing = context.getInterfaceDef(typeName)

    let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
    if (existing?.kind === "type") {
      declaration = existing.node
    } else {
      const members: ts.PropertySignature[] = []
      if (discriminantProperty) {
        members.push(
          ts.factory.createPropertySignature(
            [Modifiers.readonly],
            discriminantProperty,
            undefined,
            isOtherTypes
              ? ts.factory.createUnionTypeNode(Array.from(variants!).map(variantToTypeNode))
              : variantToTypeNode(group.name)
          )
        )
      }
      const properties = group.parameters
        .sort(sortByOrder)
        .map((p) => mapParameterToProperty(context, p, typeName, existing))

      members.push(...properties)
      declaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        typeName,
        undefined,
        createExtendsClause(baseName),
        members
      )
    }
    const variantDescription = getVariantDescription(group)
    group.description = variantDescription + "\n\n" + (group.description ?? "")
    addJsDoc(context, declaration, group, undefined)
    statements.add(declaration)

    context.typeNames[typeName] = typeName

    if (isOtherTypes) variants?.clear()
  }

  const unionDeclaration: ts.TypeAliasDeclaration = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.factory.createUnionTypeNode([...variantTypeNames.values()].map((x) => ts.factory.createTypeReferenceNode(x)))
  )
  statements.add(unionDeclaration)

  const description = getVariantsDescription()
  return { declaration: unionDeclaration, description }

  function getVariantsDescription(): string {
    const rawDescription =
      `Base attributes: {@link ${baseName}}\n` +
      value.variant_parameter_description +
      "\n" +
      [...variantTypeNames.entries()]
        .filter(([groupName]) => groupName !== "Other")
        .map(([variantName, typeName]) => {
          const variantNameLink = isDefine ? `[${variantName}](${variantName})` : `\`"${variantName}"\``
          const typeNameLink = `[${typeName}](${typeName})`
          return `- ${variantNameLink}: ${typeNameLink}`
        })
        .join("\n")
    const result = processDescription(context, rawDescription)
    assert(result !== undefined)
    return result
  }

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

  function variantToLink(variantName: string) {
    return isDefine ? `[${variantName}](${variantName})` : `\`"${variantName}"\``
  }
}

function getAllVariants(
  context: GenerationContext,
  withVariants: WithVariantParameterGroups,
  baseProperties: { original: Parameter; member: ts.PropertySignature }[],
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
      const memberType = property.member
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
  } else if (allVariants) {
    variants.variant_parameter_groups!.forEach((x) => {
      if (!allVariants.delete(x.name)) {
        context.warning(`Group ${x.name} is not in known variants`)
      }
    })
    if (allVariants.size > 0)
      // add
      variants.variant_parameter_groups!.push({
        name: "Other",
        order: variants.variant_parameter_groups!.length + 1,
        parameters: [],
        description: "",
      })
  }
}
