import {
  promises
} from 'fs'
const {
  writeFile
} = promises
import * as manifest from '@lib/manifest'

import {
  resolve
} from 'path'

export async function write (
  {
    root,
    pretty,
    output
  }: Config
) {
  const path = resolve(root, output)
  const data = manifest.toJSON(pretty)
  await writeFile(path, data, { encoding: 'utf8' })
}