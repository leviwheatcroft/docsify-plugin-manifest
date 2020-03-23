export interface Manifest {
  meta: {
    size: number
    count: number
    fields: Array<string>
  },
  index: Array<ManifestItem>
}
export interface ManifestItem {
  path: string
  [key: string]: string | Array<string>
}
