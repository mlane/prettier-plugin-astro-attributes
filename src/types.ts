/** Explicitly defined AstroPosition type from prettier-plugin-astro (based on @astrojs/compiler) */
type AstroAttribute = {
  name: string
  type: 'attribute'
  value?: string
}

type AstroElement = {
  // Attributes are stored in an "attributes" array.
  attributes?: AstroAttribute[]
  children: AstroNode[]
  // The official parser puts the tag name in "name".
  name: string
  type: 'element'
}

type AstroFrontmatter = {
  type: 'frontmatter'
  value: string
}

type AstroNode = AstroElement | AstroFrontmatter | AstroRoot | AstroTextNode

type AstroTextNode = {
  type: 'text'
  value: string
}

type AstroRoot = {
  children: AstroNode[]
  frontmatter?: string
  type: 'root'
}

export type { AstroAttribute, AstroNode }
