import ts from "typescript"
import { createComment, createDeclareModule } from "./genUtil.js"
import { GenerationContext } from "./GenerationContext.js"

export interface OutputFileBuilder {
  fileName: string

  moduleType: ModuleType

  add(statement: ts.Statement): void
}

export type ModuleType = "namespace" | "global"

export interface OutputFile {
  name: string
  moduleType: ModuleType
  statements: readonly ts.Statement[]
}

export class OutputFileBuilderImpl implements OutputFileBuilder {
  private statements: ts.Statement[] = []

  constructor(private context: GenerationContext, public fileName: string, public moduleType: ModuleType) {}

  add(statement: ts.Statement): this {
    const name = OutputFileBuilderImpl.getName(statement)
    if (name) {
      const addBefore = this.context.addBefore.get(name)
      if (addBefore) {
        this.statements.push(...addBefore)
        this.context.addBefore.delete(name)
      }
    }
    this.statements.push(statement)

    if (name) {
      const addAfter = this.context.addAfter.get(name)
      if (addAfter) {
        this.statements.push(...addAfter)
        this.context.addAfter.delete(name)
      }
    }
    return this
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

  getResult(): OutputFile {
    const addTo = this.context.addTo.get(this.fileName)
    if (addTo) {
      this.statements.push(...addTo)
      this.context.addTo.delete(this.fileName)
    }
    const result: ts.Statement[] = []
    result.push(createComment("* @noSelfInFile ", true))

    if (this.moduleType === "namespace") {
      // wrap everything in `declare namespace`...
      result.push(createDeclareModule("factorio:" + this.context.stageName, this.statements))
    } else {
      result.push(...this.statements)
    }

    return {
      name: this.fileName,
      moduleType: this.moduleType,
      statements: result,
    }
  }
}
