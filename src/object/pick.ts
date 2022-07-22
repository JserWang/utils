import { isObject } from './isObject'

/**
 * 从对象中取某些key组成新对象
 *
 * @example
 * const obj = { a: 'a', b: 'b', c: 'c', d: undefined }
 *
 * pick(obj, ['a', 'b']) => { a: 'a', b: 'b' }
 * pick(obj, ['d']) => {}
 * pick(obj, ['d'], true) => {d: undefined}
 *
 * @param val
 * @param keys
 * @param pickUndefined
 */
export function pick<T, K extends keyof T>(val: T, keys: K[], pickUndefined = false): Pick<T, K> {
  if (!isObject(val))
    return {} as Pick<T, K>

  return keys.reduce((p, k) => {
    if (k in val) {
      if (!pickUndefined || val[k] !== undefined)
        p[k] = val[k]
    }
    return p
  }, {} as Pick<T, K>)
}
