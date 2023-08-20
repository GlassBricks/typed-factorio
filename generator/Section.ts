import ts from "typescript"
import { GenerationContext } from "./GenerationContext.js"
import { printer } from "./genUtil.js"

export interface SectionBuilder {
  name: string
  sectionType: SectionType

  add(statement: ts.Statement): void
}

export enum SectionType {
  Types,
  Globals,
}

export interface Section {
  name: string
  moduleType: SectionType
  statements: readonly ts.Statement[]
}

export class SectionBuilderImpl implements SectionBuilder {
  private statements: ts.Statement[] = []

  constructor(private context: GenerationContext, public name: string, public sectionType: SectionType) {}

  add(statement: ts.Statement): this {
    const name = SectionBuilderImpl.getName(statement)
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

  build(): Section {
    const addTo = this.context.addTo.get(this.name)
    if (addTo) {
      this.statements.push(...addTo)
      this.context.addTo.delete(this.name)
    }

    return {
      name: this.name,
      moduleType: this.sectionType,
      statements: this.statements,
    }
  }
}

export function getIndexFile(
  context: GenerationContext,
  sections: Section[],
  header: string = "",
  footer: string = ""
): string {
  const typeSections = sections.filter((s) => s.moduleType === SectionType.Types)

  let result = header
  result += `

/// <reference types="lua-types/5.2" />

/** @noSelfInFile */

`
  result += assembleFile(context, typeSections)
  result += footer
  return result
}

export function getGlobalsFile(
  context: GenerationContext,
  sections: Section[],
  header: string = "",
  footer: string = ""
): string {
  const globalSections = sections.filter((s) => s.moduleType === SectionType.Globals)

  let result = header
  result += `

/** @noSelfInFile  */

import type * as ${context.namespaceName} from "./"

`
  result += assembleFile(context, globalSections)
  result += footer
  return result
}

function assembleFile(context: GenerationContext, sections: Section[]): string {
  let result = ""
  for (const section of sections) {
    result += `// --- ${section.name} ---\n`
    for (const statement of section.statements)
      result += printer.printNode(ts.EmitHint.Unspecified, statement, context.manualDefinitionsSource) + "\n\n"
  }
  return result
}
