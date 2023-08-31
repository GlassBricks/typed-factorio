import ts from "typescript"
import { EventRaised, WithNotes } from "./FactorioRuntimeApiJson.js"
import { getMappedEventName } from "./runtime/events.js"
import { addFakeJSDoc } from "./genUtil.js"
import { sortByOrder } from "./util.js"
import { LiteralType, PrototypeWithExamples } from "./FactorioPrototypeApiJson.js"
import { GenerationContext } from "./GenerationContext.js"
import assert from "assert"

export interface Documentable extends WithNotes, PrototypeWithExamples {
  description: string
  subclasses?: string[]
  raises?: EventRaised[]
  instance_limit?: number
  default?: string | LiteralType
  deprecated?: boolean
}
const pageLinks = new Set(["global", "data-lifecycle", "migrations", "classes", "concepts", "events", "defines"])

function mapLink(context: GenerationContext, origLink: string): string | undefined {
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

  if (pageLinks.has(name)) {
    return context.docUrlBase() + name + ".html"
  }

  if (stage !== "runtime" && stage !== "prototype") {
    context.warning(`unknown doc link stage: ${origLink}`)
  }

  const typeName: string | undefined = context.references.get(name)
  if (stage === context.stageName && !typeName) {
    context.warning(`unresolved doc reference: ${origLink}`)
    return undefined
  }

  let fieldRef = ""
  if (member) {
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
  }

  // if still has reference of same name, don't use import
  if (!typeName && stage !== context.stageName) {
    return `import("factorio:${stage}").${name}${fieldRef}`
  }
  return typeName + fieldRef
}

export function processDescription(
  context: GenerationContext,
  description: string | undefined,
  normalizeNewlines = true
): string | undefined {
  if (!description) return undefined
  let result = ""

  for (const [, text, codeBlock] of description.matchAll(/((?:(?!```).)*)(?:$|```((?:(?!```).)*)```)/gs)) {
    let withLinks = text.replace(/\[(?!\[)(.+?)]\((.+?)\)/g, (_, name: string, origLink: string) => {
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
    // .replace("__1__\n   ", "__1__") // fix for LocalisedString description
    if (normalizeNewlines) {
      withLinks = withLinks.replace(/\n(?!([\n-]))/g, "\n\n")
    }
    result += withLinks

    if (codeBlock) result += "```" + codeBlock + "```"
  }

  return result
}

function getDefaultComment(element: Documentable): string | undefined {
  const defaultValue = element.default
  if (defaultValue === undefined) return
  const defaultAsStr = typeof defaultValue === "string" ? defaultValue : JSON.stringify(defaultValue.value)
  return `**Default:** \`${defaultAsStr}\``
}

function getRaisesComment(context: GenerationContext, raises: EventRaised[] | undefined): string | undefined {
  if (!raises || raises.length === 0) return
  let result = "## Raised events\n"
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

function getInstanceLimitComment(instanceLimit: number | undefined): string | undefined {
  if (!instanceLimit) return
  return `_Prototype limited to **${instanceLimit}** total instances_`
}

function getListsComment(element: Documentable, onlineReference: string | undefined): string | undefined {
  if (!element.lists) return
  assert(onlineReference)
  return element.lists
    .map((list) => {
      // only get the header, link to online documentation
      const header = list.substring(0, list.indexOf("\n"))
      return `{@link ${onlineReference} > ${header}}`
    })
    .join("\n\n")
}

function processExample(context: GenerationContext, example: string): string {
  const [, header, codeBlock] = example.match(/^(.*?)(?:$|\n?```\n((?:(?!```).)*)```)/s)!
  const result = processDescription(context, header + "\n" + codeBlock.trim(), false)!
  return result.replaceAll("\n", "\n * ")
}

export function createTag(tag: string, comment?: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier(tag), comment)
}

export function addJsDoc<T extends ts.Node>(
  context: GenerationContext,
  node: T,
  element: Documentable,
  onlineReferenceName: string | undefined,
  tags: ts.JSDocTag[] = []
): T {
  const onlineDocUrl = onlineReferenceName && context.getOnlineDocUrl(onlineReferenceName)

  const comment = [
    getDefaultComment(element),
    processDescription(context, element.description),
    getRaisesComment(context, element.raises),
    getSubclassesComment(element.subclasses),
    getInstanceLimitComment(element.instance_limit),
    getListsComment(element, onlineDocUrl),
  ]
    .filter((x) => x)
    .join("\n\n")

  if (element.deprecated) {
    tags.push(createTag("deprecated"))
  }
  if (element.examples) {
    tags.push(...element.examples.map((e) => createTag("example", processExample(context, e))))
  }
  if (element.notes) {
    tags.push(createTag("remarks", processDescription(context, element.notes.join("<br>"))))
  }

  if (!comment && tags.length === 0) return node

  if (onlineDocUrl) {
    tags.push(createSeeTag(`{@link ${onlineDocUrl} Online documentation}`))
  }
  // move @noSelf annotation to the end
  const noSelfIndex = tags.findIndex((x) => x.tagName.text === "noSelf")
  if (noSelfIndex !== -1) {
    const noSelf = tags.splice(noSelfIndex, 1)[0]
    tags.push(noSelf)
  }

  const normalizedComment = comment.replace(/\n\n\n+/g, "\n\n").replace(/^\n+|\n+$/, "")

  const jsDoc = ts.factory.createJSDocComment(normalizedComment, tags)
  addFakeJSDoc(node, jsDoc)

  return node
}

export function createSeeTag(name: string): ts.JSDocUnknownTag {
  return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("see"), name)
}
