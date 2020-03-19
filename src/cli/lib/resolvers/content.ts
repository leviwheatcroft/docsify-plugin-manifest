import { isUndefined } from 'types/typeGuards'

export const content: Resolver = function (
  {
    data,
    content,
    args
  }
) {
  const [ lengthStr ] = args
  if (!isUndefined(lengthStr)) {
    const lengthInt = parseInt(lengthStr)
    content = content.slice(0, lengthInt - 3)
    content = content.replace(/\s.*?$/, '...')
  }
  data.content = content
}