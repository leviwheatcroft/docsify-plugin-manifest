import { id } from './id'
import { frontmatter } from './frontmatter'
import { headings } from './headings'
import { links } from './links'
import { path } from './path'
import { content } from './content'
import { title } from './title'

export const resolvers: {
  [key: string]: Resolver
} = {
  id,
  frontmatter,
  headings,
  links,
  path,
  content,
  title
}