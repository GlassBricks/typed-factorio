import ts from "typescript"
import GenerationContext from "./GenerationContext"
import { createComment } from "./genUtil"

export class StatementsList {
  private statements: ts.Statement[] = [createComment("* @noSelfInFile ", true)]

  constructor(private context: GenerationContext, private fileName: string) {}

  add(statement: ts.Statement): this {
    const name = StatementsList.getName(statement)
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

  getResult(): DefinitionsFile {
    const addTo = this.context.addTo.get(this.fileName)
    if (addTo) {
      this.statements.push(...addTo)
      this.context.addTo.delete(this.fileName)
    }
    return {
      name: this.fileName,
      statements: this.statements,
    }
  }
}

export interface DefinitionsFile {
  name: string
  statements: readonly ts.Statement[]
}
