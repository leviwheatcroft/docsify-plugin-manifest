import {
  isNull,
  isUndefined,
  isFields
} from 'types/typeGuards'
import {
  resolvers
} from '@lib/resolvers'

export function parseFields (
  rawFields: string | Fields
): Fields {
  let fields: Fields = {}
  if (isFields(rawFields)) {
    if (rawFields.all) Object.keys(resolvers).forEach((r) => fields[r] = [])
    delete rawFields.all
    Object.assign(fields, rawFields)
    return fields
  }
  rawFields.split(',').forEach((f: string) => {
    const re = /^(\w+)\[?([\w,]+)?\]?$/
    const match = re.exec(f)
    if (isNull(match))
      throw new Error(`bad fields option: --fields: ${rawFields}`)
    const [_, negate, field, args] = match
    if (
      (!negate) &&
      (field === 'all')
    ) {
      Object.keys(resolvers).forEach((r) => fields[r] = [])
      return
    }
    if (
      (negate) &&
      (field === 'all')
    ) {
      fields = {}
      return
    }
    if (
      (negate && args) ||
      (negate && !fields[field])
    )
      throw new Error(`bad fields option: --fields: ${rawFields}`)
    if (negate) {
      delete fields[field]
      return
    }
    if (isUndefined(args)) fields[field] = []
    else fields[field] = args.split(',')
  })
  if (isUndefined(fields.id)) fields.id = []
  return fields
}