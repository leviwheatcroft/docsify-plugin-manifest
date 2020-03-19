import { getConfig } from './lib/config'
import { pathGenerator } from './lib/pathGenerator'
import { parse } from './lib/parse'
import { write } from './lib/write'
import * as manifest from '@lib/manifest'
import {
  info
} from '@lib/console'

async function generateManifest () {
  const config = getConfig()
  for await (const path of pathGenerator(config)) {
    manifest.addItem(await parse(path, config))
  }
  write(config)
}

generateManifest()