import type { Parser, ParserOptions } from 'prettier'
import {
  parsers as astroParsers,
  languages,
  printers,
} from 'prettier-plugin-astro'
import type { AstroAttribute, AstroNode } from './types'

// Sort attributes alphabetically (case-insensitive).
const sortAttributes = (attributes: AstroAttribute[]): AstroAttribute[] =>
  [...attributes]?.sort((a, b) =>
    a?.name?.toLowerCase().localeCompare(b?.name?.toLowerCase())
  )

// Recursively traverse the AST and sort attributes on every element node.
const traverseAndSort = (node: AstroNode): void => {
  if (node?.type === 'element' && node?.attributes) {
    node.attributes = sortAttributes(node.attributes)
  }

  if ('children' in node && Array.isArray(node?.children)) {
    node.children.forEach(child => traverseAndSort(child))
  }
}

if (!astroParsers.astro) {
  console.warn(
    'prettier-plugin-astro-attributes: The official prettier-plugin-astro parser is not detected. This plugin requires prettier-plugin-astro to function correctly.'
  )
}

const baseParser = astroParsers.astro as Parser<AstroNode>

// Create an extended parser that wraps the official parser.
const extendedParser: Parser<AstroNode> = {
  ...baseParser,
  parse(text: string, options?: ParserOptions<AstroNode>): AstroNode {
    // Use the official parser to generate the AST.
    const ast = baseParser.parse(text, options) as AstroNode
    // Apply attribute sorting transformation.
    traverseAndSort(ast)
    return ast
  },
}

export const parsers = {
  astro: extendedParser,
}

const plugin = { languages, parsers, printers }
export default plugin
