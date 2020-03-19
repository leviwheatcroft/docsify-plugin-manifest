import {
  promises
} from 'fs'
const {
  writeFile
} = promises
import * as manifest from '@lib/manifest'

import {
  join
} from 'path'

export async function write (
  {
    root,
    pretty,
  }: Config
) {
  const path = join(root, '.manifest.json')
  const data = manifest.toJSON(pretty)
  await writeFile(path, data, { encoding: 'utf8' })
}