import { isObject } from './isObject'

/**
 * 从对象中取某些key组成新对象
 *
 * const obj = { a: 'a', b: 'b', c: 'c' }
 * pick(obj, ['a', 'b']) => { a: 'a', b: 'b' }
 *
 * @param val
 * @param keys
 */
export function pick<T extends object, K extends keyof T>(val: unknown, keys: readonly K[]): Pick<T, K> {
  if (!isObject(val))
    return {} as Pick<T, K>

  const res = {} as Pick<T, K>

  keys.forEach((key) => {
    if (key in val)
      res[key] = val[key]
  })

  return res
}
