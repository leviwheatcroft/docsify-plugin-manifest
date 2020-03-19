import {
  relative
} from 'path'
export const path: Resolver = function (
  {
    data,
    path,
    root
  }
) {
  data.path = relative(root, path)
}