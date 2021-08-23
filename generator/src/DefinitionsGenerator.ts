import ts from "typescript"
import { createConst, createNamespace, mergeUnion, Modifiers, Tokens, toPascalCase, Types } from "./genUtil"
import { assertNever, getFirst, sortByOrder } from "./util"
import { emptySourceFile, printer } from "./printer"
import {
  AnyDef,
  getAnnotations,
  InterfaceDef,
  processManualDefinitions,
  RootDef,
  TypeAliasDef,
} from "./manualDefinitionsProcessing"
import chalk from "chalk"

interface MemberAndOriginal {
  original: Method | Attribute
  member: ts.TypeElement | ts.MethodSignature[]
}
interface GeneratedClass {
  readonly clazz: Class
  readonly existing: InterfaceDef | TypeAliasDef | undefined
  readonly superTypes: ts.ExpressionWithTypeArguments[]
  readonly members: MemberAndOriginal[]

  arrayType?: {
    readonly type: ts.TypeNode
    readonly: boolean
  }
  indexType?: ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined

  discriminatedUnionInfo?: {
    property: string
    types: string[]
    // empty string == base
    membersBySubclass: Map<string, MemberAndOriginal[]>
  }
}

class Statements {
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

export default class DefinitionsGenerator {
  private outFiles = new Map<string, ts.Statement[]>()
  private readonly manualDefinitions: Record<string, RootDef | undefined>

  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  private defines = new Map<string, Define>()
  private events = new Map<string, Event>(this.apiDocs.events.map((e) => [e.name, e]))
  private classes = new Map<string, Class>(this.apiDocs.classes.map((e) => [e.name, e]))
  // private classMembers = new Map<string, Map<string, Attribute | Method>>()
  private concepts = new Set<string>(this.apiDocs.concepts.map((e) => e.name))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))

  private tableOrArrayConcepts = new Set<string>()
  private numericTypes = new Set<string>()
  // original -> mapped
  // also a record of which types exists
  private typeNames: Record<string, string> = {}

  private addBefore = new Map<string, ts.Statement[]>()
  private addTo = new Map<string, ts.Statement[]>()

  private readonly rootDefine: Define = {
    order: 0,
    name: "defines",
    description: "",
    subkeys: this.apiDocs.defines,
  }

  private readonly docUrlBase = `https://lua-api.factorio.com/${this.apiDocs.application_version}/`

  private readonly warnings: string[] = []

  private static keywords = new Set(["function", "interface"])
  private static noSelfAnnotation = ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("noSelf"))

  private static EventTypes = "EventTypes"
  private static EventFilters = "EventFilters"

  constructor(
    private readonly apiDocs: FactorioApiJson,
    private readonly manualDefinitionsSource: ts.SourceFile,
    private readonly checker: ts.TypeChecker,
    private readonly docs: boolean,
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

  generateDeclarations(): Map<string, string> {
    this.generateAll()
    if (this.errorOnWarnings && this.warnings.length !== 0) {
      throw new Error(this.warnings.join("\n"))
    }
    const result = new Map<string, string>()
    for (const [fileName, statements] of this.outFiles) {
      let content = ""
      for (const statement of statements) {
        content += printer.printNode(ts.EmitHint.Unspecified, statement, this.manualDefinitionsSource)
        content += "\n\n"
      }
      result.set(fileName, content)
    }
    result.set("index", this.generateIndex())
    return result
  }

  private generateAll() {
    this.preprocessAll()
    this.generateBuiltins()
    this.generateDefines()
    this.generateEvents()
    this.generateClasses()
    this.generateConcepts()
    this.generateGlobalObjects()
    this.generateIndex()
    this.checkManuallyDefined()
  }

  private preprocessAll() {
    for (const type of [this.apiDocs.classes, this.apiDocs.builtin_types, this.apiDocs.global_objects].flat()) {
      this.typeNames[type.name] = type.name
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

    for (const concept of this.apiDocs.concepts) {
      this.typeNames[concept.name] = concept.name

      const existing = this.manualDefinitions[concept.name]
      const isTableOrArrayConcept = concept.category === "table_or_array"
      if (isTableOrArrayConcept || existing?.annotations.tableOrArray) {
        this.tableOrArrayConcepts.add(concept.name)
      }
      if (isTableOrArrayConcept) {
        this.typeNames[concept.name + "Table"] = concept.name
        this.typeNames[concept.name + "Array"] = concept.name
      }
    }

    this.typeNames[DefinitionsGenerator.EventTypes] = DefinitionsGenerator.EventTypes
    this.typeNames[DefinitionsGenerator.EventFilters] = DefinitionsGenerator.EventFilters

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
      if (!this.docs) {
        ts.setEmitFlags(node, ts.EmitFlags.NoNestedComments | ts.EmitFlags.NoComments)
      } else {
        ts.setEmitFlags(node, ts.EmitFlags.NoLeadingComments)
        const docs = node.jsDoc!
        if (docs.length > 1) {
          for (const doc of docs.slice(1)) {
            addFakeJSDoc(node, doc, this.manualDefinitionsSource)
          }
        }
      }
    }
  }

  private addFile(name: string, statements: Statements) {
    const result = statements.statements
    const addTo = this.addTo.get(name) || []
    if (addTo) {
      result.push(...addTo)
      this.addTo.delete(name)
    }
    this.outFiles.set(name, result)
  }

  private newStatements() {
    return new Statements(this.addBefore)
  }

  private generateBuiltins() {
    const statements = this.newStatements()
    for (const builtin of this.apiDocs.builtin_types.sort(sortByOrder)) {
      if (builtin.name === "boolean" || builtin.name === "string") continue
      let type: ts.KeywordTypeNode
      if (builtin.name === "table") {
        type = Types.object
      } else {
        this.numericTypes.add(builtin.name)
        type = Types.number
      }
      statements.add(
        this.addJsDoc(
          ts.factory.createTypeAliasDeclaration(undefined, undefined, builtin.name, undefined, type),
          builtin,
          builtin.name
        )
      )
    }
    this.addFile("builtin-types", statements)
  }

  private generateDefines() {
    const generateDefinesDeclaration = (
      define: Define,
      parent: string,
      existing: AnyDef | undefined,
      modifiers?: ts.Modifier[]
    ): ts.Statement[] => {
      let declarations: ts.Statement[]
      const thisPath = parent + (parent ? "." : "") + define.name
      if (define.values) {
        if (existing?.kind === "namespace" && existing?.annotations.symbolEnum) {
          // namespace name { const member: unique symbol }
          // type name = typeof name[keyof typeof name]
          const members = define.values.sort(sortByOrder).map((m) => {
            const statement = createConst(
              m.name,
              ts.factory.createTypeOperatorNode(ts.SyntaxKind.UniqueKeyword, Types.symbol)
            )
            if (thisPath === "defines.events") {
              this.addJsDoc(
                statement,
                {
                  description: `Event type: {@link ${DefinitionsGenerator.getMappedEventName(m.name)}}`,
                },
                undefined
              )
            }
            return statement
          })

          const namespace = createNamespace(undefined, define.name, members)

          const typeofExp = ts.factory.createExpressionWithTypeArguments(
            ts.factory.createTypeOfExpression(ts.factory.createIdentifier(define.name)),
            undefined
          )
          const keyofTypeof = ts.factory.createTypeOperatorNode(ts.SyntaxKind.KeyOfKeyword, typeofExp)
          const type = ts.factory.createTypeAliasDeclaration(
            undefined,
            undefined,
            define.name,
            undefined,
            ts.factory.createIndexedAccessTypeNode(typeofExp, keyofTypeof)
          )

          declarations = [namespace, type]
        } else {
          if (existing && existing.kind !== "enum") {
            throw new Error(
              `Manual definition for ${thisPath} should be a enum, got ${ts.SyntaxKind[existing.node.kind]}`
            )
          }
          const members = define.values
            .sort(sortByOrder)
            .map((m, i) =>
              this.addJsDoc(
                ts.factory.createEnumMember(
                  m.name,
                  existing?.annotations.numericEnum ? ts.factory.createNumericLiteral(i) : undefined
                ),
                m,
                thisPath + "." + m.name
              )
            )
          declarations = [ts.factory.createEnumDeclaration(undefined, modifiers, define.name, members)]
        }
      } else if (define.subkeys) {
        if (existing && existing.kind !== "namespace") {
          throw new Error(
            `Manual definition for ${thisPath} should be a namespace, got ${ts.SyntaxKind[existing.node.kind]}`
          )
        }
        const subkeys = define.subkeys
          .sort(sortByOrder)
          .flatMap((d) => generateDefinesDeclaration(d, thisPath, existing?.members[d.name]))
        declarations = [createNamespace(modifiers, define.name, subkeys)]
      } else if (!existing) {
        this.warnIncompleteDefinition("Incomplete define for", thisPath)
        declarations = [
          ts.factory.createTypeAliasDeclaration(undefined, undefined, define.name, undefined, Types.unknown),
        ]
      } else {
        declarations = [existing.node]
      }
      if (Array.isArray(declarations)) {
        declarations.forEach((d) => {
          this.addJsDoc(d, define, thisPath)
        })
      }
      return declarations
    }
    const defines = generateDefinesDeclaration(this.rootDefine, "", this.manualDefinitions.defines, [Modifiers.declare])
    const statements = this.newStatements()
    statements.add(defines[0])
    this.addFile("defines", statements)
  }

  private generateEvents() {
    const statements = this.newStatements()
    for (const event of this.apiDocs.events.sort(sortByOrder)) {
      const name = DefinitionsGenerator.getMappedEventName(event.name)
      statements.add(
        this.addJsDoc(
          ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            name,
            undefined,
            undefined,
            event.data.sort(sortByOrder).map((p) => {
              if (p.name === "name" && event.name !== "CustomInputEvent") {
                p.type = "typeof " + p.type + "." + event.name
              }
              return this.mapParameterToProperty(p, name)
            })
          ),
          event,
          event.name
        )
      )
    }

    const generateEventTypes = () => {
      const eventTypesMembers: ts.PropertySignature[] = []
      const eventFiltersMembers: ts.PropertySignature[] = []
      const definesEvents = ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("defines"), "events")
      for (const eventDefine of this.defines.get("defines.events")!.values!) {
        const name = eventDefine.name
        const event = this.events.get(name)
        if (!event) throw new Error(`Event define without event type: ${name}`)
        const propertyName = ts.factory.createComputedPropertyName(
          ts.factory.createPropertyAccessExpression(definesEvents, name)
        )

        const eventTypeName = DefinitionsGenerator.getMappedEventName(name)
        eventTypesMembers.push(
          ts.factory.createPropertySignature(
            undefined,
            propertyName,
            undefined,
            ts.factory.createTypeReferenceNode(eventTypeName)
          )
        )

        const eventFilterName = event.description.match(/Lua[A-Za-z]+?EventFilter/)?.[0]
        if (eventFilterName) {
          eventFiltersMembers.push(
            ts.factory.createPropertySignature(
              undefined,
              propertyName,
              undefined,
              ts.factory.createTypeReferenceNode(eventFilterName)
            )
          )
        }
      }

      statements.add(
        ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          DefinitionsGenerator.EventTypes,
          undefined,
          undefined,
          eventTypesMembers
        )
      )
      statements.add(
        ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          DefinitionsGenerator.EventFilters,
          undefined,
          undefined,
          eventFiltersMembers
        )
      )
    }
    generateEventTypes()

    this.addFile("events", statements)
  }

  private static getMappedEventName(eventName: string): string {
    let name = toPascalCase(eventName)
    if (!name.endsWith("Event")) name += "Event"
    return name
  }

  private generateClasses() {
    const statements = this.newStatements()

    for (const clazz of this.apiDocs.classes.sort(sortByOrder)) {
      const existing = this.manualDefinitions[clazz.name]
      if (existing && existing.kind !== "interface" && existing.kind !== "type") {
        throw new Error("Manual define for class should be interface or type alias")
      }
      const generated: GeneratedClass = {
        clazz,
        existing,
        superTypes: [],
        members: [],
      }
      for (const step of [
        fillSupertypes,
        fillArrayType,
        fillMethods,
        fillAttributes,
        fillIndexOperator,
        shiftLuaObjectMembers,
        processDiscriminatedUnion,
        createDeclarations,
      ]) {
        step.call(this, generated)
      }
    }

    this.addFile("classes", statements)

    function fillSupertypes(this: DefinitionsGenerator, { clazz, existing, superTypes }: GeneratedClass) {
      if (clazz.base_classes) {
        superTypes.push(
          ...clazz.base_classes.map((b) =>
            ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(b), undefined)
          )
        )
      }
      if (existing) {
        if (existing.kind === "interface") {
          superTypes.push(...existing.supertypes)
        } else if (existing.kind === "type") {
          superTypes.push(
            ...existing.supertypes.map((t) =>
              ts.factory.createExpressionWithTypeArguments(
                ts.factory.createIdentifier(t.getText(this.manualDefinitionsSource)),
                undefined
              )
            )
          )
        } else {
          assertNever(existing)
        }
      }
    }

    function fillArrayType(generated: GeneratedClass) {
      const { clazz, existing } = generated
      if (existing?.kind !== "interface") return
      const arrayType = existing.supertypes.find(
        (t) => ts.isIdentifier(t.expression) && (t.expression.text === "Array" || t.expression.text === "ReadonlyArray")
      )
      if (!arrayType) return
      const type = arrayType.typeArguments?.[0]
      const readonly = (arrayType.expression as ts.Identifier).text === "ReadonlyArray"
      if (!type) throw new Error(`Manual define ${clazz.name} extends an array type without type arguments`)
      generated.arrayType = { type, readonly }
      // array inherit with type aliases not supported
    }

    function fillMethods(this: DefinitionsGenerator, { clazz, existing, members, arrayType }: GeneratedClass) {
      members.push(
        ...clazz.methods.sort(sortByOrder).map((method) => ({
          original: method,
          member: mapMethod.call(this, method, clazz.name, existing),
        }))
      )

      const callOperator = clazz.operators.find((x) => x.name === "call") as CallOperator | undefined
      if (callOperator) {
        // manual define for operator not supported yet
        const asMethod = mapMethod.call(
          this,
          {
            ...callOperator,
            name: "operator%20()",
          },
          clazz.name,
          undefined
        ) as ts.MethodSignature
        const callSignature = ts.factory.createCallSignature(undefined, asMethod.parameters, asMethod.type)
        ts.setSyntheticLeadingComments(callSignature, ts.getSyntheticLeadingComments(asMethod))
        members.push({ original: callOperator, member: callSignature })
      }
      const lengthOperator = clazz.operators.find((x) => x.name === "length") as LengthOperator | undefined
      if (lengthOperator) {
        // length operator is (supposed to be) numeric, so not map with transforms
        const type = this.mapTypeRaw(lengthOperator.type, true)
        const lengthProperty = this.addJsDoc(
          ts.factory.createPropertySignature(
            [Modifiers.readonly],
            "length",
            undefined,
            arrayType ? type : ts.factory.createTypeReferenceNode("LuaLengthMethod", [type])
          ),
          lengthOperator,
          clazz.name + ".operator%20#"
        )
        members.push({ original: lengthOperator, member: lengthProperty })
      }
    }

    function fillAttributes(this: DefinitionsGenerator, { clazz, existing, members }: GeneratedClass) {
      members.push(
        ...clazz.attributes.sort(sortByOrder).map((attr) => ({
          original: attr,
          member: this.mapAttribute(attr, clazz.name, existing),
        }))
      )
    }

    function fillIndexOperator(this: DefinitionsGenerator, generated: GeneratedClass): void {
      const { clazz, existing, arrayType, members } = generated
      const indexOperator = clazz.operators.find((x) => x.name === "index") as IndexOperator | undefined
      if (!indexOperator) return
      if (arrayType) {
        const indexSignature = this.addJsDoc(
          ts.factory.createIndexSignature(
            undefined,
            arrayType.readonly ? [Modifiers.readonly] : undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                "index",
                undefined,
                Types.number,
                undefined
              ),
            ],
            arrayType.type
          ),
          indexOperator,
          clazz.name + ".operator%20[]"
        )
        members.push({ original: indexOperator, member: indexSignature })
        return
      }
      if (!(existing?.kind === "type" && existing.indexOperator)) {
        this.warnIncompleteDefinition("No index operator manual definition for class", clazz.name)
        return
      }

      const existingIndexOp = existing.indexOperator
      const shortName = removeLuaPrefix(clazz.name)
      if (ts.isMappedTypeNode(existingIndexOp)) {
        generated.indexType = ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          shortName + "Index",
          existing.node.typeParameters,
          this.addJsDoc(existingIndexOp, indexOperator, clazz.name + ".operator%20[]")
        )
      } else if (ts.isTypeLiteralNode(existingIndexOp)) {
        const indexSignature = this.addJsDoc(
          existingIndexOp.members[0] as ts.IndexSignatureDeclaration,
          indexOperator,
          clazz.name + ".operator%20[]"
        )
        generated.indexType = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          shortName + "Index",
          undefined,
          undefined,
          [indexSignature]
        )
      } else {
        assertNever(existingIndexOp)
      }
    }

    function shiftLuaObjectMembers(this: DefinitionsGenerator, { members, clazz }: GeneratedClass) {
      const standardMembers: {
        valid?: { original: Attribute; member: ts.PropertySignature }
        object_name?: { original: Attribute; member: ts.PropertySignature }
        help?: { original: Method; member: ts.MethodSignature }
      } = {}
      for (let i = 0; i < members.length; i++) {
        const group = members[i]
        const member = group.member
        if (Array.isArray(member)) continue
        if (!member.name || !ts.isIdentifier(member.name)) continue
        const name = member.name.text
        if (name === "valid" || name === "object_name" || name === "help") {
          standardMembers[name] = group as never
          members.splice(i, 1)
          i--
        }
      }

      function setNoRefJsDoc(
        this: DefinitionsGenerator,
        property: { original: Attribute | Method; member: ts.TypeElement }
      ) {
        ts.setSyntheticLeadingComments(property.member, undefined)
        this.addJsDoc(property.member, property.original, undefined)
      }

      if (standardMembers.valid) {
        const property = standardMembers.valid
        setNoRefJsDoc.call(this, property)
        members.push(standardMembers.valid)
      }

      if (standardMembers.object_name) {
        const attribute = standardMembers.object_name
        const member = attribute.member
        setNoRefJsDoc.call(this, attribute)
        if (!clazz.description.match(/abstract/i)) {
          attribute.member = ts.factory.updatePropertySignature(
            member,
            member.modifiers,
            member.name,
            member.questionToken,
            Types.stringLiteral(clazz.name)
          )
        }
        members.push(standardMembers.object_name)
      }

      if (standardMembers.help) {
        const property = standardMembers.help
        setNoRefJsDoc.call(this, property)
        members.push(standardMembers.help)
      }
    }

    function processDiscriminatedUnion(this: DefinitionsGenerator, generated: GeneratedClass) {
      const { clazz, existing } = generated
      if (!existing) return
      const discriminantProperty = existing.annotations.discriminatedUnion?.[0]
      if (discriminantProperty === undefined) return

      const property = generated.members.find((m) => m.original.name === discriminantProperty)
      if (property === undefined) {
        throw new Error(`Discriminant property ${discriminantProperty} was not found on ${clazz.name}`)
      }
      const memberNode = property.member
      if (Array.isArray(memberNode) || !ts.isPropertySignature(memberNode)) {
        throw new Error(`Discriminant property ${clazz.name}.${discriminantProperty} should be a property signature`)
      }
      const types = this.tryGetUnionTypeStringLiterals(memberNode.type!)
      if (!types) {
        throw new Error(`Discriminant property ${clazz.name}.${discriminantProperty} is not a string literal union`)
      }
      const normalizedNames = new Map(types.map((t) => [normalizeName(t), t]))

      const membersBySubclass = new Map<string, MemberAndOriginal[]>(
        types.map((t) => [
          t,
          [
            {
              member: ts.factory.updatePropertySignature(
                memberNode,
                memberNode.modifiers,
                memberNode.name,
                memberNode.questionToken,
                Types.stringLiteral(t)
              ),
              original: property.original,
            },
          ],
        ])
      )
      membersBySubclass.set("", [])

      for (const memberAndOriginal of generated.members) {
        const original = memberAndOriginal.original
        const existingMember = existing.members[original.name]
        const subclasses =
          (existingMember && getAnnotations(existingMember as ts.JSDocContainer).subclasses) ?? original.subclasses
        if (subclasses) {
          for (const subclass of subclasses) {
            const name = normalizedNames.get(normalizeName(subclass))
            if (name === undefined) {
              throw new Error(
                `Subclass restriction ${subclass} for ${clazz.name}.${
                  original.name
                } does not fit subclass types: ${Array.from(normalizedNames.keys())}`
              )
            }
            membersBySubclass.get(name)!.push(memberAndOriginal)
          }
        } else {
          membersBySubclass.get("")!.push(memberAndOriginal)
        }
      }

      generated.discriminatedUnionInfo = {
        property: discriminantProperty,
        types,
        membersBySubclass: membersBySubclass,
      }

      function normalizeName(name: string) {
        return name.replace(/[-_]/g, "").toLowerCase()
      }
    }

    function createDeclarations(
      this: DefinitionsGenerator,
      { clazz, existing, superTypes, members: allMembers, indexType, discriminatedUnionInfo }: GeneratedClass
    ) {
      if (indexType) {
        statements.add(indexType)
      }
      const shortName = removeLuaPrefix(clazz.name)
      const indexTypeName = indexType ? shortName + "Index" : undefined
      if (!discriminatedUnionInfo) {
        createDeclaration.call(this, existing, indexTypeName, clazz, clazz.name, superTypes, allMembers)
      } else {
        const baseName = "Base" + shortName
        createDeclaration.call(
          this,
          existing,
          undefined,
          undefined,
          baseName,
          superTypes,
          discriminatedUnionInfo.membersBySubclass.get("")!
        )
        const groupSupertypes = [
          ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(baseName), undefined),
        ]
        for (const [groupName, members] of discriminatedUnionInfo.membersBySubclass) {
          if (groupName === "") continue
          createDeclaration.call(
            this,
            existing,
            indexTypeName,
            undefined,
            toPascalCase(groupName) + shortName,
            groupSupertypes,
            members
          )
        }

        const types = discriminatedUnionInfo.types.map((groupName) =>
          ts.factory.createTypeReferenceNode(
            toPascalCase(groupName) + (indexTypeName ? shortName + "Members" : clazz.name)
          )
        )
        const unionDeclaration = ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          indexTypeName ? shortName + "Members" : clazz.name,
          undefined,
          ts.factory.createUnionTypeNode(types)
        )
        if (!indexTypeName) this.addJsDoc(unionDeclaration, clazz, clazz.name)
        statements.add(unionDeclaration)

        if (indexTypeName) {
          const declaration = ts.factory.createTypeAliasDeclaration(
            undefined,
            undefined,
            clazz.name,
            existing?.node.typeParameters,
            ts.factory.createIntersectionTypeNode([
              ts.factory.createTypeReferenceNode(shortName + "Members"),
              ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(indexTypeName)),
            ])
          )
          this.addJsDoc(declaration, clazz, clazz.name)
          statements.add(declaration)
        }
      }
    }

    function createDeclaration(
      this: DefinitionsGenerator,
      existing: InterfaceDef | TypeAliasDef | undefined,
      indexTypeName: string | undefined,
      classForDocs: Class | undefined,
      name: string,
      superTypes: ts.ExpressionWithTypeArguments[],
      members: MemberAndOriginal[]
    ) {
      const baseDeclaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        indexTypeName ? name + "Members" : name,
        indexTypeName ? undefined : existing?.node.typeParameters,
        superTypes.length !== 0
          ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, superTypes)]
          : undefined,
        members.flatMap((m) => m.member)
      )
      statements.add(baseDeclaration)

      if (!indexTypeName) {
        if (classForDocs) {
          this.addJsDoc(baseDeclaration, classForDocs, classForDocs.name, [DefinitionsGenerator.noSelfAnnotation])
        } else {
          DefinitionsGenerator.addNoSelfAnnotationOnly(baseDeclaration)
        }
      } else {
        DefinitionsGenerator.addNoSelfAnnotationOnly(baseDeclaration)
        const typeArguments = existing?.node.typeParameters?.map((p) => ts.factory.createTypeReferenceNode(p.name))
        const declaration = ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          name,
          existing?.node.typeParameters,
          ts.factory.createIntersectionTypeNode([
            ts.factory.createTypeReferenceNode(name + "Members"),
            ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(indexTypeName), typeArguments),
          ])
        )
        if (classForDocs) {
          this.addJsDoc(declaration, classForDocs, classForDocs.name)
        }
        statements.add(declaration)
      }
    }

    function mapMethod(
      this: DefinitionsGenerator,
      method: Method,
      parent: string,
      existingContainer: InterfaceDef | TypeAliasDef | undefined
    ): ts.MethodSignature[] | ts.MethodSignature {
      const existingMethods = existingContainer?.members[method.name]
      const firstExistingMethod = existingMethods?.[0]
      const thisPath = parent + "." + method.name
      const parameters = method.takes_table
        ? [
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              "params",
              method.table_is_optional ? Tokens.question : undefined,
              method.variant_parameter_groups !== undefined
                ? this.createVariantParameterTypes(
                    (firstExistingMethod &&
                      getAnnotations(firstExistingMethod as ts.JSDocContainer).variantsName?.[0]) ??
                      removeLuaPrefix(parent) + toPascalCase(method.name),
                    method,
                    statements
                  )
                : ts.factory.createTypeLiteralNode(
                    method.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m, thisPath))
                  )
            ),
          ]
        : method.parameters.sort(sortByOrder).map((m) => this.mapParameterToParameter(m, thisPath))

      if (method.variadic_type) {
        parameters.push(
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            Tokens.dotDotDot,
            "args",
            undefined,
            this.mapTypeRaw(
              {
                complex_type: "array",
                value: method.variadic_type,
              },
              false
            )
          )
        )
      }
      let members: ts.MethodSignature[] | ts.MethodSignature
      const returnType = !method.return_type
        ? Types.void
        : this.mapTypeWithTransforms(method, method.return_type, parent, true)
      if (existingMethods) {
        existingMethods.forEach((m) => {
          if (!ts.isMethodSignature(m)) {
            throw new Error(
              `Manual define for ${parent}.${method.name} should be a method signature, got ${
                ts.SyntaxKind[m.kind]
              } instead`
            )
          }
        })
        members = (existingMethods as ts.MethodSignature[]).map((m) => {
          const member = ts.factory.createMethodSignature(
            m.modifiers,
            m.name,
            m.questionToken,
            m.typeParameters,
            m.parameters.length > 0 ? m.parameters : parameters,
            m.type ?? returnType
          )
          ts.setEmitFlags(member.name, ts.EmitFlags.NoComments)
          return member
        })
      } else {
        members = ts.factory.createMethodSignature(undefined, method.name, undefined, undefined, parameters, returnType)
      }
      const tags: ts.JSDocTag[] = []
      if (this.docs) {
        if (!method.takes_table) {
          tags.push(
            ...(method.parameters as { name: string; description?: string }[])
              .concat([{ name: "args", description: method.variadic_description }])
              .filter((p) => p.description !== undefined)
              .map((p) =>
                ts.factory.createJSDocParameterTag(
                  undefined,
                  ts.factory.createIdentifier(DefinitionsGenerator.escapeParameterName(p.name)),
                  false,
                  undefined,
                  undefined,
                  this.processDescription(p.description ? "- " + p.description : undefined)
                )
              )
          )
        }
        if (method.return_description) {
          tags.push(
            ts.factory.createJSDocReturnTag(undefined, undefined, this.processDescription(method.return_description))
          )
        }
      }
      this.addJsDoc(getFirst(members), method, thisPath, tags)
      // if (Array.isArray(members)) {
      //   for (let i = 1; i < members.length; i++) {
      //     const member = members[i]
      //     addFakeJSDoc(member, ts.factory.createJSDocComment(`{@inheritDoc ${thisPath}}`))
      //   }
      // }
      return members
    }
  }

  private generateConcepts() {
    const statements = this.newStatements()
    for (const concept of this.apiDocs.concepts.sort(sortByOrder)) {
      let declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration

      function createTypeAlias(type: ts.TypeNode): ts.TypeAliasDeclaration {
        return ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
      }

      const existing = this.manualDefinitions[concept.name]
      if (existing?.kind === "namespace") {
        throw new Error(`Manual definition for concept ${concept.name} cannot be a namespace`)
      }

      if (concept.category === "concept") {
        if (existing) {
          declaration = existing.node
          if (getAnnotations(declaration).omit) continue
          ts.setEmitFlags(declaration, ts.EmitFlags.NoComments)
        } else {
          this.warnIncompleteDefinition(`No concept definition given for ${concept.name}.`)
          declaration = createTypeAlias(Types.unknown)
        }
      } else if (concept.category === "union") {
        const types = concept.options
          .sort(sortByOrder)
          .map((option) => this.mapTypeWithTransforms(option, option.type, concept.name, false))
        declaration = createTypeAlias(ts.factory.createUnionTypeNode(types))
        concept.description += concept.options
          .map(
            (option, i) =>
              option.description &&
              ` - ${
                typeof option.type === "string"
                  ? option.type
                  : printer.printNode(ts.EmitHint.Unspecified, types[i], this.manualDefinitionsSource)
              }: ${option.description}`
          )
          .filter((x) => !!x)
          .join("\n\n")
      } else if (concept.category === "struct") {
        declaration = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          concept.name,
          undefined,
          undefined,
          concept.attributes.sort(sortByOrder).map((attr) => this.mapAttribute(attr, concept.name, existing))
        )
      } else if (concept.category === "flag") {
        declaration = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          concept.name,
          undefined,
          undefined,
          concept.options.sort(sortByOrder).map((flag) =>
            this.mapParameterToProperty(
              {
                ...flag,
                type: "boolean",
                optional: true,
              },
              concept.name
            )
          )
        )
      } else if (concept.category === "table" || concept.category === "filter") {
        if (concept.variant_parameter_groups) {
          this.createVariantParameterTypes(concept.name, concept, statements, concept)
          continue
        } else {
          declaration = ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            concept.name,
            undefined,
            undefined,
            concept.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m, concept.name, existing))
          )
        }
      } else if (concept.category === "enum") {
        declaration = createTypeAlias(
          ts.factory.createUnionTypeNode(
            concept.options
              .sort(sortByOrder)
              .map((option) => this.addJsDoc(Types.stringLiteral(option.name), option, undefined))
          )
        )
      } else if (concept.category === "table_or_array") {
        const parameters = concept.parameters
          .sort(sortByOrder)
          .map((param) => this.mapParameterToProperty(param, concept.name))

        statements.add(
          ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            concept.name + "Table",
            undefined,
            undefined,
            parameters
          )
        )

        statements.add(
          ts.factory.createTypeAliasDeclaration(
            undefined,
            undefined,
            concept.name + "Array",
            undefined,
            ts.factory.createTypeOperatorNode(
              ts.SyntaxKind.ReadonlyKeyword,
              ts.factory.createTupleTypeNode(
                parameters.map((member) => {
                  const property = member as ts.PropertySignature
                  return ts.factory.createNamedTupleMember(
                    undefined,
                    property.name as ts.Identifier,
                    property.questionToken,
                    property.type!
                  )
                })
              )
            )
          )
        )

        declaration = createTypeAlias(
          ts.factory.createUnionTypeNode([
            ts.factory.createTypeReferenceNode(concept.name + "Table"),
            ts.factory.createTypeReferenceNode(concept.name + "Array"),
          ])
        )
      } else {
        assertNever(concept)
      }
      this.addJsDoc(declaration, concept, concept.name)
      statements.add(declaration)
    }
    this.addFile("concepts", statements)
  }

  private generateGlobalObjects() {
    const statements = this.newStatements()
    for (const globalObject of this.apiDocs.global_objects.sort(sortByOrder)) {
      const definition = ts.factory.createVariableStatement(
        [Modifiers.declare],
        ts.factory.createVariableDeclarationList(
          [
            ts.factory.createVariableDeclaration(
              globalObject.name,
              undefined,
              this.mapTypeWithTransforms(globalObject, globalObject.type, "", true)
            ),
          ],
          ts.NodeFlags.Const
        )
      )
      this.addJsDoc(definition, globalObject, globalObject.name)
      statements.add(definition)
    }
    this.addFile("global-objects", statements)
  }

  private generateIndex(): string {
    let result = '///<reference types="lua-types/5.2" />\n'
    for (const file of this.outFiles.keys()) {
      result += `///<reference path="${file}.d.ts" />\n`
    }
    return result
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

  private mapAttribute(
    attribute: Attribute,
    parent: string,
    existingContainer: InterfaceDef | TypeAliasDef | undefined
  ): ts.TypeElement {
    let member: ts.TypeElement
    const type = this.mapTypeWithTransforms(attribute, attribute.type, parent, !attribute.write)
    const existingProperty = existingContainer?.members[attribute.name]?.[0]
    if (existingProperty) {
      if (!ts.isPropertySignature(existingProperty)) {
        throw new Error(
          `Manual define for ${parent}.${attribute.name} should be a property signature, got ${
            ts.SyntaxKind[existingProperty.kind]
          } instead`
        )
      }
      member = ts.factory.createPropertySignature(
        existingProperty.modifiers,
        existingProperty.name,
        existingProperty.questionToken,
        existingProperty.type ?? type
      )
      ts.setEmitFlags(member, ts.EmitFlags.NoNestedComments)
    } else if (!attribute.read) {
      member = ts.factory.createSetAccessorDeclaration(
        undefined,
        undefined,
        attribute.name,
        [ts.factory.createParameterDeclaration(undefined, undefined, undefined, "value", undefined, type, undefined)],
        undefined
      )
    } else {
      member = ts.factory.createPropertySignature(
        attribute.write ? undefined : [Modifiers.readonly],
        attribute.name,
        undefined,
        type
      )
    }
    this.addJsDoc(member, attribute, parent + "." + attribute.name)
    return member
  }

  private mapParameterToParameter(parameter: Parameter, parent: string): ts.ParameterDeclaration {
    const type = this.mapTypeWithTransforms(parameter, parameter.type, parent, false)
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      DefinitionsGenerator.escapeParameterName(parameter.name),
      parameter.optional ? Tokens.question : undefined,
      type
    )
  }

  private mapParameterToProperty(
    parameter: Parameter,
    parent: string,
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
      const type = this.mapTypeWithTransforms(parameter, parameter.type, parent, false)
      member = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        DefinitionsGenerator.escapePropertyName(parameter.name),
        parameter.optional ? Tokens.question : undefined,
        type
      )
    }
    return this.addJsDoc(member, parameter, undefined)
  }

  private mapTypeWithTransforms(
    member: { description: string; name?: string },
    baseType: Type,
    parent: string,
    outOnly: boolean
  ): ts.TypeNode {
    const type = DefinitionsGenerator.tryMakeStringEnum(member, baseType) ?? this.mapTypeRaw(baseType, outOnly)
    const isNullable = !(member as Parameter).optional && this.isNullableFromDescription(member, parent)
    if (isNullable) {
      return mergeUnion(type, Types.undefined)
    }
    return type
  }

  private tryGetUnionTypeStringLiterals(typeNode: ts.TypeNode): string[] | undefined {
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

  private static tryMakeStringEnum(
    member: { description: string; name?: string },
    type: Type
  ): ts.UnionTypeNode | undefined {
    if (type === "string") {
      const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
      if (matches.size >= 2 || (matches.size === 1 && member.description.match(/One of `"[a-zA-Z-_]+?"`/))) {
        return ts.factory.createUnionTypeNode(Array.from(matches).map(Types.stringLiteral))
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

  private isNullableFromDescription(member: { description: string; name?: string }, parent: string): boolean {
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

  private isIndexableType(type: Type): boolean {
    return (
      typeof type === "string" &&
      (type === "string" || type === "number" || type.startsWith("defines.") || this.numericTypes.has(type))
    )
  }

  private mapTypeRaw(type: Type, outOnly: boolean): ts.TypeNode {
    if (typeof type === "string") {
      if (outOnly && this.tableOrArrayConcepts.has(type)) {
        return ts.factory.createTypeReferenceNode(type + "Table")
      }
      return ts.factory.createTypeReferenceNode(type)
    }
    if (type.complex_type === "variant") {
      return ts.factory.createUnionTypeNode(type.options.map((m) => this.mapTypeRaw(m, outOnly)))
    }
    if (type.complex_type === "array") {
      return ts.factory.createArrayTypeNode(this.mapTypeRaw(type.value, outOnly))
    }
    if (type.complex_type === "dictionary") {
      let recordType = "Record"
      if (!this.isIndexableType(type.key)) {
        this.warnIncompleteDefinition("Not typescript indexable type for key in dictionary complex type: ", type)
        recordType = "LuaTable"
      }
      return ts.factory.createTypeReferenceNode(recordType, [
        this.mapTypeRaw(type.key, outOnly),
        this.mapTypeRaw(type.value, outOnly),
      ])
    }
    if (type.complex_type === "LuaCustomTable") {
      return ts.factory.createTypeReferenceNode("LuaCustomTable", [
        this.mapTypeRaw(type.key, outOnly),
        this.mapTypeRaw(type.value, outOnly),
      ])
    }
    if (type.complex_type === "function") {
      return ts.factory.createFunctionTypeNode(
        undefined,
        type.parameters.map((value, index) =>
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            `param${index + 1}`,
            undefined,
            this.mapTypeRaw(value, false)
          )
        ),
        Types.void
      )
    }
    if (type.complex_type === "LuaLazyLoadedValue") {
      return ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [this.mapTypeRaw(type.value, true)])
    }
    if (type.complex_type === "table") {
      if (type.variant_parameter_groups) {
        throw new Error("Variant parameter complex type not yet supported")
      }
      return ts.factory.createTypeLiteralNode(
        type.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m, "<<table type>>"))
      )
    }
    assertNever(type)
  }

  private createVariantParameterTypes(
    name: string,
    variants: WithParameterVariants,
    statements: Statements,
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
      member: this.mapParameterToProperty(p, baseName, existingBase),
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
    } else {
      variants.variant_parameter_groups!.push({
        name: "Other",
        order: variants.variant_parameter_groups!.length + 1,
        description: "",
        parameters: [],
      })
    }

    function getType(groupName: string) {
      return isDefine ? ts.factory.createTypeReferenceNode(groupName) : Types.stringLiteral(groupName)
    }

    for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
      const isOtherTypes = group.name === "Other"
      if (!isOtherTypes) {
        unusedTypes?.delete(group.name)
      } else {
        if (!unusedTypes || unusedTypes.size === 0) continue
      }
      const fullName =
        toPascalCase(isDefine ? group.name.substr(group.name.lastIndexOf(".") + 1) : group.name) + shortName
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
          ...group.parameters.sort(sortByOrder).map((p) => this.mapParameterToProperty(p, fullName, existing))
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

  private static escapePropertyName(name: string): ts.PropertyName {
    if (name.includes("-")) {
      return ts.factory.createStringLiteral(name)
    }
    return ts.factory.createIdentifier(name)
  }

  private static escapeParameterName(name: string): string {
    if (DefinitionsGenerator.keywords.has(name)) {
      return "_" + name
    }
    return name
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

  private processDescription(description: string | undefined): string | undefined {
    if (!description) return undefined
    let result = ""

    for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|(```(?:(?!```).)*```))/gs)) {
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

      if (codeBlock) result += codeBlock
    }

    return result
  }

  private getDocumentationUrl(reference: string): string {
    let relative_link: string
    if (this.builtins.has(reference)) {
      relative_link = "Builtin-Types.html#" + reference
    } else if (this.classes.has(reference)) {
      if (reference.endsWith("ControlBehavior")) {
        relative_link = "LuaControlBehavior.html#" + reference
      } else {
        relative_link = reference + ".html"
      }
    } else if (this.events.has(reference)) {
      relative_link = "events.html#" + reference
    } else if (reference.startsWith("defines.")) {
      relative_link = "defines.html#" + reference
    } else if (this.concepts.has(reference)) {
      relative_link = "Concepts.html#" + reference
    } else if (this.globalObjects.has(reference)) {
      relative_link = ""
    } else if (reference.includes(".")) {
      const className = reference.substr(0, reference.indexOf("."))
      return this.getDocumentationUrl(className) + "#" + reference
    } else {
      this.warnIncompleteDefinition("Could not get documentation url:", reference)
      relative_link = ""
    }
    return this.docUrlBase + relative_link
  }

  private addJsDoc<T extends ts.Node>(
    node: T,
    element: { description: string; subclasses?: string[]; variant_parameter_description?: string } & WithNotes,
    reference: string | undefined,
    tags?: ts.JSDocTag[]
  ): T {
    let comment = this.docs
      ? [
          this.processDescription(element.description),
          this.processDescription(element.variant_parameter_description),
          element.notes?.map((n) => this.processDescription("**Note**: " + n)),
          element.subclasses &&
            `_Can only be used if this is ${
              element.subclasses.length === 1
                ? element.subclasses[0]
                : `${element.subclasses.slice(0, -1).join(", ")} or ${
                    element.subclasses[element.subclasses.length - 1]
                  }`
            }_`,
        ]
          .flat()
          .filter((x) => !!x)
          .join("\n\n")
      : undefined

    tags = tags || []
    if (this.docs && element.examples) {
      tags.push(
        ...element.examples.map((e) =>
          ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("example"), "\n" + this.processDescription(e))
        )
      )
    }
    if (this.docs && element.see_also) {
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

    if (this.docs && reference) comment += `\n\n{@link ${this.getDocumentationUrl(reference)} View documentation}`

    const jsDoc = ts.factory.createJSDocComment(comment, tags)
    addFakeJSDoc(node, jsDoc)

    return node
  }

  private static addNoSelfAnnotationOnly(node: ts.Node) {
    const jsDoc = ts.factory.createJSDocComment(undefined, [DefinitionsGenerator.noSelfAnnotation])
    addFakeJSDoc(node, jsDoc)
  }

  private warnIncompleteDefinition(...args: unknown[]) {
    console.log(chalk.yellow(...args))
    this.warnings.push(args.join(" "))
  }
}

function indent(str: string): string {
  return "    " + str.split("\n").join("\n    ")
}

function removeLuaPrefix(str: string): string {
  if (str.startsWith("Lua")) str = str.substring(3)

  return str
}

function addFakeJSDoc(node: ts.Node, jsDoc: ts.JSDoc, sourceFile?: ts.SourceFile) {
  const text: string = sourceFile
    ? jsDoc.getText(sourceFile)
    : printer.printNode(ts.EmitHint.Unspecified, jsDoc, emptySourceFile)
  node.emitNode = node.emitNode ?? {}
  ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    text.trim().replace(/^\/\*|\*\/$/g, ""),
    true
  )
  return node
}

function createComment(text: string, multiline?: boolean): ts.EmptyStatement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createEmptyStatement(),
    multiline ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia,
    text,
    true
  )
}
