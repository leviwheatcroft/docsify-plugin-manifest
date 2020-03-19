import {
  titleCase
} from 'title-case'
import {
  parse
} from 'path'
import {
  isUndefined
} from 'types/typeGuards'

export const title: Resolver = function (
  {
    data,
    frontmatter,
    path
  }
) {
  if (!isUndefined(frontmatter.title)) {
    data.title = frontmatter.title
    return
  }
  let title = parse(path).name
  title = title.replace('/[-_]/g', ' ')
  title = titleCase(title)
  data.title = title
}