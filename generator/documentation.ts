import ts from "typescript"
import { EventRaised, WithNotes } from "./FactorioApiJson"
import { getMappedEventName } from "./files/events"
import GenerationContext from "./GenerationContext"
import { addFakeJSDoc } from "./genUtil"
import { sortByOrder } from "./util"

const docUrlBase = "https://lua-api.factorio.com/latest/"
const hardCodedLinks: Record<string, string> = {
  global: "Global.html",
  "data-lifecycle": "Data-Lifecycle.html",
  migrations: "Migrations.html",
  classes: "Classes.html",
}

function mapLink(context: GenerationContext, origLink: string): { link: string; isWebLink?: true } {
  if (origLink.match(/^http(s?):\/\//)) {
    return { link: origLink, isWebLink: true }
  } else if (origLink.match(/\.html($|#)/)) {
    return { link: docUrlBase + origLink, isWebLink: true }
  } else if (context.typeNames[origLink]) {
    return { link: context.typeNames[origLink] }
  } else if (hardCodedLinks[origLink]) {
    return {
      link: docUrlBase + hardCodedLinks[origLink],
      isWebLink: true,
    }
  }
  const referenceMatch = origLink.match(/^(.+?)::(.+)$/)
  if (referenceMatch) {
    const { link: clazz } = mapLink(context, referenceMatch[1])
    const field = referenceMatch[2]
    const operator = field.match(/(?<=operator )(.*)/)?.[1]
    let fieldRef: string
    if (!operator) {
      fieldRef = "#" + field
    } else if (operator === "#") {
      fieldRef = ".length"
    } else if (operator === "[]" || operator === "()") {
      fieldRef = "" // not supported, at least not until declaration links get standardized
    } else {
      throw new Error(`Unknown operator ${operator}`)
    }
    return { link: clazz + fieldRef }
  } else {
    context.warning(`unresolved doc reference: ${origLink}`)
    return { link: origLink }
  }
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
        const { link, isWebLink } = mapLink(context, origLink)
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
    relative_link = "Builtin-Types.html#" + reference
  } else if (context.classes.has(reference)) {
    relative_link = reference + ".html"
  } else if (context.events.has(reference)) {
    relative_link = "events.html#" + reference
  } else if (reference.startsWith("defines.")) {
    relative_link = "defines.html#" + reference
  } else if (context.concepts.has(reference)) {
    relative_link = "Concepts.html#" + reference
  } else if (context.globalObjects.has(reference)) {
    relative_link = ""
  } else if (context.globalFunctions.has(reference)) {
    relative_link = "Libraries.html#2.-new-functions"
  } else if (reference.includes(".")) {
    const className = reference.substring(0, reference.indexOf("."))
    return getDocumentationUrl(context, className) + "#" + reference
  } else {
    context.warning("Could not get documentation url:", reference)
    relative_link = ""
  }
  return docUrlBase + relative_link
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
