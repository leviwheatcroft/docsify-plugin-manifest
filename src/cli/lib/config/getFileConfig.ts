import {
  isNull,
  isUndefined,
  isConfig
} from 'types/typeGuards'
import {
  join
} from 'path'
import {
  readFileSync,
  statSync
} from 'fs'
import JSON5 from 'json5'
import hjson from 'hjson'
import yaml from 'yaml'

function findFile (
  root: string,
  configFile?: string
): string | undefined {
  let check: Array<string> = [
    '.manifest.config.json',
    '.manifest.config.json5',
    '.manifest.config.hjson',
    '.manifest.config.yaml',
    '.manifest.config.yml',
  ]
  if (!isUndefined(configFile)) check.unshift(configFile)
  check = check.map((p) => join(root, p))
  return check.find((p) => {
    try {
      statSync(p)
      return true
    } catch (err) {
      return false
    }
  })
}

function readFile (path: string, format: string): string | Config {
  if (format === 'js') {
    const config = require(path)
    return config
  }
  return readFileSync(path, 'utf8')
}

function getFileFormat (path: string): string {
  const re = /\.(\w{1,5})$/
  const match = re.exec(path)
  if (isNull(match)) throw new RangeError()
  const [_, format] = match
  return format
}

const parsers: Parsers = {
  json: (raw: string): Config => JSON.parse(raw),
  json5: (raw: string): Config => JSON5.parse(raw),
  hjson: (raw: string): Config => hjson.parse(raw),
  yaml: (raw: string): Config => yaml.parse(raw),
  yml: (raw: string): Config => yaml.parse(raw)
}

function parseFile (
  rawConfig: string | Config,
  format: string
): Config {
  if (isConfig(rawConfig)) return rawConfig
  return parsers[format](rawConfig)
}

export function getFileConfig (
  root: string,
  configFile?: string
): ConfigRaw {
  const path = findFile(root, configFile)
  if (isUndefined(path)) return {}
  const format = getFileFormat(path)
  const rawConfig = readFile(path, format)
  return parseFile(rawConfig, format)
}