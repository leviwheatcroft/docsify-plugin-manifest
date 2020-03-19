import { isNull } from 'types/typeGuards'

export const frontmatter: Resolver = function (
  {
    data,
    frontmatter,
    args
  }
) {
  if (!args) {
    Object.assign(data, frontmatter)
    return
  }
  let applied: Array<string> = []
  const available = Object.keys(frontmatter)
  args.forEach((a) => {
    if (a === 'all') {
      applied = [...available]
      return
    }
    const re = /^(-)?(\w+)$/
    const match = re.exec(a)
    if (isNull(match))
      throw new Error('bad frontmatter argument: ${a}')
    const [_, negate, field] = match
    if (negate) applied = applied.filter((f) => f !== field)
    else applied.push(field)
  })
  applied.forEach((f) => {
    data[f] = frontmatter[f]
  })
}