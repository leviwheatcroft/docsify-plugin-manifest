import { isUndefined, isArray, isString } from 'types/typeGuards'
import {
  parseFields
} from './parseFields'

function firstNotUndefined (...args: Array<any>): any {
  while (args.length) {
    const arg = args.shift()
    if (!isUndefined(arg)) return arg
  }
}

export function merge (
  defaults: ConfigRaw,
  fileConfig: ConfigRaw,
  args: ConfigRaw
): ConfigRaw {
  const config: ConfigRaw = {}
  config.root = firstNotUndefined(
    args.root,
    fileConfig.root,
    defaults.root
  )
  config.pretty = firstNotUndefined(
    args.pretty,
    fileConfig.pretty,
    defaults.pretty
  )
  config.version = '1.0.0'

  config.fileFilters = [
    defaults.fileFilters,
    args.fileFilters || [],
    fileConfig.fileFilters || [],
  ].map((f) => {
    if (isString(f)) return f.split(',')
    if (isUndefined(f)) return []
    return f
  }).flat()

  config.dirFilters = [
    defaults.dirFilters,
    args.dirFilters,
    fileConfig.dirFilters
  ].map((f) => {
    if (isString(f)) return f.split(',')
    if (isUndefined(f)) return []
    return f
  }).flat()
  
  config.fields = parseFields(firstNotUndefined(
    args.fields,
    fileConfig.fields,
    defaults.fields
  ))

  return config
}