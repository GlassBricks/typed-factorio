import chalk from "chalk"
import ts from "typescript"
import {
  Attribute,
  BasicMember,
  Class,
  Concept,
  Define,
  Event,
  EventRaised,
  FactorioApiJson,
  Parameter,
  Type,
  WithNotes,
  WithParameterVariants,
} from "./FactorioApiJson"
import { getMappedEventName } from "./files/events"
import { IndexTypes } from "./files/index-types"
import {
  addFakeJSDoc,
  createComment,
  createExtendsClause,
  indent,
  Modifiers,
  removeLuaPrefix,
  Tokens,
  toPascalCase,
  Types,
} from "./genUtil"
import { InterfaceDef, processManualDefinitions, TypeAliasDef } from "./manualDefinitions"
import { makeNullable, mapType, RWType } from "./types"
import { sortByOrder } from "./util"

export class Statements {
  statements: ts.Statement[] = [createComment("* @noSelfInFile ", true)]

  constructor(private addBefore: Map<string, ts.Statement[]>, private addLater: Map<string, ts.Statement[]>) {}

  addAfter(first: ts.Statement, next: ts.Statement) {
    const name = Statements.getName(first)
    if (!name) throw new Error("First object statement does not have name to add after")

    if (!this.addLater.has(name)) {
      this.addLater.set(name, [])
    }
    this.addLater.get(name)!.push(next)
  }

  add(statement: ts.Statement) {
    const name = Statements.getName(statement)
    if (name) {
      const addBefore = this.addBefore.get(name)
      if (addBefore) {
        this.statements.push(...addBefore)
        this.addBefore.delete(name)
      }
    }
    this.statements.push(statement)

    if (name) {
      const addAfter = this.addLater.get(name)
      if (addAfter) {
        this.statements.push(...addAfter)
        this.addLater.delete(name)
      }
    }
  }

  private static getName(statement: ts.Statement) {
    let name: string | undefined
    if (
      ts.isInterfaceDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement) ||
      ts.isModuleDeclaration(statement)
    ) {
      name = statement.name.text
    } else if (ts.isVariableStatement(statement)) {
      name = (statement.declarationList.declarations[0].name as ts.Identifier).text
    }
    return name
  }
}

export default class DefinitionsGenerator {
  outFiles = new Map<string, ts.Statement[]>()

  readonly manualDefinitions = processManualDefinitions(this.manualDefinitionsSource)

  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  private classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  private concepts = new Map<string, Concept>(this.apiDocs.concepts.map((e) => [e.name, e]))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))

  preprocessDone = false

  numericTypes = new Set<string>()
  // This is also a record of which types exist
  typeNames: Record<string, string> = {}
  addBefore = new Map<string, ts.Statement[]>()
  addAfter = new Map<string, ts.Statement[]>()
  addTo = new Map<string, ts.Statement[]>()

  readWriteConcepts = new Map<string, { read: string; write: string }>()
  conceptUsage = new Map<
    string,
    {
      read: boolean
      write: boolean
    }
  >(Array.from(this.concepts.keys()).map((c) => [c, { read: false, write: false }]))

  hasWarnings: boolean = false

  private static readonly docUrlBase = "https://lua-api.factorio.com/latest/"
  private static hardCodedLinks: Record<string, string> = {
    global: "Global.html",
    "data-lifecycle": "Data-Lifecycle.html",
    migrations: "Migrations.html",
  }

  constructor(
    readonly apiDocs: FactorioApiJson,
    readonly manualDefinitionsSource: ts.SourceFile,
    private readonly checker: ts.TypeChecker
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application " + apiDocs.application)
    }
    if (apiDocs.api_version !== 3) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
  }

  // private getIndexFile(): string {
  //   let result = DefinitionsGenerator.header
  //   result += '///<reference types="lua-types/5.2" />\n'
  //   for (const file of this.outFiles.keys()) {
  //     result += `///<reference path="${file}.d.ts" />\n`
  //   }
  //   return result
  // }
  //
  newStatements() {
    return new Statements(this.addBefore, this.addAfter)
  }

  addFile(name: string, statements: Statements) {
    const result = statements.statements
    const addTo = this.addTo.get(name) || []
    if (addTo) {
      result.push(...addTo)
      this.addTo.delete(name)
    }
    this.outFiles.set(name, result)
  }

  mapAttribute(
    attribute: Attribute,
    parent: string,
    existingContainer: InterfaceDef | TypeAliasDef | undefined
  ): ts.TypeElement | ts.TypeElement[] {
    let member: ts.TypeElement | ts.TypeElement[]
    // todo: include rw usage
    const type = this.mapTypeWithTransforms(attribute, parent, attribute.type)
    const existing = existingContainer?.members[attribute.name]
    if (existing) {
      // todo: handle read/write differences
      const first = existing[0]
      if (ts.isPropertySignature(first)) {
        member = ts.factory.createPropertySignature(
          first.modifiers,
          first.name,
          first.questionToken,
          first.type ?? type.mainType
        )
        ts.setEmitFlags(member, ts.EmitFlags.NoNestedComments)
      } else if (existing.every((v) => ts.isGetAccessorDeclaration(v) || ts.isSetAccessorDeclaration(v))) {
        member = []
        for (const element of existing) {
          if (ts.isGetAccessorDeclaration(element)) {
            if (!attribute.read) throw new Error("Get accessor defined for non-readable attribute")
            const newMember = ts.factory.createGetAccessorDeclaration(
              element.decorators,
              element.modifiers,
              element.name,
              element.parameters,
              element.type ?? type.mainType,
              undefined
            )
            ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
            member.push(newMember)
          } else if (ts.isSetAccessorDeclaration(element)) {
            if (!attribute.write) throw new Error("Set accessor defined for non-writable attribute")
            const newMember = ts.factory.createSetAccessorDeclaration(
              element.decorators,
              element.modifiers,
              element.name,
              element.parameters,
              undefined
            )
            ts.setEmitFlags(newMember, ts.EmitFlags.NoNestedComments)
            member.push(newMember)
          }
        }
      } else {
        throw new Error(
          `Unknown type for manual define for ${parent}.${attribute.name}, got kinds ${existing
            .map((x) => ts.SyntaxKind[x.kind])
            .join()} instead`
        )
      }
    } else if (!attribute.read) {
      member = ts.factory.createSetAccessorDeclaration(
        undefined,
        undefined,
        attribute.name,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "value",
            undefined,
            type.mainType,
            undefined
          ),
        ],
        undefined
      )
    } else {
      // todo: handle different read/write
      member = ts.factory.createPropertySignature(
        attribute.write ? undefined : [Modifiers.readonly],
        attribute.name,
        undefined,
        type.mainType
      )
    }
    const first = Array.isArray(member) ? member[0] : member
    this.addJsDoc(first, attribute, parent + "." + attribute.name)
    return member
  }

  mapParameterToProperty(
    parameter: Parameter,
    parent: string,
    existingContainer?: InterfaceDef | TypeAliasDef
  ): ts.PropertySignature {
    const prop = this.mapParameterToRWProperties(parameter, parent, existingContainer)
    return prop.mainType
  }

  mapParameterToRWProperties(
    parameter: Parameter,
    parent: string,
    existingContainer?: InterfaceDef | TypeAliasDef
  ): RWType<ts.PropertySignature> {
    const existingProperty = existingContainer?.members[parameter.name]?.[0]
    if (existingProperty) {
      if (!ts.isPropertySignature(existingProperty)) {
        throw new Error(
          `Manual define for ${parent}.${parameter.name} should be a property signature, got ${
            ts.SyntaxKind[existingProperty.kind]
          } instead`
        )
      }
      this.addJsDoc(existingProperty, parameter, undefined)
      return { mainType: existingProperty }
    } else {
      const type = this.mapTypeWithTransforms(parameter, parent, parameter.type)

      const result = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        escapePropertyName(parameter.name),
        parameter.optional ? Tokens.question : undefined,
        type.mainType
      )
      this.addJsDoc(result, parameter, undefined)

      return { mainType: result }
    }

    function escapePropertyName(name: string): ts.PropertyName {
      if (name.includes("-")) {
        return ts.factory.createStringLiteral(name)
      }
      return ts.factory.createIdentifier(name)
    }
  }

  mapTypeWithTransforms(member: { description: string; name?: string }, parent: string, baseType: Type): RWType {
    const result =
      this.tryUseIndexType(member, parent, baseType) ??
      this.tryUseStringEnum(member, baseType) ??
      this.tryUseFlagValue(member, baseType) ??
      mapType(this, baseType)
    const isNullable = !(member as Parameter).optional && this.isNullableFromDescription(member, parent)
    return isNullable ? makeNullable(result) : result
  }

  tryGetStringEnumType(typeNode: ts.TypeNode): string[] | undefined {
    if (ts.isUnionTypeNode(typeNode)) {
      if (typeNode.types.some((t) => !ts.isLiteralTypeNode(t) || !ts.isStringLiteral(t.literal))) return undefined
      return typeNode.types.map((t) => ((t as ts.LiteralTypeNode).literal as ts.StringLiteral).text)
    }

    let type = this.checker.getTypeFromTypeNode(typeNode)
    while (!type.isUnion() && type.symbol) {
      type = this.checker.getDeclaredTypeOfSymbol(type.symbol)
    }
    if (type.isUnion()) {
      if (type.types.some((t) => !t.isStringLiteral())) return undefined
      return type.types.map((t) => (t as ts.StringLiteralType).value)
    }
    return undefined
  }

  private tryUseIndexType(
    member: {
      name?: string
    },
    parent: string,
    type: Type
  ): RWType | undefined {
    if (type !== "uint" && type !== "uint64") return undefined
    for (const indexType of IndexTypes) {
      const expectedType = indexType.typeOverride ?? "uint"
      if (type !== expectedType) continue
      if (
        (indexType.mainAttributePath.parent === parent && member.name === indexType.mainAttributePath.name) ||
        parent === indexType.mainAttributePath.parent + "." + indexType.mainAttributePath.name ||
        parent === indexType.identificationConcept ||
        (indexType.attributePattern && member.name?.match(indexType.attributePattern))
      ) {
        const typeNode = ts.factory.createTypeReferenceNode(indexType.name)
        return { mainType: typeNode }
      }
    }
    return undefined
  }

  // noinspection JSMethodCanBeStatic
  private tryUseStringEnum(
    member: {
      description: string
      name?: string
    },
    type: Type
  ): RWType | undefined {
    if (type === "string") {
      const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
      if (
        (matches.size >= 2 && !member.description.match(/e\.g\. /i)) ||
        (matches.size === 1 &&
          (member.description.match(/One of `"[a-zA-Z-_]+?"`/) ||
            member.description.match(/Can only be `"[a-zA-Z-_]+?"`/)))
      ) {
        const outType = ts.factory.createUnionTypeNode(Array.from(matches).map(Types.stringLiteral))
        return { mainType: outType }
      }
    }
    /*
    else {
      if (member.name === "type") {
        console.log(chalk.blueBright(`Possibly enum type, from ${parent}.${member.name}`))
      }
    }
    */

    return undefined
  }

  private tryUseFlagValue(
    member: {
      description: string
      name?: string
    },
    type: Type
  ): RWType | undefined {
    if (member.name !== "flag" || type !== "string") return undefined
    const match = member.description.match(/\[([A-Z][a-zA-Z]+Flags)]/)
    if (!match) return undefined
    const flagName = match[1]
    if (this.concepts.get(flagName)?.type !== "flag") return undefined

    const result = ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.KeyOfKeyword,
      ts.factory.createTypeReferenceNode(flagName)
    )
    return { mainType: result }
  }

  private isNullableFromDescription(
    member: {
      description: string
      name?: string
    },
    parent: string
  ): boolean {
    const nullableRegex = /(returns|or|be|possibly|otherwise|else|) [`']?nil[`']?|`?nil`? (if|when|otherwise)/i
    const nullable = member.description.match(nullableRegex)
    if (nullable) {
      if (!member.description.match(/[`' ]nil/i)) {
        this.warning(
          `Inconsistency in nullability in description: ${parent}.${member.name}\n`,
          indent(member.description)
        )
      }
      return true
    }
    // if ((member as WithNotes).notes?.some((note) => note.match(nullableRegex))) {
    //   console.log(chalk.blueBright("Possibly nullable from note: ", (member as WithNotes).notes))
    // }
    return false
  }

  createVariantParameterTypes(
    name: string,
    variants: WithParameterVariants,
    statements: Statements,
    readWriteNames?: { read: string; write: string },
    memberForDocs?: BasicMember
  ): ts.TypeReferenceNode {
    const shortName = removeLuaPrefix(name)
    const baseName = "Base" + shortName

    const existingBase = this.manualDefinitions[baseName]
    if (existingBase?.kind === "namespace") {
      throw new Error(`Manual definition for variant parameter type ${name} cannot be a namespace`)
    }

    const baseProperties = variants.parameters.sort(sortByOrder).map((p) => ({
      original: p,
      member: this.mapParameterToRWProperties(p, baseName, existingBase),
    }))

    // not supported right now
    statements.add(
      ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        baseName,
        undefined,
        undefined,
        baseProperties.map((g) => g.member.mainType)
      )
    )
    this.typeNames[baseName] = name

    const discriminantProperty = variants.variant_parameter_description?.match(/depending on `(.+?)`:/)?.[1]
    let unusedTypes: Set<string> | undefined
    let isDefine = false
    if (discriminantProperty) {
      const property = baseProperties.find((g) => g.original.name === discriminantProperty)
      if (property === undefined) {
        throw new Error(`Discriminant property ${discriminantProperty} was not found on ${name}`)
      }
      const originalType = property.original.type
      let types: string[] | undefined
      if (typeof originalType === "string" && originalType.startsWith("defines.")) {
        isDefine = true
        types = this.defines.get(originalType)?.values?.map((value) => originalType + "." + value.name)
        if (!types) {
          throw new Error(
            `Discriminant property ${name}.${discriminantProperty} has nonexistent define type ${originalType}`
          )
        }
      } else {
        const memberType = property.member.mainType
        types = this.tryGetStringEnumType(memberType.type!)
        if (!types) {
          throw new Error(`Discriminant property ${name}.${discriminantProperty} is not a string literal union`)
        }
      }
      unusedTypes = new Set<string>(types)
    }

    const otherTypes = variants.variant_parameter_groups!.find((x) => x.name === "Other types")
    if (otherTypes) {
      otherTypes.order = variants.variant_parameter_groups!.length + 1
      otherTypes.name = "Other"
    } else if (unusedTypes) {
      for (const group of variants.variant_parameter_groups!) {
        unusedTypes.delete(group.name)
      }
      let order = variants.variant_parameter_groups!.length + 1
      for (const unusedType of unusedTypes) {
        variants.variant_parameter_groups!.push({
          name: unusedType,
          order: order++,
          description: "",
          parameters: [],
        })
      }
    }

    function getType(groupName: string) {
      return isDefine ? ts.factory.createTypeReferenceNode(groupName) : Types.stringLiteral(groupName)
    }

    // also default
    const readGroupNames: string[] = []
    const writeGroupNames: string[] = []

    for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
      const isOtherTypes = group.name === "Other"
      if (isOtherTypes && (!unusedTypes || unusedTypes.size === 0)) {
        this.warning('"Other" variant parameter group with no other values')
        continue
      }
      const prefix = toPascalCase(isDefine ? group.name.substring(group.name.lastIndexOf(".") + 1) : group.name)
      const fullName = prefix + shortName
      const existing = this.manualDefinitions[fullName]
      if (existing?.kind === "namespace") {
        throw new Error(`Manual definition for variant parameter type ${fullName} cannot be a namespace`)
      }

      let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
      if (existing?.kind === "type") {
        declaration = existing.node
        readGroupNames.push(fullName)
        writeGroupNames.push(fullName)
      } else {
        const members: ts.PropertySignature[] = []
        if (discriminantProperty) {
          members.push(
            ts.factory.createPropertySignature(
              [Modifiers.readonly],
              discriminantProperty,
              undefined,
              isOtherTypes ? ts.factory.createUnionTypeNode(Array.from(unusedTypes!).map(getType)) : getType(group.name)
            )
          )
        }
        const properties = group.parameters
          .sort(sortByOrder)
          .map((p) => this.mapParameterToRWProperties(p, fullName, existing))

        members.push(...properties.map((x) => x.mainType))
        declaration = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          fullName,
          undefined,
          createExtendsClause(baseName),
          members
        )
        readGroupNames.push(fullName)
        writeGroupNames.push(fullName)
      }
      this.addJsDoc(declaration, group, undefined)
      statements.add(declaration)

      this.typeNames[fullName] = fullName
    }

    let declaration: ts.TypeAliasDeclaration

    if (readWriteNames) {
      statements.add(
        ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          readWriteNames.read,
          undefined,
          ts.factory.createUnionTypeNode(readGroupNames.map((x) => ts.factory.createTypeReferenceNode(x)))
        )
      )

      declaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        undefined,
        readWriteNames.write,
        undefined,
        ts.factory.createUnionTypeNode(writeGroupNames.map((x) => ts.factory.createTypeReferenceNode(x)))
      )
    } else {
      declaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        undefined,
        name,
        undefined,
        ts.factory.createUnionTypeNode(readGroupNames.map((x) => ts.factory.createTypeReferenceNode(x)))
      )
    }

    statements.add(declaration)
    if (memberForDocs) {
      this.addJsDoc(declaration, memberForDocs, memberForDocs.name)
    }
    this.typeNames[name] = name
    return ts.factory.createTypeReferenceNode(name)
  }

  private mapLink(origLink: string): { link: string; isWebLink?: true } {
    if (origLink.match(/^http(s?):\/\//)) {
      return { link: origLink, isWebLink: true }
    } else if (origLink.match(/\.html($|#)/)) {
      return { link: DefinitionsGenerator.docUrlBase + origLink, isWebLink: true }
    } else if (this.typeNames[origLink]) {
      return { link: this.typeNames[origLink] }
    } else if (DefinitionsGenerator.hardCodedLinks[origLink]) {
      return {
        link: DefinitionsGenerator.docUrlBase + DefinitionsGenerator.hardCodedLinks[origLink],
        isWebLink: true,
      }
    }
    const referenceMatch = origLink.match(/^(.+?)::(.+)$/)
    if (referenceMatch) {
      const { link: clazz } = this.mapLink(referenceMatch[1])
      const field = referenceMatch[2]
      const operator = field.match(/(?<=operator )(.*)/)?.[1]
      let fieldRef: string
      if (!operator) {
        fieldRef = "#" + field
      } else if (operator === "#") {
        fieldRef = ".length"
      } else if (operator === "[]" || operator === "()") {
        fieldRef = "" // not supported, at least not until declaration links get standardized
      } else {
        throw new Error(`Unknown operator ${operator}`)
      }
      return { link: clazz + fieldRef }
    } else {
      this.warning(`unresolved doc reference: ${origLink}`)
      return { link: origLink }
    }
  }

  processDescription(description: string | undefined): string | undefined {
    if (!description) return undefined
    let result = ""

    for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|```((?:(?!```).)*)```)/gs)) {
      const withLinks = text
        .replace(/\[(?!\[)(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
          const { link, isWebLink } = this.mapLink(origLink)
          const tag = isWebLink ? "linkplain" : "link"
          if (link === name) {
            return `{@${tag} ${link}}`
          } else {
            return `{@${tag} ${link} ${name}}`
          }
        })
        .replace("__1__\n   ", "__1__") // fix for LocalisedString description
        .replace(/\n(?!([\n-]))/g, "\n\n")
      result += withLinks

      if (codeBlock) result += "```" + codeBlock + "```"
    }

    return result
  }

  private getDocumentationUrl(reference: string): string {
    let relative_link: string
    if (this.builtins.has(reference)) {
      relative_link = "Builtin-Types.html#" + reference
    } else if (this.classes.has(reference)) {
      relative_link = reference + ".html"
    } else if (this.events.has(reference)) {
      relative_link = "events.html#" + reference
    } else if (reference.startsWith("defines.")) {
      relative_link = "defines.html#" + reference
    } else if (this.concepts.has(reference)) {
      relative_link = "Concepts.html#" + reference
    } else if (this.globalObjects.has(reference)) {
      relative_link = ""
    } else if (reference.includes(".")) {
      const className = reference.substring(0, reference.indexOf("."))
      return this.getDocumentationUrl(className) + "#" + reference
    } else {
      this.warning("Could not get documentation url:", reference)
      relative_link = ""
    }
    return DefinitionsGenerator.docUrlBase + relative_link
  }

  private getRaisesComment(raises: EventRaised[] | undefined): string | undefined {
    if (!raises || raises.length === 0) return
    let result = "**Raised events:**\n"
    for (const event of raises.sort(sortByOrder)) {
      const eventName = event.name
      const eventLink = getMappedEventName(eventName)
      const eventDescription = this.processDescription(event.description)
      const eventTimeframe = event.timeframe
      result += `- {@link ${eventLink} ${eventName}}${event.optional ? "?" : ""} _${eventTimeframe}_${
        eventDescription ? " " + eventDescription : ""
      }\n`
    }
    return result
  }

  private getSubclassesComment(subclasses: string[] | undefined): string | undefined {
    if (!subclasses || subclasses.length === 0) return
    return `_Can only be used if this is ${
      subclasses.length === 1
        ? subclasses[0]
        : `${subclasses.slice(0, -1).join(", ")} or ${subclasses[subclasses.length - 1]}`
    }_`
  }

  private getNotesComment(notes: string[] | undefined): string | undefined {
    if (!notes || notes.length === 0) return
    if (notes.length === 1) {
      return `**Note**\n\n${this.processDescription(notes[0])}`
    } else {
      return `**Notes**\n${this.processDescription(notes.map((x) => "- " + x).join("\n"))}`
    }
  }

  private processExample(example: string): string {
    if (example.startsWith("```")) {
      example = "\n" + example
    }
    // add " * " to each line that is not the first
    return this.processDescription(example)!.replaceAll("\n", "\n * ")
  }

  addJsDoc<T extends ts.Node>(
    node: T,
    element: {
      description: string
      subclasses?: string[]
      variant_parameter_description?: string
      raises?: EventRaised[]
    } & WithNotes,
    reference: string | undefined,
    tags?: ts.JSDocTag[]
  ): T {
    let comment = [
      this.processDescription(element.description),
      this.processDescription(element.variant_parameter_description),
      this.getRaisesComment(element.raises),
      this.getSubclassesComment(element.subclasses),
      this.getNotesComment(element.notes),
    ]
      .filter((x) => x)
      .join("\n\n")
      .replace(/\n\n\n+/g, "\n\n")
      .replace(/^\n+/, "")
      .replace(/\n+$/, "")

    tags = tags || []

    if (element.examples) {
      tags.push(
        ...element.examples.map((e) =>
          ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("example"), this.processExample(e))
        )
      )
    }
    if (!comment && tags.length === 0) return node

    if (reference) comment += `\n\n{@link ${this.getDocumentationUrl(reference)} View documentation}`

    const jsDoc = ts.factory.createJSDocComment(comment, tags)
    addFakeJSDoc(node, jsDoc)

    return node
  }

  warning(...args: unknown[]) {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }
}
