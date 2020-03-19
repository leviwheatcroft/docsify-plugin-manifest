import sizeOf from "./sizeOf"
import { info } from "./console"
import { isManifest } from "@typeGuards"

const index: Array<ManifestItem> = []
const fields: Array<string> = []

export function toJSON (pretty: boolean = false): string {
  const manifest: Manifest = {
    meta: {
      size: sizeOf(index),
      count: index.length,
      fields
    },
    index
  }
  info('meta:', manifest.meta)
  if (!isManifest(manifest))
    throw new RangeError()
  return JSON.stringify(manifest, null, pretty ? 2 : undefined)
}

export function addItem (
  item: ManifestItem
): void {
  Object.keys(item).forEach((k) => {
    if (fields.includes(k)) return
    fields.push(k)
  })
  index.push(item)
}