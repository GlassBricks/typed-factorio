import ts from "typescript"
import {
  addFakeJSDoc,
  createComment,
  indent,
  mergeUnion,
  Modifiers,
  printer,
  printNode,
  removeLuaPrefix,
  Tokens,
  toPascalCase,
  Types,
} from "./genUtil"
import { assertNever, sortByOrder } from "./util"
import { InterfaceDef, processManualDefinitions, RootDef, TypeAliasDef } from "./manualDefinitionsProcessing"
import chalk from "chalk"
import {
  Attribute,
  BasicMember,
  Class,
  Define,
  Event,
  FactorioApiJson,
  Method,
  Parameter,
  Type,
  WithNotes,
  WithParameterVariants,
} from "./FactorioApiJson"
import generateClasses from "./files/classes"
import generateDefines from "./files/defines"
import generateEvents from "./files/events"
import { generateBuiltins, generateGlobalObjects } from "./files/others"
import { generateConcepts, preprocessConcepts } from "./files/concepts"

export class Statements {
  statements: ts.Statement[] = [createComment("* @noSelfInFile ", true)]

  constructor(private addBefore: Map<string, ts.Statement[]>) {}

  add(statement: ts.Statement) {
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
    if (name) {
      const addBefore = this.addBefore.get(name)
      if (addBefore) {
        this.statements.push(...addBefore)
        this.addBefore.delete(name)
      }
    }
    this.statements.push(statement)
  }
}

export type RWType = {
  read?: ts.TypeNode
  write?: ts.TypeNode
}

export default class DefinitionsGenerator {
  private static header = "// This is an auto-generated file. Do not edit directly!\n\n"

  static noSelfAnnotation = ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("noSelf"))
  private outFiles = new Map<string, ts.Statement[]>()
  readonly manualDefinitions: Record<string, RootDef | undefined>
  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  private defines = new Map<string, Define>()
  events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  private classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  // private classMembers = new Map<string, Map<string, Attribute | Method>>()
  private concepts = new Set<string>(this.apiDocs.concepts.map((e) => e.name))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))
  // original -> mapped
  tableOrArrayConcepts = new Set<string>()
  conceptUsage = new Map<
    string,
    {
      read: boolean
      write: boolean
      readProcessed?: boolean
      writeProcessed?: boolean
    }
  >()

  usedConceptReadWrite = new Set<string>()

  numericTypes = new Set<string>()
  // This is also a record of which types exist
  typeNames: Record<string, string> = {}
  private addBefore = new Map<string, ts.Statement[]>()
  private addTo = new Map<string, ts.Statement[]>()
  readonly rootDefine: Define = {
    order: 0,
    name: "defines",
    description: "",
    subkeys: this.apiDocs.defines,
  }

  private readonly docUrlBase = "https://lua-api.factorio.com/latest/"
  private readonly warnings: string[] = []

  constructor(
    readonly apiDocs: FactorioApiJson,
    readonly manualDefinitionsSource: ts.SourceFile,
    private readonly checker: ts.TypeChecker,
    private readonly errorOnWarnings: boolean
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application " + apiDocs.application)
    }
    if (apiDocs.api_version !== 1) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
    this.manualDefinitions = processManualDefinitions(manualDefinitionsSource)
  }

  static getMappedEventName(eventName: string): string {
    let name = toPascalCase(eventName)
    if (!name.endsWith("Event")) name += "Event"
    return name
  }

  private static escapePropertyName(name: string): ts.PropertyName {
    if (name.includes("-")) {
      return ts.factory.createStringLiteral(name)
    }
    return ts.factory.createIdentifier(name)
  }

  static needsNoSelfAnnotation(node: ts.Node) {
    return ts.isInterfaceDeclaration(node) && node.members.some((m) => ts.isMethodSignature(m))
  }

  static addNoSelfAnnotationOnly(node: ts.InterfaceDeclaration) {
    if (!DefinitionsGenerator.needsNoSelfAnnotation(node)) return
    const jsDoc = ts.factory.createJSDocComment(undefined, [DefinitionsGenerator.noSelfAnnotation])
    addFakeJSDoc(node, jsDoc)
  }

  generateDeclarations(): Map<string, string> {
    this.generateAll()
    if (this.errorOnWarnings && this.warnings.length !== 0) {
      throw new Error("There are incomplete definition warnings:\n" + this.warnings.join("\n"))
    }
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
    this.preprocessAll()
    generateBuiltins(this)
    generateDefines(this)
    generateEvents(this)
    generateClasses(this)
    generateGlobalObjects(this)
    generateConcepts(this)
    this.checkManuallyDefined()
  }

  private preprocessAll() {
    for (const type of [this.apiDocs.classes, this.apiDocs.builtin_types, this.apiDocs.global_objects].flat()) {
      this.typeNames[type.name] = type.name
    }

    for (const builtin of this.apiDocs.builtin_types) {
      if (builtin.name === "boolean" || builtin.name === "string" || builtin.name === "table") continue
      this.numericTypes.add(builtin.name)
    }

    for (const event of this.apiDocs.events) {
      this.typeNames[event.name] = DefinitionsGenerator.getMappedEventName(event.name)
    }
    const addDefine = (define: Define, parent: string) => {
      const name = parent + (parent ? "." : "") + define.name
      this.typeNames[name] = name
      this.defines.set(name, define)
      if (define.values) {
        for (const value of define.values) {
          const valueName = name + "." + value.name
          this.typeNames[valueName] = valueName
        }
      }
      if (define.subkeys) {
        for (const subkey of define.subkeys) {
          addDefine(subkey, name)
        }
      }
    }
    addDefine(this.rootDefine, "")

    preprocessConcepts(this)

    for (const def of Object.values(this.manualDefinitions as Record<string, RootDef>)) {
      const addBefore = def.annotations.addBefore?.[0]
      const addTo = def.annotations.addTo?.[0]
      const node = def.node
      if (addBefore) {
        if (addTo) throw new Error(`Cannot specify both addBefore and addTo for ${node.name.text}`)

        if (!this.addBefore.has(addBefore)) {
          this.addBefore.set(addBefore, [])
        }
        this.addBefore.get(addBefore)!.push(node)
      }
      if (addTo) {
        if (!this.addTo.has(addTo)) {
          this.addTo.set(addTo, [])
        }
        this.addTo.get(addTo)!.push(node)
      }
      if (!(addBefore || addTo)) continue
      ts.setEmitFlags(node, ts.EmitFlags.NoLeadingComments)
      const docs = node.jsDoc!
      if (docs.length > 1) {
        for (const doc of docs.slice(1)) {
          addFakeJSDoc(node, doc, this.manualDefinitionsSource)
        }
      }
    }
  }

  private checkManuallyDefined() {
    for (const [name, d] of Object.entries(this.manualDefinitions)) {
      const def = d!
      const hasAdd = def.annotations.addBefore || def.annotations.addTo
      const isExisting = name in this.typeNames
      if (!!hasAdd === isExisting) {
        this.warnIncompleteDefinition(
          `Manually defined declaration ${isExisting ? "matches" : "does not match"} existing statement, but ${
            hasAdd ? "has" : "does not have"
          } add annotation:`,
          name
        )
      }
    }
    for (const name of this.addBefore.keys()) {
      this.warnIncompleteDefinition("Could not find existing statement", name, "to add before")
    }

    for (const name of this.addTo.keys()) {
      this.warnIncompleteDefinition("Could not find existing file", name, "to add to")
    }
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
    return new Statements(this.addBefore)
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
              `Attribute ${parent}.${attribute.type} has different read/write type, but manually defined as one type`
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
    let member: ts.PropertySignature
    const existingProperty = existingContainer?.members[parameter.name]?.[0]
    if (existingProperty) {
      if (!ts.isPropertySignature(existingProperty)) {
        throw new Error(
          `Manual define for ${parent}.${parameter.name} should be a property signature, got ${
            ts.SyntaxKind[existingProperty.kind]
          } instead`
        )
      }
      member = existingProperty
    } else {
      const type = this.mapTypeWithTransforms(parameter, parent, parameter.type, read, write)
      // todo: maybe different read/write types for these, too?
      // if (read && write && type.read !== type.write) {
      //   this.warnIncompleteDefinition(
      //     "Read and write types different in reading parameter as property: " +
      //       printNode(type.read!) +
      //       " " +
      //       printNode(type.write!)
      //   )
      // }
      member = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        DefinitionsGenerator.escapePropertyName(parameter.name),
        parameter.optional ? Tokens.question : undefined,
        type.write ?? type.read
      )
    }
    return this.addJsDoc(member, parameter, undefined)
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
    const type = this.tryMakeStringEnum(member, baseType) ?? this.mapTypeRaw(baseType, read, write)
    const isNullable = !(member as Parameter).optional && this.isNullableFromDescription(member, parent)
    if (isNullable) {
      return mergeUnion(type, Types.undefined)
    }
    return type
  }

  mapTypeRaw(type: Type, read: true, write: false): { read: ts.TypeNode }
  mapTypeRaw(type: Type, read: false, write: true): { write: ts.TypeNode }
  mapTypeRaw(type: Type, read: true, write: true): { read: ts.TypeNode; write: ts.TypeNode }
  mapTypeRaw(type: Type, read: boolean, write: boolean): { read?: ts.TypeNode; write?: ts.TypeNode }

  mapTypeRaw(type: Type, read: boolean, write: boolean): RWType {
    if (typeof type === "string") {
      const conceptReadWrite = this.conceptUsage.get(type)
      if (conceptReadWrite) {
        const used = this.usedConceptReadWrite.has(type)
        if (used) {
          if ((!conceptReadWrite.read && read) || (!conceptReadWrite.write && write)) {
            this.warnIncompleteDefinition(`Concept ${type} usage changed after used`)
          }
        }
        conceptReadWrite.read ||= read
        conceptReadWrite.write ||= write
      }

      if (this.tableOrArrayConcepts.has(type)) {
        return {
          read: read ? ts.factory.createTypeReferenceNode(type + "Table") : undefined,
          write: write ? ts.factory.createTypeReferenceNode(type) : undefined,
        }
      }
      const outType = ts.factory.createTypeReferenceNode(type)
      return { read: read ? outType : undefined, write: write ? outType : undefined }
    }
    if (type.complex_type === "variant") {
      const types = type.options.map((m) => this.mapTypeRaw(m, read, write))
      const readType = read ? ts.factory.createUnionTypeNode(types.map((x) => x.read!)) : undefined
      if (read && write) {
        if (types.every((x) => x.read === x.write)) return { read: readType, write: readType }
      }
      const writeType = write ? ts.factory.createUnionTypeNode(types.map((x) => x.write!)) : undefined
      return { read: readType, write: writeType }
    }
    if (type.complex_type === "array") {
      const valueType = this.mapTypeRaw(type.value, read, write)
      const readType = read ? ts.factory.createArrayTypeNode(valueType.read!) : undefined
      if (read && write) {
        if (valueType.read === valueType.write) {
          return { read: readType, write: readType }
        }
      }
      return {
        read: readType,
        write: write ? ts.factory.createArrayTypeNode(valueType.write!) : undefined,
      }
    }
    if (type.complex_type === "dictionary") {
      let recordType = "Record"
      if (!this.isIndexableType(type.key)) {
        this.warnIncompleteDefinition("Not typescript indexable type for key in dictionary complex type: ", type)
        recordType = "LuaTable"
      }
      const keyType = this.mapTypeRaw(type.key, true, false).read
      const valueType = this.mapTypeRaw(type.value, read, write)
      if (read && write) {
        if (valueType.read !== valueType.write) {
          this.warnIncompleteDefinition(
            "Different read/write type for record value: " + printNode(valueType.write!),
            type
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
      const keyType = this.mapTypeRaw(type.key, true, false).read
      const valueType = this.mapTypeRaw(type.value, true, false).read
      return { read: ts.factory.createTypeReferenceNode("LuaCustomTable", [keyType, valueType]) }
    }
    if (type.complex_type === "function") {
      const outType = ts.factory.createFunctionTypeNode(
        undefined,
        type.parameters.map((value, index) => {
          const paramType = this.mapTypeRaw(value, true, false).read
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
        read: ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [this.mapTypeRaw(type.value, true, false).read]),
      }
    }
    if (type.complex_type === "table") {
      if (type.variant_parameter_groups) {
        throw new Error("Variant parameter complex type not yet supported")
      }
      const outType = ts.factory.createTypeLiteralNode(
        type.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m, "<<table type>>", read, write))
      )
      return {
        read: read ? outType : undefined,
        write: write ? outType : undefined,
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

  tryGetUnionTypeStringLiterals(typeNode: ts.TypeNode): string[] | undefined {
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
  private tryMakeStringEnum(
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
        (matches.size === 1 && member.description.match(/One of `"[a-zA-Z-_]+?"`/))
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

  private isNullableFromDescription(
    member: {
      description: string
      name?: string
    },
    parent: string
  ): boolean {
    const description = member.description + " " + (member as Method).return_description ?? ""
    const nullableRegex = /(returns|or|be|possibly|otherwise|else|) [`']?nil[`']?|`?nil`? (if|when|otherwise)/i
    const nullable = description.match(nullableRegex)
    if (nullable) {
      if (!description.match(/[`' ]nil/i)) {
        this.warnIncompleteDefinition(
          `Inconsistency in nullability in description: ${parent}.${member.name}\n`,
          indent(description)
        )
      }
      return true
    }
    // if ((member as WithNotes).notes?.some((note) => note.match(nullableRegex))) {
    //   console.log(chalk.blueBright("Possibly nullable from note: ", (member as WithNotes).notes))
    // }
    return false
  }

  // assumed as write-values
  createVariantParameterTypes(
    name: string,
    variants: WithParameterVariants,
    statements: Statements,
    read: boolean,
    write: boolean,
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
      member: this.mapParameterToProperty(p, baseName, read, write, existingBase),
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
        types = this.tryGetUnionTypeStringLiterals(property.member.type!)
        if (!types) {
          throw new Error(`Discriminant property ${name}.${discriminantProperty} is not a string literal union`)
        }
      }
      unusedTypes = new Set<string>(types)
    }

    const groupNames: ts.TypeNode[] = []
    const heritageClause = [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(baseName), undefined),
      ]),
    ]
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

    for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
      const isOtherTypes = group.name === "Other"
      if (isOtherTypes && (!unusedTypes || unusedTypes.size === 0)) {
        this.warnIncompleteDefinition('"Other" variant parameter group with no other values')
        continue
      }
      const fullName =
        toPascalCase(isDefine ? group.name.substring(group.name.lastIndexOf(".") + 1) : group.name) + shortName
      const existing = this.manualDefinitions[fullName]
      if (existing?.kind === "namespace") {
        throw new Error(`Manual definition for variant parameter type ${fullName} cannot be a namespace`)
      }

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
              isOtherTypes ? ts.factory.createUnionTypeNode(Array.from(unusedTypes!).map(getType)) : getType(group.name)
            )
          )
        }
        members.push(
          ...group.parameters
            .sort(sortByOrder)
            .map((p) => this.mapParameterToProperty(p, fullName, read, write, existing))
        )
        declaration = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          fullName,
          undefined,
          heritageClause,
          members
        )
      }
      this.addJsDoc(declaration, group, undefined)
      statements.add(declaration)

      this.typeNames[fullName] = fullName
      groupNames.push(ts.factory.createTypeReferenceNode(fullName))
    }
    const declaration = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      name,
      undefined,
      ts.factory.createUnionTypeNode(groupNames)
    )
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
      return this.docUrlBase + origLink
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

      if (codeBlock) result += "```lua" + codeBlock + "```"
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
      relative_link = "Events.html#" + reference
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
    return this.docUrlBase + relative_link
  }

  addJsDoc<T extends ts.Node>(
    node: T,
    element: {
      description: string
      subclasses?: string[]
      variant_parameter_description?: string
    } & WithNotes,
    reference: string | undefined,
    tags?: ts.JSDocTag[]
  ): T {
    let comment = [
      this.processDescription(element.description),
      this.processDescription(element.variant_parameter_description),
      element.notes?.map((n) => this.processDescription("**Note**: " + n)),
      element.subclasses &&
        `_Can only be used if this is ${
          element.subclasses.length === 1
            ? element.subclasses[0]
            : `${element.subclasses.slice(0, -1).join(", ")} or ${element.subclasses[element.subclasses.length - 1]}`
        }_`,
    ]
      .flat()
      .filter((x) => !!x)
      .join("\n\n")

    tags = tags || []
    if (element.examples) {
      tags.push(
        ...element.examples.map((e) =>
          ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("example"), "\n" + this.processDescription(e))
        )
      )
    }
    if (element.see_also) {
      tags.push(
        ...element.see_also?.map((l) =>
          ts.factory.createJSDocSeeTag(
            undefined,
            ts.factory.createJSDocNameReference(ts.factory.createIdentifier("@link " + l.replace(/::/g, ".")))
          )
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
    this.warnings.push(args.join(" "))
  }
}
