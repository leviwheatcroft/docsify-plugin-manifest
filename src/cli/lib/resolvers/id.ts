import {
  relative
} from 'path'
export const id: Resolver = function (
  {
    data,
    path,
    root
  }
) {
  data.id = relative(root, path)
}