import ts from "typescript"
import { StatementsList } from "./DefinitionsFile"
import { addJsDoc } from "./documentation"
import { BasicMember, WithParameterVariants } from "./FactorioApiJson"
import GenerationContext from "./GenerationContext"
import { createExtendsClause, Modifiers, removeLuaPrefix, toPascalCase, Types } from "./genUtil"
import { mapParameterToProperty } from "./members"
import { sortByOrder } from "./util"

export function createVariantParameterTypes(
  context: GenerationContext,
  name: string,
  variants: WithParameterVariants,
  statements: StatementsList,
  memberForDocs?: BasicMember
): void {
  const shortName = removeLuaPrefix(name)

  const baseName = "Base" + shortName
  const existingBase = context.getInterfaceDef(baseName)
  const baseProperties = variants.parameters.sort(sortByOrder).map((p) => ({
    original: p,
    member: mapParameterToProperty(context, p, baseName, existingBase),
  }))
  statements.add(
    ts.factory.createInterfaceDeclaration(
      undefined,
      undefined,
      baseName,
      undefined,
      undefined,
      baseProperties.map((g) => g.member)
    )
  )
  context.typeNames[baseName] = name

  const discriminantProperty = variants.variant_parameter_description?.match(/depending on `(.+?)`:/)?.[1]
  let unusedVariants: Set<string> | undefined
  let isDefine = false
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
    unusedVariants = new Set<string>(types)
  }

  const otherTypes = variants.variant_parameter_groups!.find((x) => x.name === "Other types")
  if (otherTypes) {
    otherTypes.order = variants.variant_parameter_groups!.length + 1
    otherTypes.name = "Other"
  } else if (unusedVariants) {
    for (const group of variants.variant_parameter_groups!) {
      unusedVariants.delete(group.name)
    }
    let order = variants.variant_parameter_groups!.length + 1
    for (const unused of unusedVariants) {
      variants.variant_parameter_groups!.push({
        name: unused,
        order: order++,
        description: "",
        parameters: [],
      })
    }
  }

  function variantToTypeNode(variantName: string) {
    return isDefine ? ts.factory.createTypeReferenceNode(variantName) : Types.stringLiteral(variantName)
  }

  const groupNames: string[] = []

  for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
    const isOtherTypes = group.name === "Other"
    if (isOtherTypes && (!unusedVariants || unusedVariants.size === 0)) {
      context.warning('"Other" variant parameter group with no other values')
      continue
    }
    const prefix = toPascalCase(isDefine ? group.name.substring(group.name.lastIndexOf(".") + 1) : group.name)
    const fullName = prefix + shortName
    const existing = context.getInterfaceDef(fullName)

    let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
    if (existing?.kind === "type") {
      declaration = existing.node
      groupNames.push(fullName)
    } else {
      const members: ts.PropertySignature[] = []
      if (discriminantProperty) {
        members.push(
          ts.factory.createPropertySignature(
            [Modifiers.readonly],
            discriminantProperty,
            undefined,
            isOtherTypes
              ? ts.factory.createUnionTypeNode(Array.from(unusedVariants!).map(variantToTypeNode))
              : variantToTypeNode(group.name)
          )
        )
      }
      const properties = group.parameters
        .sort(sortByOrder)
        .map((p) => mapParameterToProperty(context, p, fullName, existing))

      members.push(...properties)
      declaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        fullName,
        undefined,
        createExtendsClause(baseName),
        members
      )
      groupNames.push(fullName)
    }
    addJsDoc(context, declaration, group, name)
    statements.add(declaration)

    context.typeNames[fullName] = fullName
  }

  const declaration: ts.TypeAliasDeclaration = ts.factory.createTypeAliasDeclaration(
    undefined,
    undefined,
    name,
    undefined,
    ts.factory.createUnionTypeNode(groupNames.map((x) => ts.factory.createTypeReferenceNode(x)))
  )

  statements.add(declaration)
  if (memberForDocs) {
    addJsDoc(context, declaration, memberForDocs, memberForDocs.name)
  }
  context.typeNames[name] = name
}
