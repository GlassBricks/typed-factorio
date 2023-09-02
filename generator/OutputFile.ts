import ts from "typescript"
import { createComment, createDeclareGlobal, createDeclareModule, createSimpleImports } from "./genUtil.js"
import { ManualDefinitions } from "./manualDefinitions.js"

export interface OutputFileBuilder {
  fileName: string
  moduleType: ModuleType

  addImport(fromModule: string, importName: string): void
  add(statement: ts.Statement): void
  addOutsideModule(statement: ts.Statement): void
}

export interface OutputFile {
  name: string
  statements: readonly ts.Statement[]
}

export enum ModuleType {
  Runtime = "runtime",
  Prototype = "prototype",
  Global = "global",
}

export class OutputFileBuilderImpl implements OutputFileBuilder {
  private statements: ts.Statement[] = []
  private endStatements: ts.Statement[] = []
  private imports = new Map<string, Set<string>>()

  constructor(private manualDefs: ManualDefinitions, public fileName: string, public moduleType: ModuleType) {}

  addImport(fromModule: string, importName: string): void {
    if (fromModule === this.moduleType) return
    let imports = this.imports.get(fromModule)
    if (!imports) {
      imports = new Set()
      this.imports.set(fromModule, imports)
    }
    imports.add(importName)
  }

  add(statement: ts.Statement): void {
    const name = OutputFileBuilderImpl.getName(statement)
    if (name) {
      const addBefore = this.manualDefs.addBefore.get(name)
      if (addBefore) {
        this.statements.push(...addBefore)
        this.manualDefs.addBefore.delete(name)
      }
    }
    this.statements.push(statement)

    if (name) {
      const addAfter = this.manualDefs.addAfter.get(name)
      if (addAfter) {
        this.statements.push(...addAfter)
        this.manualDefs.addAfter.delete(name)
      }
    }
  }

  addOutsideModule(statement: ts.Statement): void {
    this.endStatements.push(statement)
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

  build(): OutputFile {
    const addTo = this.manualDefs.addTo.get(this.fileName)
    if (addTo) {
      this.statements.push(...addTo)
      this.manualDefs.addTo.delete(this.fileName)
    }
    const result: ts.Statement[] = []
    result.push(createComment("* @noSelfInFile ", true))

    // imports
    for (const [fromModule, importsSet] of this.imports) {
      result.push(createSimpleImports([...importsSet].sort(), "factorio:" + fromModule))
    }

    const module =
      this.moduleType === "global"
        ? createDeclareGlobal(this.statements)
        : createDeclareModule("factorio:" + this.moduleType, this.statements)
    result.push(module)

    result.push(...this.endStatements)

    return {
      name: this.fileName,
      statements: result,
    }
  }
}
