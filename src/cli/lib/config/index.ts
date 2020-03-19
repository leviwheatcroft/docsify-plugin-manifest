import {
  isFields,
  isUndefined,
  isString,
  isConfig
} from 'types/typeGuards'
import { defaults } from './defaults'
import { getFileConfig } from './getFileConfig'
import { getArgs } from './getArgs'
import { parseFields } from './parseFields'
import { merge } from './merge'
import {
  silly,
  info,
  verbose
} from '@lib/console'

export function getConfig (): Config {
  const args = getArgs()
  if (
    (!isUndefined(args.root)) &&
    (!isString(args.root))
   ) throw new RangeError()
   if (
    (!isUndefined(args.config)) &&
    (!isString(args.config))
   ) throw new RangeError()
  const fileConfig = getFileConfig(
    args.root || './',
    args.config
  )
  silly('defaults', defaults)
  silly('fileConfig', fileConfig)
  silly('args', args)
  const options = merge(
    defaults,
    fileConfig,
    args
  )
  verbose('final config', options)
  if (!isConfig(options)) throw new RangeError('invalid config')
  return options
}

