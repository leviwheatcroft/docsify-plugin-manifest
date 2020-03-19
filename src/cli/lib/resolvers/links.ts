export const links: Resolver = function (
  {
    data,
    tokens
  }
) {
  // console.log(tokens.links)
  data.links = Object.values(tokens.links)
    .map((l) => l.title).filter((t) => t)
}