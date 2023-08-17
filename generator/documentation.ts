import ts from "typescript"
import { EventRaised, WithNotes } from "./FactorioRuntimeApiJson.js"
import { getMappedEventName } from "./files/events.js"
import { GenerationContext } from "./GenerationContext.js"
import { addFakeJSDoc } from "./genUtil.js"
import { sortByOrder } from "./util.js"

const pageLinks = new Set(["global", "data-lifecycle", "migrations", "classes", "concepts", "events", "defines"])
function mapLink(context: GenerationContext, origLink: string, warn = true): string | undefined {
  if (origLink.match(/^http(s?):\/\//)) {
    return origLink
  }
  // hardcoded exception
  if (origLink === "libraries.html") {
    return context.docUrlBase() + "libraries.html"
  }

  const match = origLink.match(/(.*?):(.*?)(?:::(.*))?$/)
  if (!match) {
    context.warning(`unknown doc link: ${origLink}`)
    return undefined
  }
  const [, stage, name, member] = match

  if (stage === "prototype") {
    const link2 = mapLink(context, `runtime:${name}${member ? "::" + member : ""}`, (warn = false))
    if (link2) return link2
    context.warning(`todo: prototype link: ${origLink}`)
    return undefined
  } else if (stage !== "runtime") {
    context.warning(`unknown doc link stage: ${origLink}`)
    return undefined
  }
  if (pageLinks.has(name)) {
    return context.docUrlBase() + name + ".html"
  }

  if (!context.typeNames[name]) {
    if (warn) context.warning(`unresolved doc reference: ${origLink}`)
    return undefined
  }
  const typeName = context.typeNames[name]
  if (!member) {
    return typeName
  }

  let fieldRef: string
  const operator = member.match(/^(.*)_operator$/)?.[1]
  if (!operator) {
    fieldRef = "#" + member
  } else if (operator === "length") {
    fieldRef = "#length"
  } else if (operator === "[]" || operator === "()") {
    fieldRef = "" // not supported, at least not until declaration links get standardized
  } else {
    throw new Error(`Unknown operator ${operator}`)
  }
  return typeName + fieldRef
}

export function processDescription(context: GenerationContext, description: string | undefined): string | undefined {
  if (!description) return undefined
  let result = ""

  for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|```((?:(?!```).)*)```)/gs)) {
    const withLinks = text
      .replace(/\[(?!\[)(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
        if (name === "string" || name === "number" || name === "boolean") {
          return `\`${name}\``
        }
        let link = mapLink(context, origLink)
        if (!link) link = origLink
        const isWebLink = link.startsWith("http")
        const tag = isWebLink ? "linkplain" : "link"
        if (link === name) {
          return `{@${tag} ${link}}`
        } else {
          return `{@${tag} ${link} ${name}}`
        }
      })
      .replace("__1__\n   ", "__1__") // fix for LocalisedString description
      .replace(/\n(?!([\n-]))/g, "\n\n")
    result += withLinks

    if (codeBlock) result += "```" + codeBlock + "```"
  }

  return result
}

function getDocumentationUrl(context: GenerationContext, reference: string): string {
  let relative_link: string
  if (context.builtins.has(reference)) {
    relative_link = "builtin-types.html#" + reference
  } else if (context.classes.has(reference)) {
    relative_link = `classes/${reference}.html`
  } else if (context.events.has(reference)) {
    relative_link = "events.html#" + reference
  } else if (reference.startsWith("defines.")) {
    relative_link = "defines.html#" + reference
  } else if (context.concepts.has(reference)) {
    relative_link = "concepts.html#" + reference
  } else if (context.globalObjects.has(reference)) {
    relative_link = ""
  } else if (context.globalFunctions.has(reference)) {
    relative_link = "auxiliary/libraries.html#new-functions"
  } else if (reference.includes(".")) {
    const className = reference.substring(0, reference.indexOf("."))
    const memberName = reference.substring(reference.indexOf(".") + 1)
    const operatorMatch = memberName.match(/^operator%20(.*)$/)?.[1]
    let referenceLink: string
    if (!operatorMatch) {
      referenceLink = reference
    } else if (operatorMatch === "#") {
      referenceLink = className + ".length_operator"
    } else if (operatorMatch === "[]") {
      referenceLink = className + ".index_operator"
    } else if (operatorMatch === "()") {
      referenceLink = className + ".call_operator"
    } else {
      context.warning(`Unknown operator ${operatorMatch}`)
      referenceLink = reference
    }
    return getDocumentationUrl(context, className) + "#" + referenceLink
  } else {
    context.warning("Could not get documentation url:", reference)
    relative_link = ""
  }
  return context.docUrlBase() + relative_link
}

function getRaisesComment(context: GenerationContext, raises: EventRaised[] | undefined): string | undefined {
  if (!raises || raises.length === 0) return
  let result = "**Raised events:**\n"
  for (const event of raises.sort(sortByOrder)) {
    const eventName = event.name
    const eventLink = getMappedEventName(eventName)
    const eventDescription = processDescription(context, event.description)
    const eventTimeframe = event.timeframe
    result += `- {@link ${eventLink} ${eventName}}${event.optional ? "?" : ""} _${eventTimeframe}_${
      eventDescription ? " " + eventDescription : ""
    }\n`
  }
  return result
}

function getSubclassesComment(subclasses: string[] | undefined): string | undefined {
  if (!subclasses || subclasses.length === 0) return
  return `_Can only be used if this is ${
    subclasses.length === 1
      ? subclasses[0]
      : `${subclasses.slice(0, -1).join(", ")} or ${subclasses[subclasses.length - 1]}`
  }_`
}

function processExample(context: GenerationContext, example: string): string {
  if (example.startsWith("```")) {
    example = "\n" + example
  }
  // add " * " to each line that is not the first
  return processDescription(context, example)!.replaceAll("\n", "\n * ")
}

export function addJsDoc<T extends ts.Node>(
  context: GenerationContext,
  node: T,
  element: {
    description: string
    subclasses?: string[]
    raises?: EventRaised[]
  } & WithNotes,
  reference: string | undefined,
  tags?: ts.JSDocTag[]
): T {
  let comment = [
    processDescription(context, element.description),
    getRaisesComment(context, element.raises),
    getSubclassesComment(element.subclasses),
  ]
    .filter((x) => x)
    .join("\n\n")

  tags = tags || []

  if (element.examples) {
    tags.push(
      ...element.examples.map((e) =>
        ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("example"), processExample(context, e))
      )
    )
  }
  if (element.notes) {
    tags.push(
      ts.factory.createJSDocUnknownTag(
        ts.factory.createIdentifier("remarks"),
        processDescription(context, element.notes.join("<br>"))
      )
    )
  }

  if (!comment && tags.length === 0) return node

  if (reference) {
    tags.push(createSeeTag(`{@link ${getDocumentationUrl(context, reference)} Online documentation}`))
  }
  // move @noSelf annotation to the end
  const noSelfIndex = tags.findIndex((x) => x.tagName.text === "noSelf")
  if (noSelfIndex !== -1) {
    const noSelf = tags.splice(noSelfIndex, 1)[0]
    tags.push(noSelf)
  }

  comment = comment.replace(/\n\n\n+/g, "\n\n").replace(/^\n+|\n+$/, "")

  const jsDoc = ts.factory.createJSDocComment(comment, tags)
  addFakeJSDoc(node, jsDoc)

  return node
}

export function createSeeTag(name: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("see"), name)
}
