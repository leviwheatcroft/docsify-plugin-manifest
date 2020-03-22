// import {
//   isFields,
//   isUndefined,
//   isString,
//   isConfig
// } from 'types/typeGuards'
// import { defaults } from './defaults'
// import { getFileConfig } from './getFileConfig'
// import { getArgs } from './getArgs'
import { parseFields } from './parseFields'
import nconf from 'nconf'
// import { merge } from './merge'
import {
  silly,
  info,
  verbose
} from '@lib/console'

export function getConfig (): Config {
  nconf.argv({
    r: {
      alias: 'root',
      describe: 'root directory'
    },
    o: {
      alias: 'output',
      describe: 'output file'
    },
    p: {
      alias: 'pretty',
      describe: 'pretty print manifest'
    },
    f: {
      alias: 'fileFilters',
      describe: '<glob,...> include / exclude filters'
    },
    d: {
      alias: 'dirFilters',
      describe: '<glob,...> include / exclude directories'
    },
    i: {
      alias: 'fields',
      describe: '<field,...> fields to include, see README',
      transform: ( {value} ) => {
        return parseFields(value)
      }
    }
  })
  // nconf.env()
  nconf.file('./manifest.config.json')
  nconf.defaults({
    root: './',
    output: './.manifest.json',
    pretty: false,
    fileFilters: [
      '**/*.md',
    ],
    dirFilters: [
      '**',
      '!git',
      '!node_modules'
    ],
    fields: parseFields({ all: [] }),
  })
  console.log(nconf.get())
  return nconf.get()
}

// export function getConfig (): Config {
//   const args = getArgs()
//   if (
//     (!isUndefined(args.root)) &&
//     (!isString(args.root))
//    ) throw new RangeError()
//    if (
//     (!isUndefined(args.config)) &&
//     (!isString(args.config))
//    ) throw new RangeError()
//   const fileConfig = getFileConfig(
//     args.root || './',
//     args.config
//   )
//   silly('defaults', defaults)
//   silly('fileConfig', fileConfig)
//   silly('args', args)
//   const options = merge(
//     defaults,
//     fileConfig,
//     args
//   )
//   verbose('final config', options)
//   if (!isConfig(options)) throw new RangeError('invalid config')
//   return options
// }

