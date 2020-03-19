declare interface Manifest {
  meta: {
    size: number
    count: number
    fields: Array<string>
  },
  index: Array<ManifestItem>
}