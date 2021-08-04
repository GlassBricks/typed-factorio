import ts, { NodeFlags, SyntaxKind } from "typescript"
import { createRecordType, Modifiers, Tokens, toPascalCase, Types } from "./genUtil"
import { assertEquals, assertNever, sortByOrder } from "./util"
import { emptySourceFile, printer } from "./printer"
import { RootDef } from "./manualDefines"
import chalk from "chalk"

export default class DefinitionsGenerator {
  private statements: ts.Statement[] = []

  private builtins = new Set(this.apiDocs.builtin_types.map((e) => e.name))
  private defines = new Set<string>()
  private events = new Set<string>(this.apiDocs.events.map((e) => e.name))
  private classes = new Set<string>(this.apiDocs.classes.map((e) => e.name))
  private concepts = new Set<string>(this.apiDocs.concepts.map((e) => e.name))
  private globalObjects = new Set<string>(this.apiDocs.global_objects.map((e) => e.name))

  private numericTypes = new Set<string>()
  private typeNames: Record<string, string> = {} // original: mapped

  private readonly rootDefine = {
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
    private readonly manualDefines: Record<string, RootDef | undefined>,
    private readonly docs: boolean
  ) {
    if (apiDocs.application !== "factorio") {
      throw new Error("Unsupported application type " + apiDocs.application)
    }
    if (apiDocs.api_version !== 1) {
      throw new Error("Unsupported api version " + apiDocs.api_version)
    }
  }

  private addHeaders() {
    this.statements.push(DefinitionsGenerator.createComment('/ <reference types="lua-types/5.2" />'))
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
  }

  private generateAll() {
    this.preprocessAll()
    this.generateBuiltins()
    this.generateDefines()
    this.generateEvents()
    this.generateClasses()
    this.generateConcepts()
    this.generateGlobalObjects()
  }

  generateDeclarations(): string {
    this.addHeaders()
    this.generateAll()
    const sourceFile = ts.factory.createSourceFile(
      this.statements,
      ts.factory.createToken(SyntaxKind.EndOfFileToken),
      NodeFlags.None
    )
    return printer.printFile(sourceFile)
  }

  private generateBuiltins() {
    this.statements.push(DefinitionsGenerator.createComment(" Builtins"))
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
    this.statements.push(DefinitionsGenerator.createComment(" Defines"))

    const generateDefinesDeclaration = (define: Define, path: string, modifiers?: ts.Modifier[]): ts.Statement => {
      let declaration: ts.Statement
      const thisPath = path + (path ? "." : "") + define.name
      if (define.values) {
        const members = define.values.sort(sortByOrder).map((m, i) => {
          return this.addJsDoc(
            ts.factory.createEnumMember(m.name, ts.factory.createNumericLiteral(i)),
            m,
            thisPath + "." + m.name
          )
        })
        declaration = ts.factory.createEnumDeclaration(undefined, modifiers, define.name, members)
      } else if (define.subkeys) {
        const declarations = define.subkeys.sort(sortByOrder).map((d) => generateDefinesDeclaration(d, thisPath))
        declaration = ts.factory.createModuleDeclaration(
          undefined,
          modifiers,
          ts.factory.createIdentifier(define.name),
          ts.factory.createModuleBlock(declarations),
          ts.NodeFlags.Namespace
        )
      } else {
        assertEquals("prototypes", define.name) // todo: manual definitions
        declaration = createPrototypesDefine(define)
      }
      return this.addJsDoc(declaration, define, thisPath)
    }

    const defines = generateDefinesDeclaration(this.rootDefine, "", [Modifiers.declare])
    this.statements.push(defines)

    function createPrototypesDefine(define: BasicMember): ts.Statement {
      // todo: manual definitions
      return ts.factory.createVariableStatement(
        undefined,
        ts.factory.createVariableDeclarationList(
          [
            ts.factory.createVariableDeclaration(
              define.name,
              undefined,
              createRecordType(
                true,
                false,
                Types.string,
                createRecordType(true, true, Types.string, Types.numberLiteral(0))
              )
            ),
          ],
          ts.NodeFlags.Const
        )
      )
    }
  }

  private generateEvents() {
    this.statements.push(DefinitionsGenerator.createComment(" Events"))
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
              return this.mapParameterToProperty(p)
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
    this.statements.push(DefinitionsGenerator.createComment(" Classes"))
    for (const clazz of this.apiDocs.classes.sort(sortByOrder)) {
      const existing = this.manualDefines[clazz.name]
      if (existing && existing.kind !== "interface" && existing.kind !== "type") {
        throw new Error("Manual define for class should be interface or type alias")
      }
      const superTypes: ts.TypeNode[] = []
      // const members = new Map<string, ts.TypeElement[]>()
      const members: ts.TypeElement[] = []

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

      let arrayType: { type: ts.TypeNode; readonly: boolean } | undefined
      if (existing?.kind === "interface") {
        const arrayExtends = existing.supertypes.find(
          (t) =>
            ts.isIdentifier(t.expression) && (t.expression.text === "Array" || t.expression.text === "ReadonlyArray")
        )
        if (arrayExtends) {
          const type = arrayExtends.typeArguments?.[0]
          const readonly = (arrayExtends.expression as ts.Identifier).text === "ReadonlyArray"
          if (!type) throw new Error(`Manual define ${clazz.name} extends an array type without type arguments`)
          arrayType = { type, readonly }
        }
      } // array inherit with type aliases not yet supported

      const callOperator = clazz.operators.find((x) => x.name === "call") as CallOperator | undefined
      const lengthOperator = clazz.operators.find((x) => x.name === "length") as LengthOperator | undefined

      for (const method of clazz.methods.sort(sortByOrder)) {
        const methodSignature = this.mapMethod(clazz.name, method)
        const existingMethod = existing?.members[method.name]
        if (existingMethod) {
          if (!ts.isMethodSignature(existingMethod)) {
            throw new Error(
              `Manual define for ${clazz.name}.${method.name} should be a method signature, got ${
                ts.SyntaxKind[existingMethod.kind]
              } instead`
            )
          }
          const copy = ts.factory.createMethodSignature(
            existingMethod.modifiers,
            existingMethod.name,
            existingMethod.questionToken,
            existingMethod.typeParameters,
            existingMethod.parameters,
            existingMethod.type
          )
          ts.setSyntheticLeadingComments(copy, ts.getSyntheticLeadingComments(methodSignature))
          members.push(copy)
        } else {
          members.push(methodSignature)
        }
        // for (const subclass of method.subclasses || [""]) {
        //   getOrPut(members, subclass, []).push(property)
        // }
      }
      if (callOperator) {
        const asMethod = this.mapMethod(clazz.name, { ...callOperator, name: "operator%20()" })
        const callSignature = ts.factory.createCallSignature(undefined, asMethod.parameters, asMethod.type)
        ts.setSyntheticLeadingComments(callSignature, ts.getSyntheticLeadingComments(asMethod))
        members
          // .get("")!
          .push(callSignature)
      }
      if (lengthOperator) {
        const length = this.addJsDoc(
          ts.factory.createPropertySignature(
            [Modifiers.readonly],
            "length",
            undefined,
            arrayType
              ? this.mapType(lengthOperator.type)
              : ts.factory.createTypeReferenceNode("LuaLengthMethod", [this.mapType(lengthOperator.type)])
          ),
          lengthOperator,
          clazz.name + ".operator%20#"
        )
        members
          // .get("")!
          .push(length)
      }

      for (const attribute of clazz.attributes.sort(sortByOrder)) {
        const property = this.mapAttribute(attribute, clazz.name)
        const existingProperty = existing?.members[attribute.name]
        if (existingProperty) {
          if (!ts.isPropertySignature(existingProperty)) {
            throw new Error(
              `Manual define for ${clazz.name}.${attribute.name} should be a property signature, got ${
                ts.SyntaxKind[existingProperty.kind]
              } instead`
            )
          }
          const copy = ts.factory.createPropertySignature(
            existingProperty.modifiers,
            existingProperty.name,
            existingProperty.questionToken,
            existingProperty.type
          )
          ts.setSyntheticLeadingComments(copy, ts.getSyntheticLeadingComments(property))
          members.push(copy)
        } else {
          members.push(property)
        }
        // for (const subclass of attribute.subclasses || [""]) {
        //   getOrPut(members, subclass, []).push(property)
        // }
      }
      let indexingType: ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined
      const indexOperator = clazz.operators.find((x) => x.name === "index") as IndexOperator | undefined
      if (indexOperator) {
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
          members.push(indexSignature)
        } else if (existing?.kind === "type" && existing.indexOperator) {
          const existingIndexOp = existing.indexOperator
          if (ts.isMappedTypeNode(existingIndexOp)) {
            const copy = this.addJsDoc(
              ts.factory.createMappedTypeNode(
                existingIndexOp.readonlyToken,
                existingIndexOp.typeParameter,
                existingIndexOp.nameType,
                existingIndexOp.questionToken,
                existingIndexOp.type
              ),
              indexOperator,
              clazz.name + ".operator%20[]"
            )
            indexingType = ts.factory.createTypeAliasDeclaration(
              undefined,
              undefined,
              clazz.name + "Index",
              existing.node.typeParameters,
              copy
            )
          } else if (ts.isTypeLiteralNode(existingIndexOp)) {
            const existingIndexSignature = existingIndexOp.members[0] as ts.IndexSignatureDeclaration
            const indexSignature = this.addJsDoc(
              ts.factory.createIndexSignature(
                existingIndexSignature.decorators,
                existingIndexSignature.modifiers,
                existingIndexSignature.parameters,
                existingIndexSignature.type
              ),
              indexOperator,
              clazz.name + ".operator%20[]"
            )
            indexingType = ts.factory.createInterfaceDeclaration(
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
        } else {
          console.warn(chalk.yellow("No index operator manual definition for class", clazz.name))
        }
      }
      // const hasMultipleTypes = members.size > 1
      const baseDeclaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        // hasMultipleTypes ? "Base" + clazz.name : clazz.name,
        indexingType ? clazz.name + "Members" : clazz.name,
        indexingType ? undefined : existing?.node.typeParameters,
        superTypes.length !== 0
          ? [ts.factory.createHeritageClause(SyntaxKind.ExtendsKeyword, superTypes as ts.ExpressionWithTypeArguments[])]
          : undefined,
        members // .get("")!
      )
      this.statements.push(baseDeclaration)

      if (!indexingType) {
        this.addJsDoc(baseDeclaration, clazz, clazz.name)
      } else {
        this.statements.push(indexingType)
        let typeArguments = existing?.node.typeParameters?.map((p) => ts.factory.createTypeReferenceNode(p.name))
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
    this.statements.push(DefinitionsGenerator.createComment(" Concepts"))
    for (const concept of this.apiDocs.concepts.sort(sortByOrder)) {
      let type: ts.TypeNode | ts.InterfaceDeclaration
      if (concept.category === "union") {
        type = ts.factory.createUnionTypeNode(
          concept.options.sort(sortByOrder).map((option) => this.addJsDoc(this.mapType(option.type), option, undefined))
        )
      } else if (concept.category === "concept") {
        type = Types.unknown // todo: manual type defs
      } else if (concept.category === "struct") {
        type = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          concept.name,
          undefined,
          undefined,
          concept.attributes.sort(sortByOrder).map((attr) => this.mapAttribute(attr, concept.name))
        )
      } else if (concept.category === "flag") {
        type = ts.factory.createInterfaceDeclaration(
          undefined,
          undefined,
          concept.name,
          undefined,
          undefined,
          concept.options.sort(sortByOrder).map((flag) =>
            this.mapParameterToProperty({
              ...flag,
              type: "boolean",
              optional: true,
            })
          )
        )
      } else if (concept.category === "table" || concept.category === "filter") {
        if (concept.variant_parameter_groups) {
          this.createVariantParameterTypes(concept.name, concept, concept)
          continue
        } else {
          type = ts.factory.createInterfaceDeclaration(
            undefined,
            undefined,
            concept.name,
            undefined,
            undefined,
            concept.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m))
          )
        }
      } else if (concept.category === "enum") {
        type = ts.factory.createUnionTypeNode(
          concept.options
            .sort(sortByOrder)
            .map((option) => this.addJsDoc(Types.stringLiteral(option.name), option, undefined))
        )
      } else if (concept.category === "table_or_array") {
        // todo: separate type shenanigans
        const table = ts.factory.createTypeLiteralNode(
          concept.parameters.sort(sortByOrder).map((param) => this.mapParameterToProperty(param))
        )
        const array = ts.factory.createTypeOperatorNode(
          SyntaxKind.ReadonlyKeyword,
          ts.factory.createTupleTypeNode(
            // already sorted
            concept.parameters.map((param) =>
              ts.factory.createNamedTupleMember(
                undefined,
                ts.factory.createIdentifier(param.name),
                param.optional ? Tokens.question : undefined,
                this.mapType(param.type)
              )
            )
          )
        )
        type = ts.factory.createUnionTypeNode([table, array])
      } else {
        assertNever(concept)
      }
      const declaration = ts.isInterfaceDeclaration(type)
        ? type
        : ts.factory.createTypeAliasDeclaration(undefined, undefined, concept.name, undefined, type)
      this.addJsDoc(declaration, concept, concept.name)
      this.statements.push(declaration)
    }
  }

  private generateGlobalObjects() {
    this.statements.push(DefinitionsGenerator.createComment(" Global objects"))
    for (const globalObject of this.apiDocs.global_objects.sort(sortByOrder)) {
      const definition = ts.factory.createVariableStatement(
        [Modifiers.declare],
        ts.factory.createVariableDeclarationList(
          [ts.factory.createVariableDeclaration(globalObject.name, undefined, this.mapType(globalObject.type))],
          ts.NodeFlags.Const
        )
      )
      this.addJsDoc(definition, globalObject, globalObject.name)
      this.statements.push(definition)
    }
  }

  private isIndexableType(type: Type): boolean {
    return (
      typeof type === "string" &&
      (type === "string" || type === "number" || type.startsWith("defines.") || this.numericTypes.has(type))
    )
  }

  private mapAttribute(attribute: Attribute, path: string): ts.TypeElement {
    // todo: nilable
    let member: ts.TypeElement
    if (!attribute.read) {
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
            this.mapType(attribute.type),
            undefined
          ),
        ],
        undefined
      )
    } else {
      member = ts.factory.createPropertySignature(
        attribute.write ? undefined : [Modifiers.readonly],
        attribute.name,
        undefined,
        this.mapType(attribute.type)
      )
    }
    this.addJsDoc(member, attribute, path + "." + attribute.name)
    return member
  }

  private mapMethod(fromClass: string, method: Method): ts.MethodSignature {
    const parameters = method.takes_table
      ? [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "params",
            method.table_is_optional ? Tokens.question : undefined,
            method.variant_parameter_groups !== undefined
              ? this.createVariantParameterTypes(fromClass + toPascalCase(method.name), method)
              : ts.factory.createTypeLiteralNode(
                  method.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m))
                )
          ),
        ]
      : method.parameters.sort(sortByOrder).map((m) => this.mapParameterToParameter(m))

    if (method.variadic_type) {
      parameters.push(
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          Tokens.dotDotDot,
          "args",
          undefined,
          this.mapType({
            complex_type: "array",
            value: method.variadic_type,
          })
        )
      )
    }

    const returnType = method.return_type ? this.mapType(method.return_type) : Types.void
    const methodSignature = ts.factory.createMethodSignature(
      undefined,
      method.name,
      undefined,
      undefined,
      parameters,
      returnType
    )

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
                p.description ? "- " + p.description : undefined
              )
            )
        )
      }
      if (method.return_description) {
        tags.push(ts.factory.createJSDocReturnTag(undefined, undefined, method.return_description))
      }
    }
    tags.push(DefinitionsGenerator.noSelfAnnotation)
    this.addJsDoc(methodSignature, method, fromClass + "." + method.name, tags)
    return methodSignature
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
        variants.parameters.sort(sortByOrder).map((p) => this.mapParameterToProperty(p))
      )
    )
    const heritageClause = [
      ts.factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
        ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(baseName), undefined),
      ]),
    ]
    const groups: ts.TypeNode[] = []
    const discriminatorField = variants.variant_parameter_description?.match(/depending on `(.+?)`:/)?.[1]
    for (const group of variants.variant_parameter_groups!.sort(sortByOrder)) {
      const isDefine = group.name.startsWith("defines.")
      const groupIntfName =
        toPascalCase(isDefine ? group.name.substr(group.name.lastIndexOf(".") + 1) : group.name) + name

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
      members.push(...group.parameters.sort(sortByOrder).map((p) => this.mapParameterToProperty(p)))
      this.statements.push(
        ts.factory.createInterfaceDeclaration(undefined, undefined, groupIntfName, undefined, heritageClause, members)
      )
      groups.push(ts.factory.createTypeReferenceNode(groupIntfName))
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

  mapType(type: Type): ts.TypeNode {
    if (typeof type === "string") {
      return ts.factory.createTypeReferenceNode(type)
    }
    if (type.complex_type === "variant") {
      return ts.factory.createUnionTypeNode(type.options.map((m) => this.mapType(m)))
    }
    if (type.complex_type === "array") {
      return ts.factory.createArrayTypeNode(this.mapType(type.value))
    }
    if (type.complex_type === "dictionary") {
      let recordType = "Record"
      if (!this.isIndexableType(type.key)) {
        console.warn(chalk.yellow("Not typescript indexable type for key in dictionary complex type: ", type))
        recordType = "LuaTable"
      }
      return ts.factory.createTypeReferenceNode(recordType, [this.mapType(type.key), this.mapType(type.value)])
    }
    if (type.complex_type === "LuaCustomTable") {
      return ts.factory.createTypeReferenceNode("LuaCustomTable", [this.mapType(type.key), this.mapType(type.value)])
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
            this.mapType(value)
          )
        ),
        Types.void
      )
    }
    if (type.complex_type === "LuaLazyLoadedValue") {
      return ts.factory.createTypeReferenceNode("LuaLazyLoadedValue", [this.mapType(type.value)])
    }
    if (type.complex_type === "table") {
      if (type.variant_parameter_groups) {
        throw new Error("Variant parameter complex type not yet supported")
      }
      return ts.factory.createTypeLiteralNode(
        type.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m))
      )
    }
    assertNever(type)
  }

  private mapParameterToProperty(parameter: Parameter): ts.PropertySignature {
    return this.addJsDoc(
      ts.factory.createPropertySignature(
        [Modifiers.readonly],
        DefinitionsGenerator.escapePropertyName(parameter.name),
        parameter.optional ? Tokens.question : undefined,
        this.mapType(parameter.type)
      ),
      parameter,
      undefined
    )
  }

  private static escapePropertyName(name: string): ts.PropertyName {
    if (name.includes("-")) {
      return ts.factory.createStringLiteral(name)
    }
    return ts.factory.createIdentifier(name)
  }

  private mapParameterToParameter(parameter: Parameter): ts.ParameterDeclaration {
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      DefinitionsGenerator.escapeParameterName(parameter.name),
      parameter.optional ? Tokens.question : undefined,
      this.mapType(parameter.type)
    )
  }

  private static escapeParameterName(name: string): string {
    if (DefinitionsGenerator.keywords.has(name)) {
      return "_" + name
    }
    return name
  }

  private processDescription(description: string): string {
    let result = ""
    for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|(```(?:(?!```).)*```))/gs)) {
      const withLinks = text.replace(/(?<!\[)\[(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
        let link: string
        if (origLink.match(/^http(s?):\/\//)) {
          link = origLink
        } else if (origLink.match(/\.html($|#)/)) {
          link = this.docUrlBase + origLink
        } else if (this.typeNames[origLink]) {
          link = this.typeNames[origLink]
        } else {
          const referenceMatch = origLink.match(/^(.+?)::(.+)$/)
          if (referenceMatch) {
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
            link = referenceMatch[1] + fieldRef
          } else {
            console.warn(chalk.yellow(`unresolved link: ${origLink}`))
            link = origLink
          }
        }
        if (link === name) {
          return `{@link ${link}}`
        } else {
          return `{@link ${link} ${name}}`
        }
      })
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
      relative_link = reference + ".html"
    } else if (this.events.has(reference)) {
      relative_link = "events.html#" + reference
    } else if (this.defines.has(reference)) {
      relative_link = "defines.html#" + reference
    } else if (this.concepts.has(reference)) {
      relative_link = "Concepts.html#"
    } else if (this.globalObjects.has(reference)) {
      relative_link = ""
    } else {
      if (reference.includes(".")) {
        const className = reference.substr(0, reference.indexOf("."))
        return this.getDocumentationUrl(className) + "#" + reference
      } else {
        console.warn(chalk.yellow("Could not get url:", reference))
        relative_link = ""
      }
    }
    return this.docUrlBase + relative_link
  }

  private addJsDoc<T extends ts.Node>(
    node: T,
    element: { description: string; subclasses?: string[]; variant_parameter_description?: string } & WithNotes,
    reference: string | undefined,
    tags?: ts.JSDocTag[]
  ): T {
    const comment = this.docs
      ? [
          element.description,
          element.variant_parameter_description,
          element.notes?.map((n) => "**Note**: " + n),
          element.subclasses &&
            `_Can only be used if this is ${
              element.subclasses.length === 1
                ? element.subclasses[0]
                : `${element.subclasses.slice(0, -1).join(", ")} or ${
                    element.subclasses[element.subclasses.length - 1]
                  }`
            }_`,
          reference &&
            !reference.match(/\.(valid|object_name|help)/) &&
            `{@link ${this.getDocumentationUrl(reference)} View documentation}`,
        ]
          .filter((x) => x)
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

    const jsDoc = ts.factory.createJSDocComment(comment && this.processDescription(comment), tags)

    const text = printer
      .printNode(ts.EmitHint.Unspecified, jsDoc, emptySourceFile)
      .trim()
      .replace(/^\/\*|\*\/$/g, "")

    return ts.addSyntheticLeadingComment(node, SyntaxKind.MultiLineCommentTrivia, text, true)
  }

  private static createComment(text: string, multiline?: boolean): ts.EmptyStatement {
    const node = ts.factory.createEmptyStatement()
    ts.addSyntheticLeadingComment(
      node,
      multiline ? SyntaxKind.MultiLineCommentTrivia : SyntaxKind.SingleLineCommentTrivia,
      text,
      true
    )
    return node
  }
}
