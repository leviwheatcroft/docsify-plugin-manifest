import {
  promises as fsPromises
} from 'fs'
import {
  join,
  relative
} from 'path'
import {
  isUndefined
} from 'types/typeGuards'
import {
  silly,
  info
} from './console'
import multimatch from 'multimatch'

const {
  readdir,
  stat
} = fsPromises

async function readdirPrepend (path: string): Promise<Array<string>> {
  let paths = await readdir(path)
  paths = paths.map((p) => join(path, p))
  return paths
}

export async function* pathGenerator (
  {
    root,
    fileFilters,
    dirFilters
  }: Config
) {
  let paths = await readdirPrepend(root)
  while (paths.length) {
    const path = paths.shift()
    if (isUndefined(path)) throw new RangeError()
    const relativePath = relative(root, path)
    
    // if (!multimatch(relativePath, filters).length) {
    //   silly(`skip: ${relativePath}`)
    //   continue
    // }
    
    const stats = await stat(path)
    if (stats.isFile()) {
      if (multimatch(relativePath, fileFilters).length) {
        info(`matched file: ${relativePath}`)
        yield path
      } else {
        info(`skipped file: ${relativePath}`)
      }
    } else if (stats.isDirectory()) {
      if (multimatch(relativePath, dirFilters).length) {
        info(`matched dir: ${relativePath}`)
        paths = [...await readdirPrepend(path), ...paths]
      } else {
        info(`skipped dir: ${relativePath}`)
      }
    }
  }
}