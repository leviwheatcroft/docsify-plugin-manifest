import {
  is
} from 'typescript-is'

export function isUndefined (value: any): value is undefined {
  return value === undefined
}

export function isNull (value: any): value is null {
  return value === null
}
export function isString (value: any): value is string {
  return typeof value === 'string'
}
export function isArray (value: any): value is Array<any> {
  return Array.isArray(value)
}
export function isMarkedTokensHeading (
  value: any
): value is marked.Tokens.Heading {
  return is<marked.Tokens.Heading>(value)
}

export function isManifest (
  value: any
): value is Manifest {
  const isManifest = is<Manifest>(value)
  if (isManifest) return true
  console.log('meta')
  console.log('size', is<number>(value.meta.size))
  console.log('count', is<number>(value.meta.count))
  console.log('fields', is<Array<string>>(value.meta.fields))
  console.log('index', is<Array<ManifestItem>>(value.index))
  if (!is<Array<ManifestItem>>(value.index)) {
    value.index.forEach((i) => {
      if (is<ManifestItem>(i)) return
      console.log(i.path)
      Object.entries(i).forEach(([k, v]) => {
        if (is<string>(v)) return
        if (is<Array<string>>(v)) return
        console.log(k, v)
      })
    })
  }
  return false
}
export function isManifestItem (
  value: any
): value is ManifestItem {
  return is<ManifestItem>(value)
}

export function isConfig (
  value: any
): value is Config {
  return is<Config>(value)
}
export function isFields (
  value: any
): value is Fields {
  return is<Fields>(value)
}
