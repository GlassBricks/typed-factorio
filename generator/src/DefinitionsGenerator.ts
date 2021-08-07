import * as ts from "typescript"
import { mergeUnion, Modifiers, Tokens, toPascalCase, Types } from "./genUtil"
import { assertNever, sortByOrder } from "./util"
import { emptySourceFile, printer } from "./printer"
import { AnyDef, InterfaceDef, processManualDefinitions, RootDef, TypeAliasDef } from "./manualDefinitionsPreprocessing"
import chalk from "chalk"
import * as console from "console"

interface GeneratedClass {
  readonly clazz: Class
  readonly existing: InterfaceDef | TypeAliasDef | undefined
  readonly superTypes: ts.TypeNode[]
  arrayType?: {
    readonly type: ts.TypeNode
    readonly: boolean
  }
  readonly members: { original: Method | Attribute; member: ts.TypeElement }[]
  readonly attributes: ts.PropertySignature[]

  indexingType?: ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined
}

export default class DefinitionsGenerator {
  private statements: ts.Statement[] = []
  private readonly manualDefinitions: Record<string, RootDef | undefined>

  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  private defines = new Set<string>()
  private events = new Set<string>(this.apiDocs.events.map((e) => e.name))
  private classes = new Set<string>(this.apiDocs.classes.map((e) => e.name))
  private concepts = new Set<string>(this.apiDocs.concepts.map((e) => e.name))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))
  private tableOrArrayConcepts = new Set<string>()

  private numericTypes = new Set<string>()
  // original: mapped
  private typeNames: Record<string, string> = {}

  private readonly rootDefine: Define = {
    order: 0,
    name: "defines",
    description: "",
    subkeys: this.apiDocs.defines,
  }

  private readonly docUrlBase = `https://lua-api.factorio.com/${this.apiDocs.application_version}/`

  private static keywords = new Set(["function", "interface"])
  private static noSelfAnnotation = ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("noSelf"))

  constructor(
    private readonly apiDocs: FactorioApiJson,
    private readonly manualDefinitionsSource: ts.SourceFile | undefined,
    private readonly docs: boolean
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application type " + apiDocs.application)
    }
    if (apiDocs.api_version !== 1) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
    this.manualDefinitions = processManualDefinitions(manualDefinitionsSource)
  }

  private generateAll() {
    this.preprocessAll()
    this.generateBuiltins()
    this.generateDefines()
    this.generateEvents()
    this.generateClasses()
    this.generateConcepts()
    this.generateGlobalObjects()
    this.generateAdditionalTypes()
  }

  private addHeaders() {
    this.statements.push(createComment('/ <reference types="lua-types/5.2" />'))
    this.statements.push(createComment("* @noSelfInFile ", true)) // makes lambda types have no self
  }

  private preprocessAll() {
    for (const type of [
      this.apiDocs.builtin_types,
      this.apiDocs.classes,
      this.apiDocs.concepts,
      this.apiDocs.global_objects,
    ].flat()) {
      this.typeNames[type.name] = type.name
    }
    for (const event of this.apiDocs.events) {
      this.typeNames[event.name] = DefinitionsGenerator.getMappedEventName(event)
    }
    const addDefine = (define: Define, prefix: string) => {
      const name = prefix + define.name
      this.typeNames[name] = name
      this.defines.add(name)
      if (define.values) {
        for (const value of define.values) {
          const valueName = name + "." + value.name
          this.typeNames[valueName] = valueName
        }
      }
      if (define.subkeys) {
        for (const subkey of define.subkeys) {
          addDefine(subkey, name + ".")
        }
      }
    }
    addDefine(this.rootDefine, "")

    for (const concept of this.apiDocs.concepts) {
      const existing = this.manualDefinitions[concept.name]
      if (concept.category === "table_or_array" || existing?.annotations.tableOrArray) {
        this.tableOrArrayConcepts.add(concept.name)
        this.typeNames[concept.name + "Table"] = concept.name
        this.typeNames[concept.name + "Array"] = concept.name
      }
    }
  }

  generateDeclarations(): string {
    this.addHeaders()
    this.generateAll()
    const sourceFile = ts.factory.createSourceFile(
      this.statements,
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.None
    )
    return printer.printFile(sourceFile)
  }

  private generateBuiltins() {
    this.statements.push(createComment(" Builtins"))
    for (const builtin of this.apiDocs.builtin_types.sort(sortByOrder)) {
      if (builtin.name === "boolean" || builtin.name === "string") continue
      let type: ts.TypeNode
      if (builtin.name === "table") {
        type = Types.object
      } else {
        this.numericTypes.add(builtin.name)
        type = Types.number
      }
      const typeAliasDeclaration = this.addJsDoc(
        ts.factory.createTypeAliasDeclaration(undefined, undefined, builtin.name, undefined, type),
        builtin,
        builtin.name
      )
      this.statements.push(typeAliasDeclaration)
    }
  }

  private generateDefines() {
    this.statements.push(createComment(" Defines"))

    const generateDefinesDeclaration = (
      define: Define,
      parent: string,
      existing: AnyDef | undefined,
      modifiers?: ts.Modifier[]
    ): ts.Statement => {
      let declaration: ts.Statement
      const thisPath = parent + (parent ? "." : "") + define.name
      if (define.values) {
        if (existing && existing.kind !== "enum") {
          throw new Error(
            `Manual definition for ${parent} should be a namespace, got ${ts.SyntaxKind[existing.node.kind]}`
          )
        }
        const members = define.values
          .sort(sortByOrder)
          .map((m, i) =>
            this.addJsDoc(
              ts.factory.createEnumMember(m.name, ts.factory.createNumericLiteral(i)),
              m,
              thisPath + "." + m.name
            )
          )
        declaration = ts.factory.createEnumDeclaration(undefined, modifiers, define.name, members)
      } else if (define.subkeys) {
        if (existing && existing.kind !== "namespace") {
          throw new Error(
            `Manual definition for ${thisPath} should be a namespace, got ${ts.SyntaxKind[existing.node.kind]}`
          )
        }
        const declarations = define.subkeys
          .sort(sortByOrder)
          .map((d) => generateDefinesDeclaration(d, thisPath, existing?.members[d.name]))
        declaration = ts.factory.createModuleDeclaration(
          undefined,
          modifiers,
          ts.factory.createIdentifier(define.name),
          ts.factory.createModuleBlock(declarations),
          ts.NodeFlags.Namespace
        )
      } else if (!existing) {
        this.warnIncompleteDefinition("Incomplete define for", thisPath)
        declaration = ts.factory.createTypeAliasDeclaration(undefined, undefined, define.name, undefined, Types.unknown)
      } else {
        declaration = existing.node
      }
      return this.addJsDoc(declaration, define, thisPath)
    }
    const defines = generateDefinesDeclaration(this.rootDefine, "", this.manualDefinitions.defines, [Modifiers.declare])
    this.statements.push(defines)
  }

  private generateEvents() {
    this.statements.push(createComment(" Events"))
    this.statements.push(
      ...this.apiDocs.events.sort(sortByOrder).map((event) => {
        const name = DefinitionsGenerator.getMappedEventName(event)
        return this.addJsDoc(
          ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            name,
            undefined,
            undefined,
            event.data.sort(sortByOrder).map((p) => {
              if (p.name === "name" && event.name !== "CustomInputEvent") {
                p.type += "." + event.name
              }
              return this.mapParameterToProperty(p, name)
            })
          ),
          event,
          event.name
        )
      })
    )
  }

  private static getMappedEventName(event: Event): string {
    let name = toPascalCase(event.name)
    if (!name.endsWith("Event")) name += "Event"
    return name
  }

  private generateClasses() {
    this.statements.push(createComment(" Classes"))

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
        attributes: [],
      }
      for (const step of [
        fillSupertypes,
        fillArrayType,
        fillMethods,
        fillAttributes,
        fillIndexOperator,
        shiftLuaObjectMembers,
        createDeclarations,
      ]) {
        step.call(this, generated)
      }
    }

    function fillSupertypes({ clazz, existing, superTypes }: GeneratedClass) {
      if (clazz.base_classes) {
        superTypes.push(
          ...clazz.base_classes.map((b) =>
            ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(b), undefined)
          )
        )
      }
      if (existing) {
        superTypes.push(...existing.supertypes)
      }
    }

    function fillArrayType(generated: GeneratedClass) {
      const { clazz, existing } = generated
      if (existing?.kind !== "interface") return
      const arrayExtends = existing.supertypes.find(
        (t) => ts.isIdentifier(t.expression) && (t.expression.text === "Array" || t.expression.text === "ReadonlyArray")
      )
      if (!arrayExtends) return
      const type = arrayExtends.typeArguments?.[0]
      const readonly = (arrayExtends.expression as ts.Identifier).text === "ReadonlyArray"
      if (!type) throw new Error(`Manual define ${clazz.name} extends an array type without type arguments`)
      generated.arrayType = { type, readonly }
      // array inherit with type aliases not yet supported
    }

    function fillMethods(this: DefinitionsGenerator, { clazz, existing, members, arrayType }: GeneratedClass) {
      members.push(
        ...clazz.methods.sort(sortByOrder).map((method) => ({
          original: method,
          member: this.mapMethod(method, clazz.name, existing),
        }))
      )

      const callOperator = clazz.operators.find((x) => x.name === "call") as CallOperator | undefined
      if (callOperator) {
        // manual define for operator not supported yet
        const asMethod = this.mapMethod({ ...callOperator, name: "operator%20()" }, clazz.name, undefined)
        const callSignature = ts.factory.createCallSignature(undefined, asMethod.parameters, asMethod.type)
        ts.setSyntheticLeadingComments(callSignature, ts.getSyntheticLeadingComments(asMethod))
        members.push({
          original: callOperator,
          member: callSignature,
        })
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
      if (ts.isMappedTypeNode(existingIndexOp)) {
        generated.indexingType = ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          clazz.name + "Index",
          existing.node.typeParameters,
          this.addJsDoc(existingIndexOp, indexOperator, clazz.name + ".operator%20[]")
        )
      } else if (ts.isTypeLiteralNode(existingIndexOp)) {
        const indexSignature = this.addJsDoc(
          existingIndexOp.members[0] as ts.IndexSignatureDeclaration,
          indexOperator,
          clazz.name + ".operator%20[]"
        )
        generated.indexingType = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          clazz.name + "Index",
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

    function createDeclarations(
      this: DefinitionsGenerator,
      { clazz, existing, superTypes, members, indexingType }: GeneratedClass
    ) {
      const baseDeclaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        indexingType ? clazz.name + "Members" : clazz.name,
        indexingType ? undefined : existing?.node.typeParameters,
        superTypes.length !== 0
          ? [
              ts.factory.createHeritageClause(
                ts.SyntaxKind.ExtendsKeyword,
                superTypes as ts.ExpressionWithTypeArguments[]
              ),
            ]
          : undefined,
        members.map((m) => m.member)
      )
      this.statements.push(baseDeclaration)

      if (!indexingType) {
        this.addJsDoc(baseDeclaration, clazz, clazz.name, [DefinitionsGenerator.noSelfAnnotation])
      } else {
        DefinitionsGenerator.addNoSelfAnnotationOnly(baseDeclaration)
        this.statements.push(indexingType)
        const typeArguments = existing?.node.typeParameters?.map((p) => ts.factory.createTypeReferenceNode(p.name))
        const actualDeclaration = ts.factory.createTypeAliasDeclaration(
          undefined,
          undefined,
          clazz.name,
          existing?.node.typeParameters,
          ts.factory.createIntersectionTypeNode([
            ts.factory.createTypeReferenceNode(clazz.name + "Members"),
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier(clazz.name + "Index"),
              typeArguments
            ),
          ])
        )
        this.addJsDoc(actualDeclaration, clazz, clazz.name)
        this.statements.push(actualDeclaration)
      }
    }
  }

  private generateConcepts() {
    this.statements.push(createComment(" Concepts"))
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
        } else {
          this.warnIncompleteDefinition(`No concept definition given for ${concept.name}.`)
          declaration = createTypeAlias(Types.unknown)
        }
      } else if (concept.category === "union") {
        declaration = createTypeAlias(
          ts.factory.createUnionTypeNode(
            concept.options
              .sort(sortByOrder)
              .map((option) =>
                this.addJsDoc(this.mapTypeWithTransforms(option, option.type, concept.name, false), option, undefined)
              )
          )
        )
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
          this.createVariantParameterTypes(concept.name, concept, concept)
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
        // todo: separate type shenanigans
        const parameters = concept.parameters
          .sort(sortByOrder)
          .map((param) => this.mapParameterToProperty(param, concept.name))

        this.statements.push(
          ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            concept.name + "Table",
            undefined,
            undefined,
            parameters
          )
        )

        this.statements.push(
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
      this.statements.push(declaration)
    }
  }

  private generateGlobalObjects() {
    this.statements.push(createComment(" Global objects"))
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
      this.statements.push(definition)
    }
  }

  private generateAdditionalTypes() {
    this.statements.push(createComment(" Manually defined additional types"))

    const restoreDocs = (node: ts.Node) => {
      const doc = (node as ts.JSDocContainer).jsDoc?.[0]
      if (doc) {
        const text = doc.getText(this.manualDefinitionsSource)
        addJSDocText(node, text)
      }
      node.forEachChild(restoreDocs)
    }

    for (const key in this.manualDefinitions) {
      if (key in this.typeNames) continue
      const node = this.manualDefinitions[key]!.node
      if (this.docs) restoreDocs(node)
      this.statements.push(node)
    }
  }

  private mapAttribute(
    attribute: Attribute,
    parent: string,
    existingContainer: InterfaceDef | TypeAliasDef | undefined
  ): ts.TypeElement {
    let member: ts.TypeElement
    const existingProperty = existingContainer?.members[attribute.name]
    if (existingProperty) {
      if (!ts.isPropertySignature(existingProperty)) {
        throw new Error(
          `Manual define for ${parent}.${attribute.name} should be a property signature, got ${
            ts.SyntaxKind[existingProperty.kind]
          } instead`
        )
      }
      existingProperty.emitNode = existingProperty.emitNode || {}
      member = existingProperty
    } else {
      const type = this.mapTypeWithTransforms(attribute, attribute.type, parent, !attribute.write)
      if (!attribute.read) {
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
    }
    this.addJsDoc(member, attribute, parent + "." + attribute.name)
    return member
  }

  private mapMethod(
    method: Method,
    parent: string,
    existingContainer: InterfaceDef | TypeAliasDef | undefined
  ): ts.MethodSignature {
    const existingMethod = existingContainer?.members[method.name]
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
              ? this.createVariantParameterTypes(parent + toPascalCase(method.name), method)
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
    let member: ts.MethodSignature
    if (existingMethod) {
      if (!ts.isMethodSignature(existingMethod)) {
        throw new Error(
          `Manual define for ${parent}.${method.name} should be a method signature, got ${
            ts.SyntaxKind[existingMethod.kind]
          } instead`
        )
      }
      existingMethod.emitNode = existingMethod.emitNode ?? {}
      if (method.parameters.length > 0 && existingMethod.parameters.length === 0) {
        member = ts.factory.createMethodSignature(
          existingMethod.modifiers,
          existingMethod.name,
          existingMethod.questionToken,
          existingMethod.typeParameters,
          parameters,
          existingMethod.type
        )
      } else {
        member = existingMethod
      }
    } else {
      let returnType: ts.TypeNode
      if (!method.return_type) {
        returnType = Types.void
      } else {
        returnType = this.mapTypeWithTransforms(method, method.return_type, parent, true)
      }
      member = ts.factory.createMethodSignature(undefined, method.name, undefined, undefined, parameters, returnType)
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
    this.addJsDoc(member, method, thisPath, tags)
    return member
  }

  private mapParameterToParameter(parameter: Parameter, parent: string): ts.ParameterDeclaration {
    const [type, nullable] = this.mapTypeWithTransforms(parameter, parameter.type, parent, false, false)
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      DefinitionsGenerator.escapeParameterName(parameter.name),
      parameter.optional || nullable ? Tokens.question : undefined,
      type
    )
  }

  private mapParameterToProperty(
    parameter: Parameter,
    parent: string,
    existingContainer?: InterfaceDef | TypeAliasDef
  ): ts.PropertySignature {
    let member: ts.PropertySignature
    const existingProperty = existingContainer?.members[parameter.name]
    if (existingProperty) {
      if (!ts.isPropertySignature(existingProperty)) {
        throw new Error(
          `Manual define for ${parent}.${parameter.name} should be a property signature, got ${
            ts.SyntaxKind[existingProperty.kind]
          } instead`
        )
      }
      existingProperty.emitNode = existingProperty.emitNode || {}
      member = existingProperty
    } else {
      const [type, nullable] = this.mapTypeWithTransforms(parameter, parameter.type, parent, false, false)
      member = ts.factory.createPropertySignature(
        [Modifiers.readonly],
        DefinitionsGenerator.escapePropertyName(parameter.name),
        parameter.optional || nullable ? Tokens.question : undefined,
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
  ): ts.TypeNode

  private mapTypeWithTransforms(
    member: { description: string; name?: string },
    baseType: Type,
    parent: string,
    outOnly: boolean,
    makeNullable: boolean
  ): [type: ts.TypeNode, isNullable: boolean]

  private mapTypeWithTransforms(
    member: { description: string; name?: string },
    baseType: Type,
    parent: string,
    outOnly: boolean,
    makeNullable?: boolean
  ): [type: ts.TypeNode, isNullable: boolean] | ts.TypeNode {
    let type = DefinitionsGenerator.tryMakeStringEnum(member, baseType) ?? this.mapTypeRaw(baseType, outOnly)
    const isNullable = !(member as Parameter).optional && this.isNullableFromDescription(member, parent)
    if (isNullable && makeNullable !== false) {
      type = mergeUnion(type, Types.undefined)
    }
    if (makeNullable !== undefined) {
      return [type, isNullable]
    }
    return type
  }

  private static tryMakeStringEnum(
    member: { description: string; name?: string },
    type: Type
  ): ts.UnionTypeNode | undefined {
    if (type === "string") {
      const matches = new Set(Array.from(member.description.matchAll(/['"]([a-zA-Z-_]+?)['"]/g), (match) => match[1]))
      if (matches.size >= 2) {
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
    memberForDocs?: BasicMember
  ): ts.TypeReferenceNode {
    const baseName = "Base" + name
    this.statements.push(
      ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        baseName,
        undefined,
        undefined,
        variants.parameters.sort(sortByOrder).map((p) => this.mapParameterToProperty(p, baseName))
      )
    )
    const heritageClause = [
      ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(baseName), undefined),
      ]),
    ]
    const groups: ts.TypeNode[] = []
    const discriminatorField = variants.variant_parameter_description?.match(/depending on `(.+?)`:/)?.[1]
    for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
      const isDefine = group.name.startsWith("defines.")
      const groupName = toPascalCase(isDefine ? group.name.substr(group.name.lastIndexOf(".") + 1) : group.name) + name

      const members: ts.PropertySignature[] = []
      if (discriminatorField) {
        members.push(
          ts.factory.createPropertySignature(
            [Modifiers.readonly],
            discriminatorField,
            undefined,
            isDefine ? ts.factory.createTypeReferenceNode(group.name) : Types.stringLiteral(group.name)
          )
        )
      }
      members.push(...group.parameters.sort(sortByOrder).map((p) => this.mapParameterToProperty(p, groupName)))
      this.statements.push(
        ts.factory.createInterfaceDeclaration(undefined, undefined, groupName, undefined, heritageClause, members)
      )
      groups.push(ts.factory.createTypeReferenceNode(groupName))
    }
    const declaration = ts.factory.createTypeAliasDeclaration(
      undefined,
      undefined,
      name,
      undefined,
      ts.factory.createUnionTypeNode(groups)
    )
    this.statements.push(declaration)
    if (memberForDocs) {
      this.addJsDoc(declaration, memberForDocs, memberForDocs.name)
    }
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
        .replace(/(?<!\[)\[(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
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

  // might not be static in the future
  // noinspection JSMethodCanBeStatic
  private warnIncompleteDefinition(...args: unknown[]) {
    console.log(chalk.yellow(...args))
  }
}

function indent(str: string): string {
  return "    " + str.split("\n").join("\n    ")
}

function addFakeJSDoc(node: ts.Node, jsDoc: ts.JSDoc) {
  const text: string = printer.printNode(ts.EmitHint.Unspecified, jsDoc, emptySourceFile)
  addJSDocText(node, text)
  return node
}

function addJSDocText(node: ts.Node, text: string) {
  node.emitNode = node.emitNode ?? {}
  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    text.trim().replace(/^\/\*|\*\/$/g, ""),
    true
  )
}

function createComment(text: string, multiline?: boolean): ts.EmptyStatement {
  const node = ts.factory.createEmptyStatement()
  ts.addSyntheticLeadingComment(
    node,
    multiline ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia,
    text,
    true
  )
  return node
}
