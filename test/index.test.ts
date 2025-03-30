import prettier from 'prettier'
import { describe, expect, it } from 'vitest'
import plugin from '../dist/index.js'
import { basic } from './fixtures/basic.ts'

function normalize(str: string): string {
  return str.trim().replace(/\r\n/g, '\n')
}

describe('Prettier Plugin for Sorting HTML Attributes in Astro Files', () => {
  it('sorts attributes alphabetically, leaving "class" attribute unchanged', async () => {
    const formatted = await prettier.format(basic.input, {
      parser: 'astro',
      plugins: [plugin],
    })
    expect(normalize(formatted)).toBe(normalize(basic.output))
  })
})
