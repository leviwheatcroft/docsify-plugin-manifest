import {
  isMarkedTokensHeading
} from 'types/typeGuards'

export const headings: Resolver = function (
  {
    tokens,
    data,
    args
  }) {
  const [ depth = Infinity ] = args
  data.headings = tokens
    .filter((t) => {
      return (
        (t.type === 'heading') &&
        (t.depth <= depth)
      )
    })
    .map((h) => {
      if (!isMarkedTokensHeading(h)) throw new RangeError
      return h.text
    })
}