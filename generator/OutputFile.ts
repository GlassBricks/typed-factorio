import ts from "typescript"
import { createComment, createDeclareGlobal, createDeclareModule, createSimpleImports } from "./genUtil.js"

export enum FactorioModule {
  Runtime = "runtime",
  Prototype = "prototype",
  Common = "common",
  Global = "global",
}

export interface OutputFile {
  name: string
  module: FactorioModule
  statements: readonly ts.Statement[]
}

const compareIgnoreCase = (a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: "base" })

export class OutputFileBuilder {
  private imports = new Map<FactorioModule, Set<string>>()
  private statements: ts.Statement[] = []

  constructor(
    public readonly fileName: string,
    public readonly module: FactorioModule,
  ) {}

  addImport(module: FactorioModule, importName: string): void {
    if (module === this.module || module === FactorioModule.Global) return
    let imports = this.imports.get(module)
    if (!imports) {
      this.imports.set(module, (imports = new Set()))
    }
    imports.add(importName)
  }

  add(statement: ts.Statement): void {
    this.statements.push(statement)
  }

  build(): OutputFile {
    const result: ts.Statement[] = []
    result.push(createComment("* @noSelfInFile ", true))

    // imports
    for (const [fromModule, importsSet] of this.imports) {
      const imports = [...importsSet].sort(compareIgnoreCase)
      result.push(createSimpleImports(imports, "factorio:" + fromModule))
    }

    const module =
      this.module === FactorioModule.Global
        ? createDeclareGlobal(this.statements)
        : createDeclareModule("factorio:" + this.module, this.statements)
    result.push(module)

    return {
      name: this.fileName,
      module: this.module,
      statements: result,
    }
  }
}
