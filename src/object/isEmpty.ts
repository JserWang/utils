import { isObject } from './isObject'

export function isEmpty(val: unknown) {
  return isObject(val) && Object.keys(val).length === 0
}
