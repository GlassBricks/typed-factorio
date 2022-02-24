import ts from "typescript"
import {
  addFakeJSDoc,
  createComment,
  createExtendsClause,
  indent,
  makeNullable,
  Modifiers,
  printer,
  printNode,
  removeLuaPrefix,
  Tokens,
  toPascalCase,
  Types,
} from "./genUtil"
import { assertNever, sortByOrder } from "./util"
import {
  checkManualDefinitions,
  InterfaceDef,
  preprocessManualDefinitions,
  processManualDefinitions,
  TypeAliasDef,
} from "./manualDefinitions"
import chalk from "chalk"
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
import { generateDefines, preprocessDefines } from "./files/defines"
import generateEvents, { getMappedEventName, preprocessEvents } from "./files/events"
import { generateBuiltins, generateGlobalObjects, preprocessBuiltins, preprocessGlobalObjects } from "./files/others"
import { generateConcepts, preprocessConcepts } from "./files/concepts"
import { generateClasses, preprocessClasses } from "./files/classes"
import assert from "node:assert"

export class Statements {
  statements: ts.Statement[] = [createComment("* @noSelfInFile ", true)]

  constructor(private addBefore: Map<string, ts.Statement[]>, private addLater: Map<string, ts.Statement[]>) {}

  addAfter(first: ts.Statement, next: ts.Statement) {
    const name = this.getName(first)
    if (!name) throw new Error("First object statement does not have name to add after")

    if (!this.addLater.has(name)) {
      this.addLater.set(name, [])
    }
    this.addLater.get(name)!.push(next)
  }

  add(statement: ts.Statement) {
    const name = this.getName(statement)
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

  private getName(statement: ts.Statement) {
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

export type RWType = {
  read?: ts.TypeNode
  write?: ts.TypeNode
}

export default class DefinitionsGenerator {
  private static header = "// This is an auto-generated file. Do not edit directly!\n\n"

  private outFiles = new Map<string, ts.Statement[]>()

  readonly manualDefinitions = processManualDefinitions(this.manualDefinitionsSource)

  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  private classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  private concepts = new Map<string, Concept>(this.apiDocs.concepts.map((e) => [e.name, e]))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))

  private preprocessDone = false

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

  constructor(
    readonly apiDocs: FactorioApiJson,
    readonly manualDefinitionsSource: ts.SourceFile,
    private readonly checker: ts.TypeChecker
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application " + apiDocs.application)
    }
    if (apiDocs.api_version !== 2) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
  }

  private static readonly docUrlBase = "https://lua-api.factorio.com/latest/"

  generateDeclarations(): Map<string, string> {
    this.preprocessAll()
    this.generateAll()
    const result = new Map<string, string>()
    for (const [fileName, statements] of this.outFiles) {
      let content = DefinitionsGenerator.header
      for (const statement of statements) {
        content += printer.printNode(ts.EmitHint.Unspecified, statement, this.manualDefinitionsSource)
        content += "\n\n"
      }
      result.set(fileName, content)
    }
    result.set("index", this.getIndexFile())
    return result
  }

  private generateAll() {
    generateBuiltins(this)
    generateGlobalObjects(this)
    generateDefines(this)
    generateEvents(this)
    generateClasses(this)
    generateConcepts(this)
    checkManualDefinitions(this)
  }

  private preprocessAll() {
    preprocessBuiltins(this)
    preprocessGlobalObjects(this)
    preprocessDefines(this)
    preprocessEvents(this)
    preprocessClasses(this)
    preprocessConcepts(this)
    preprocessManualDefinitions(this)
    this.preprocessDone = true
  }

  private getIndexFile(): string {
    let result = DefinitionsGenerator.header
    result += '///<reference types="lua-types/5.2" />\n'
    for (const file of this.outFiles.keys()) {
      result += `///<reference path="${file}.d.ts" />\n`
    }
    return result
  }

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
    const type = this.mapTypeWithTransforms(attribute, parent, attribute.type, attribute.read, attribute.write)
    const existing = existingContainer?.members[attribute.name]
    if (existing) {
      const first = existing[0]
      if (ts.isPropertySignature(first)) {
        if (attribute.read && attribute.write && type.read !== type.write) {
          if (first.type)
            this.warnIncompleteDefinition(
              `Attribute ${parent}.${attribute.name} has different read/write type, but manually defined as one type`
            )
          member = [
            ts.factory.createGetAccessorDeclaration(undefined, undefined, attribute.name, [], type.read, undefined),
            ts.factory.createSetAccessorDeclaration(
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
                  type.write,
                  undefined
                ),
              ],
              undefined
            ),
          ]
        } else {
          member = ts.factory.createPropertySignature(
            first.modifiers,
            first.name,
            first.questionToken,
            first.type ?? type.read
          )
          ts.setEmitFlags(member, ts.EmitFlags.NoNestedComments)
        }
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
              element.type ?? type.read,
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
            type.write ?? type.read,
            undefined
          ),
        ],
        undefined
      )
    } else {
      if (attribute.write && type.read !== type.write) {
        member = [
          ts.factory.createGetAccessorDeclaration(undefined, undefined, attribute.name, [], type.read, undefined),
          ts.factory.createSetAccessorDeclaration(
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
                type.write,
                undefined
              ),
            ],
            undefined
          ),
        ]
      } else {
        member = ts.factory.createPropertySignature(
          attribute.write ? undefined : [Modifiers.readonly],
          attribute.name,
          undefined,
          type.read
        )
      }
    }
    const first = Array.isArray(member) ? member[0] : member
    this.addJsDoc(first, attribute, parent + "." + attribute.name)
    return member
  }

  mapParameterToProperty(
    parameter: Parameter,
    parent: string,
    read: boolean,
    write: boolean,
    existingContainer?: InterfaceDef | TypeAliasDef
  ): ts.PropertySignature {
    const { read: readProp, write: writeProp } = this.mapParameterToRWProperties(
      parameter,
      parent,
      read,
      write,
      existingContainer
    )
    if (readProp && writeProp && readProp !== writeProp) {
      this.warnIncompleteDefinition(
        "Read/write types different in reading parameter as property: " +
          printNode(readProp.type!) +
          " " +
          printNode(writeProp.type!)
      )
    }
    return writeProp ?? readProp!
  }

  mapParameterToRWProperties(
    parameter: Parameter,
    parent: string,
    read: boolean,
    write: boolean,
    existingContainer?: InterfaceDef | TypeAliasDef
  ): { read?: ts.PropertySignature; write?: ts.PropertySignature } {
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
      return {
        read: read ? existingProperty : undefined,
        write: write ? existingProperty : undefined,
      }
    } else {
      const { read: readType, write: writeType } = this.mapTypeWithTransforms(
        parameter,
        parent,
        parameter.type,
        read,
        write
      )

      const createProp = (type: ts.TypeNode) => {
        const result = ts.factory.createPropertySignature(
          [Modifiers.readonly],
          escapePropertyName(parameter.name),
          parameter.optional ? Tokens.question : undefined,
          type
        )
        this.addJsDoc(result, parameter, undefined)
        return result
      }

      if (readType && writeType && readType === writeType) {
        const prop = createProp(readType)
        return {
          read: prop,
          write: prop,
        }
      } else {
        return {
          read: readType && createProp(readType),
          write: writeType && createProp(writeType),
        }
      }
    }

    function escapePropertyName(name: string): ts.PropertyName {
      if (name.includes("-")) {
        return ts.factory.createStringLiteral(name)
      }
      return ts.factory.createIdentifier(name)
    }
  }

  mapTypeWithTransforms(
    member: { description: string; name?: string },
    parent: string,
    type: Type,
    read: true,
    write: false
  ): { read: ts.TypeNode }

  mapTypeWithTransforms(
    member: { description: string; name?: string },
    parent: string,
    type: Type,
    read: false,
    write: true
  ): { write: ts.TypeNode }

  mapTypeWithTransforms(
    member: { description: string; name?: string },
    parent: string,
    type: Type,
    read: boolean,
    write: boolean
  ): { read?: ts.TypeNode; write?: ts.TypeNode }

  mapTypeWithTransforms(
    member: { description: string; name?: string },
    parent: string,
    baseType: Type,
    read: boolean,
    write: boolean
  ): RWType {
    const type =
      this.tryUseStringEnum(member, baseType) ??
      this.tryUseFlagValue(member, baseType) ??
      this.mapTypeBasic(baseType, read, write)
    const isNullable = !(member as Parameter).optional && this.isNullableFromDescription(member, parent)
    return isNullable ? makeNullable(type) : type
  }

  mapTypeBasic(type: Type, read: true, write: false): { read: ts.TypeNode }
  mapTypeBasic(type: Type, read: false, write: true): { write: ts.TypeNode }
  // mapTypeBasic(type: Type, read: true, write: true): { read: ts.TypeNode; write: ts.TypeNode }
  mapTypeBasic(type: Type, read: boolean, write: boolean): { read?: ts.TypeNode; write?: ts.TypeNode }

  mapTypeBasic(type: Type, read: boolean, write: boolean): RWType {
    if (typeof type === "string") {
      const conceptReadWrite = this.conceptUsage.get(type)
      if (conceptReadWrite) {
        if (this.preprocessDone) {
          if ((!conceptReadWrite.read && read) || (!conceptReadWrite.write && write)) {
            this.warnIncompleteDefinition(`Concept ${type} usage changed after preprocess`)
          }
        }
        conceptReadWrite.read ||= read
        conceptReadWrite.write ||= write
      }
      const readWriteTypes = this.readWriteConcepts.get(type)
      if (readWriteTypes) {
        return {
          read: read ? ts.factory.createTypeReferenceNode(readWriteTypes.read!) : undefined,
          write: write ? ts.factory.createTypeReferenceNode(readWriteTypes.write!) : undefined,
        }
      }
      const outType = ts.factory.createTypeReferenceNode(type)
      return { read: read ? outType : undefined, write: write ? outType : undefined }
    }
    if (type.complex_type === "variant") {
      const types = type.options.map((m) => this.mapTypeBasic(m, read, write))
      const readType = read ? ts.factory.createUnionTypeNode(types.map((x) => x.read!)) : undefined
      if (read && write) {
        if (types.every((x) => x.read === x.write)) return { read: readType, write: readType }
      }
      const writeType = write ? ts.factory.createUnionTypeNode(types.map((x) => x.write!)) : undefined
      return { read: readType, write: writeType }
    }
    if (type.complex_type === "array") {
      const valueType = this.mapTypeBasic(type.value, read, write)
      const readType = read ? ts.factory.createArrayTypeNode(valueType.read!) : undefined
      if (read && write) {
        if (valueType.read === valueType.write) {
          return { read: readType, write: readType }
        }
      }
      let writeType: ts.TypeNode | undefined = write ? ts.factory.createArrayTypeNode(valueType.write!) : undefined
      if (write && !read) writeType = ts.factory.createTypeOperatorNode(ts.SyntaxKind.ReadonlyKeyword, writeType!)
      return {
        read: readType,
        write: writeType,
      }
    }
    if (type.complex_type === "dictionary") {
      let recordType = "Record"
      if (!this.isIndexableType(type.key)) {
        this.warnIncompleteDefinition("Not typescript indexable type for key in dictionary complex type: ", type)
        recordType = "LuaTable"
      }
      const keyType = this.mapTypeBasic(type.key, true, false).read
      const valueType = this.mapTypeBasic(type.value, read, write)
      if (read && write) {
        if (valueType.read !== valueType.write) {
          this.warnIncompleteDefinition(
            "Different read/write type for record value:",
            printNode(valueType.write!),
            printNode(valueType.read!)
          )
        }
        const readType = ts.factory.createTypeReferenceNode(recordType, [keyType, valueType.read!])
        return { read: readType, write: readType }
      }

      return {
        read: read ? ts.factory.createTypeReferenceNode(recordType, [keyType, valueType.read!]) : undefined,
        write: write ? ts.factory.createTypeReferenceNode(recordType, [keyType, valueType.write!]) : undefined,
      }
    }

    if (type.complex_type === "LuaCustomTable") {
      if (write || !read) {
        throw new Error("LuaCustomTable can only be readonly")
      }
      const keyType = this.mapTypeBasic(type.key, true, false).read
      const valueType = this.mapTypeBasic(type.value, true, false).read
      return { read: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType, valueType]) }
    }
    if (type.complex_type === "function") {
      const outType = ts.factory.createFunctionTypeNode(
        undefined,
        type.parameters.map((value, index) => {
          const paramType = this.mapTypeBasic(value, true, false).read
          return ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            `param${index + 1}`,
            undefined,
            paramType
          )
        }),
        Types.void
      )
      return {
        read: read ? outType : undefined,
        write: write ? outType : undefined,
      }
    }
    if (type.complex_type === "LuaLazyLoadedValue") {
      if (write) {
        throw new Error("Cannot have write LuaLazyLoadedValue")
      }
      return {
        read: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [
          this.mapTypeBasic(type.value, true, false).read,
        ]),
      }
    }
    if (type.complex_type === "table") {
      if (type.variant_parameter_groups) {
        throw new Error("Variant parameter complex type not yet supported")
      }
      const parameters = type.parameters
        .sort(sortByOrder)
        .map((m) => this.mapParameterToRWProperties(m, "<<table type>>", read, write))
      if (read && write && parameters.every((x) => x.read === x.write)) {
        const outType = ts.factory.createTypeLiteralNode(parameters.map((x) => x.read!))
        return {
          read: outType,
          write: outType,
        }
      }
      return {
        read: read ? ts.factory.createTypeLiteralNode(parameters.map((x) => x.read!)) : undefined,
        write: write ? ts.factory.createTypeLiteralNode(parameters.map((x) => x.write!)) : undefined,
      }
    }
    assertNever(type)
  }

  private isIndexableType(type: Type): boolean {
    return (
      typeof type === "string" &&
      (type === "string" || type === "number" || type.startsWith("defines.") || this.numericTypes.has(type))
    )
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
        return { read: outType, write: outType }
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
    if (this.concepts.get(flagName)?.category !== "flag") return undefined

    const result = ts.factory.createTypeOperatorNode(
      ts.SyntaxKind.KeyOfKeyword,
      ts.factory.createTypeReferenceNode(flagName)
    )
    return { read: result, write: result }
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
        this.warnIncompleteDefinition(
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
    read: boolean,
    write: boolean,
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
      member: this.mapParameterToRWProperties(p, baseName, read, write, existingBase),
    }))

    // not supported right now
    if (read && write) assert(baseProperties.every((p) => p.member.read === p.member.write))

    statements.add(
      ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        baseName,
        undefined,
        undefined,
        baseProperties.map((g) => g.member.write ?? g.member.read!)
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
        const memberType = property.member.write ?? property.member.read!
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
        this.warnIncompleteDefinition('"Other" variant parameter group with no other values')
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
          .map((p) => this.mapParameterToRWProperties(p, fullName, read, write, existing))

        if (readWriteNames && properties.some((x) => x.read !== x.write)) {
          const writeMembers = members.concat(properties.map((x) => x.write!))
          const readMembers = members.concat(properties.filter((x) => x.read !== x.write).map((x) => x.read!))
          const writeName = prefix + readWriteNames.write
          const readName = prefix + readWriteNames.read
          const writeDeclaration = ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            writeName,
            undefined,
            createExtendsClause(baseName),
            writeMembers
          )
          const readDeclaration = ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            readName,
            undefined,
            createExtendsClause(baseName, writeName),
            readMembers
          )
          declaration = writeDeclaration
          statements.addAfter(writeDeclaration, readDeclaration)
          writeGroupNames.push(writeName)
          readGroupNames.push(readName)
        } else {
          members.push(...properties.map((x) => x.write ?? x.read!))
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

  private mapLink(origLink: string): string {
    if (origLink.match(/^http(s?):\/\//)) {
      return origLink
    } else if (origLink.match(/\.html($|#)/)) {
      return DefinitionsGenerator.docUrlBase + origLink
    } else if (this.typeNames[origLink]) {
      return this.typeNames[origLink]
    }
    const referenceMatch = origLink.match(/^(.+?)::(.+)$/)
    if (referenceMatch) {
      const clazz = this.mapLink(referenceMatch[1])
      const field = referenceMatch[2]
      const operator = field.match(/(?<=operator )(.*)/)?.[1]
      let fieldRef: string
      if (!operator) {
        fieldRef = "." + field
      } else if (operator === "#") {
        fieldRef = ".length"
      } else if (operator === "[]" || operator === "()") {
        fieldRef = "" // not supported, at least not until declaration links get standardized
      } else {
        throw new Error(`Unknown operator ${operator}`)
      }
      return clazz + fieldRef
    } else {
      this.warnIncompleteDefinition(`unresolved doc reference: ${origLink}`)
      return origLink
    }
  }

  processDescription(description: string | undefined): string | undefined {
    if (!description) return undefined
    let result = ""

    for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|```((?:(?!```).)*)```)/gs)) {
      const withLinks = text
        .replace(/\[(?!\[)(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
          const link = this.mapLink(origLink)
          if (link === name) {
            return `{@link ${link}}`
          } else {
            return `{@link ${link} ${name}}`
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
      this.warnIncompleteDefinition("Could not get documentation url:", reference)
      relative_link = ""
    }
    return DefinitionsGenerator.docUrlBase + relative_link
  }

  private getRaisesComment(raises: EventRaised[]): string {
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

  private processExample(example: string): string {
    // find code block if exists
    const match = example.match(/(.*?)(```(?:(?!```).)*```)/s)
    if (match) {
      return this.processDescription(match[1].trim() + "\n" + match[2].trim())!
    }
    return this.processDescription(example)!
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
      element.raises && element.raises.length > 0 && this.getRaisesComment(element.raises),
      element.subclasses &&
        `_Can only be used if this is ${
          element.subclasses.length === 1
            ? element.subclasses[0]
            : `${element.subclasses.slice(0, -1).join(", ")} or ${element.subclasses[element.subclasses.length - 1]}`
        }_`,
    ]
      .filter((x) => x)
      .join("\n\n")
      .replace(/\n\n+/g, "\n\n")

    tags = tags || []

    // notes
    if (element.notes) {
      tags.push(
        ts.factory.createJSDocUnknownTag(
          ts.factory.createIdentifier("remarks"),
          this.processDescription(element.notes.join("<br>"))
        )
      )
    }

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

  warnIncompleteDefinition(...args: unknown[]) {
    console.log(chalk.yellow(...args))
    this.hasWarnings = true
  }
}
