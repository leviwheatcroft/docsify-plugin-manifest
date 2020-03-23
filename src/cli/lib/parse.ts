import marked from 'marked'
import {
  promises as fsPromises
} from 'fs'
import matter from 'gray-matter'
import {
  parse as pathParse
} from 'path'
import { resolvers } from './resolvers'
import {
  isManifestItem
} from '@typeGuards'

const {
  readFile
} = fsPromises

export async function parse (
  path: string,
  {
    root,
    fields
  }: Config
): Promise<ManifestItem> {
  const {
    data: frontmatter,
    content
  } = matter(await readFile(path, 'utf8'))
  const tokens = marked.lexer(content)

  // object with which to accumulate the resolved fields
  const data = {}

  // iterate over fields, calling resolvers
  Object.keys(fields).forEach((field) => {
    const args = fields[field]
    const resolverHash: ResolverHash = {
      root,
      path,
      data,
      frontmatter,
      content,
      tokens,
      args
    }
    resolvers[field](resolverHash)
  })
  if (!isManifestItem(data))
    throw new RangeError()

  return data
}