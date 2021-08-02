import * as ts from "typescript"
import { NodeFlags, SyntaxKind } from "typescript"
import { createRecordType, Modifiers, Tokens, toPascalCase, Types } from "./gen-util"
import { assertEquals, assertNever, sortByOrder } from "./util"
import { printer } from "./printer"
import { addJsDoc, createComment } from "./jsDoc"

export default class DefinitionsGenerator {
  private statements: ts.Statement[] = []
  private numericTypes = new Set<string>()

  private static keywords = new Set(["function", "interface"])

  constructor(
    private readonly docs: FactorioApiJson,
    private readonly options: {
      readonly docs: boolean
    }
  ) {
    if (docs.application !== "factorio") {
      throw new Error("Unsupported application type " + docs.application)
    }
    if (docs.api_version !== 1) {
      throw new Error("Unsupported api version " + docs.api_version)
    }
  }

  private addHeaders() {
    this.statements.push(createComment('/ <reference types="lua-types/5.2" />'))
  }

  private generateAll() {
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
    this.statements.push(createComment(" Builtins"))
    for (const builtin of this.docs.builtin_types.sort(sortByOrder)) {
      if (builtin.name === "boolean" || builtin.name === "string") continue
      let type: ts.TypeNode
      if (builtin.name === "table") {
        type = Types.object
      } else {
        this.numericTypes.add(builtin.name)
        type = Types.number
      }
      const typeAliasDeclaration = ts.factory.createTypeAliasDeclaration(
        undefined,
        undefined,
        builtin.name,
        undefined,
        type
      )
      if (this.options.docs) addJsDoc(typeAliasDeclaration, builtin)
      this.statements.push(typeAliasDeclaration)
    }
  }

  private generateDefines() {
    this.statements.push(createComment(" Defines"))

    const generateDefinesDeclaration = (path: string, define: Define, modifiers?: ts.Modifier[]): ts.Statement => {
      let declaration: ts.Statement
      if (define.values) {
        const members = define.values
          .sort(sortByOrder)
          .map((m, i) => ts.factory.createEnumMember(m.name, ts.factory.createNumericLiteral(i)))
        declaration = ts.factory.createEnumDeclaration(undefined, modifiers, define.name, members)
      } else if (define.subkeys) {
        const declarations = define.subkeys
          .sort(sortByOrder)
          .map((d) => generateDefinesDeclaration(path + (path ? "." : "") + define.name, d))
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
      if (this.options.docs) addJsDoc(declaration, define)
      return declaration
    }

    const defines = generateDefinesDeclaration(
      "",
      {
        order: 0,
        name: "defines",
        description: "", // TODO
        subkeys: this.docs.defines,
      },
      [Modifiers.declare]
    )
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
    this.statements.push(createComment(" Events"))
    this.statements.push(
      ...this.docs.events.sort(sortByOrder).map((event) => {
        const name = DefinitionsGenerator.getMappedEventName(event)
        const interfaceDeclaration = ts.factory.createInterfaceDeclaration(
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
        )
        if (this.options.docs) addJsDoc(interfaceDeclaration, event)
        return interfaceDeclaration
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
    for (const clazz of this.docs.classes.sort(sortByOrder)) {
      const inherits: ts.ExpressionWithTypeArguments[] = []
      // const members = new Map<string, ts.TypeElement[]>()
      const members: ts.TypeElement[] = []

      if (clazz.base_classes) {
        inherits.push(
          ...clazz.base_classes.map((b) =>
            ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(b), undefined)
          )
        )
      }
      for (const attribute of clazz.attributes.sort(sortByOrder)) {
        const property = this.mapAttribute(attribute)
        // for (const subclass of attribute.subclasses || [""]) {
        //   getOrPut(members, subclass, []).push(property)
        // }
        members.push(property)
      }

      for (const method of clazz.methods.sort(sortByOrder)) {
        const property = this.mapMethod(clazz.name, method)
        // for (const subclass of method.subclasses || [""]) {
        //   getOrPut(members, subclass, []).push(property)
        // }
        members.push(property)
      }

      let indexOperator = clazz.operators.find((x) => x.name === "index") as IndexOperator | undefined
      let lengthOperator = clazz.operators.find((x) => x.name === "length") as LengthOperator | undefined
      const callOperator = clazz.operators.find((x) => x.name === "call") as CallOperator | undefined
      if (indexOperator && lengthOperator && clazz.name !== "LuaGuiElement") {
        // todo: better determining of stuff
        const extending = indexOperator.write ? "Array" : "ReadonlyArray"
        inherits.push(
          ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(extending), [
            this.mapType(indexOperator.type),
          ])
        )
        indexOperator = undefined
        lengthOperator = undefined
      }

      if (callOperator) {
        const asMethod = this.mapMethod(clazz.name, callOperator)
        members
          // .get("")!
          .push(ts.factory.createCallSignature(undefined, asMethod.parameters, asMethod.type))
      }
      if (indexOperator) {
        // todo
      }
      if (lengthOperator) {
        members
          // .get("")!
          .push(
            ts.factory.createPropertySignature(
              [Modifiers.readonly],
              "length",
              undefined,
              ts.factory.createTypeReferenceNode("LuaLengthOperator", [this.mapType(lengthOperator.type)])
            )
          )
      }

      const rootHeritageClause =
        inherits.length !== 0 ? [ts.factory.createHeritageClause(SyntaxKind.ExtendsKeyword, inherits)] : undefined

      // const hasMultipleTypes = members.size > 1

      const baseDeclaration = ts.factory.createInterfaceDeclaration(
        undefined,
        undefined,
        // hasMultipleTypes ? "Base" + clazz.name : clazz.name,
        clazz.name,
        undefined,
        rootHeritageClause,
        members // .get("")!
      )
      this.statements.push(baseDeclaration)

      // if (members.size <= 1) {
      if (this.options.docs) addJsDoc(baseDeclaration, clazz)
      // } else {
      //   // todo: discriminator + default + stuff
      //   const heritageClause = [
      //     ts.factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [
      //      ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Base" + clazz.name), undefined),
      //     ]),
      //   ]
      //   const typeNames: ts.TypeNode[] = []
      //
      //   for (const [key, value] of members) {
      //     if (!key) continue
      //     const name = toPascalCase(key) + clazz.name
      //     this.statements.push(
      //       ts.factory.createInterfaceDeclaration(undefined, undefined, name, undefined, heritageClause, value)
      //     )
      //     typeNames.push(ts.factory.createTypeReferenceNode(name))
      //   }
      //   const actualDeclaration = ts.factory.createTypeAliasDeclaration(
      //     undefined,
      //     undefined,
      //     clazz.name,
      //     undefined,
      //     ts.factory.createUnionTypeNode(typeNames)
      //   )
      //   this.statements.push(actualDeclaration)
      //   if (this.options.docs) {
      //     addJsDoc(actualDeclaration, clazz)
      //   }
      // }
    }
  }

  private generateConcepts() {
    this.statements.push(createComment(" Concepts"))
    for (const concept of this.docs.concepts.sort(sortByOrder)) {
      let type: ts.TypeNode | ts.InterfaceDeclaration

      if (concept.category === "union") {
        type = ts.factory.createUnionTypeNode(
          concept.options.sort(sortByOrder).map((option) => this.mapType(option.type))
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
          concept.attributes.sort(sortByOrder).map((m) => this.mapAttribute(m))
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
          concept.options.sort(sortByOrder).map((option) => Types.stringLiteral(option.name))
        )
      } else if (concept.category === "table_or_array") {
        // todo: separate type shenanigans
        const table = ts.factory.createTypeLiteralNode(
          concept.parameters.sort(sortByOrder).map((m) => this.mapParameterToProperty(m))
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
      if (this.options.docs) addJsDoc(declaration, concept)
      this.statements.push(declaration)
    }
  }

  private generateGlobalObjects() {
    this.statements.push(createComment(" Global objects"))
    for (const globalObject of this.docs.global_objects.sort(sortByOrder)) {
      const definition = ts.factory.createVariableStatement(
        [Modifiers.declare],
        ts.factory.createVariableDeclarationList(
          [ts.factory.createVariableDeclaration(globalObject.name, undefined, this.mapType(globalObject.type))],
          ts.NodeFlags.Const
        )
      )
      if (this.options.docs) addJsDoc(definition, globalObject)
      this.statements.push(definition)
    }
  }

  private isIndexableType(type: Type): boolean {
    return (
      typeof type === "string" &&
      (type === "string" || type === "number" || type.startsWith("defines.") || this.numericTypes.has(type))
    )
  }

  private mapAttribute(attribute: Attribute): ts.TypeElement {
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
    if (this.options.docs) addJsDoc(member, attribute)
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
    if (this.options.docs) {
      const params: ts.JSDocTag[] = method.takes_table
        ? []
        : method.parameters
            .filter((p) => p.description)
            .map((p) =>
              ts.factory.createJSDocParameterTag(
                undefined,
                ts.factory.createIdentifier(p.name),
                false,
                undefined,
                undefined,
                "- " + p.description
              )
            )
      if (method.return_description) {
        params.push(ts.factory.createJSDocReturnTag(undefined, undefined, method.return_description))
      }
      addJsDoc(methodSignature, method, params)
    }
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
            undefined,
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
    if (memberForDocs && this.options.docs) {
      addJsDoc(declaration, memberForDocs)
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
      const recordType = this.isIndexableType(type.key) ? "Record" : "LuaTable"
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
    const propertySignature = ts.factory.createPropertySignature(
      [Modifiers.readonly],
      DefinitionsGenerator.escapePropertyName(parameter.name),
      parameter.optional ? Tokens.question : undefined,
      this.mapType(parameter.type)
    )
    if (this.options.docs) addJsDoc(propertySignature, parameter)
    return propertySignature
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
      DefinitionsGenerator.escapeName(parameter.name),
      parameter.optional ? Tokens.question : undefined,
      this.mapType(parameter.type)
    )
  }

  private static escapeName(name: string): string {
    if (DefinitionsGenerator.keywords.has(name)) {
      return "_" + name
    }
    return name
  }
}
