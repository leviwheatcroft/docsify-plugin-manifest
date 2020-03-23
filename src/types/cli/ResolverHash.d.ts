interface ResolverHash {
  data: ManifestItemFragment
  frontmatter: Frontmatter
  args: Array<string>
  content: string
  tokens: marked.TokensList
  path: string,
  root: string,
}