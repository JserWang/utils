import { isObject } from './isObject'

type Key = string | string[]
type KeyAsStringType<K extends Key> = K extends readonly string[] ? K[number] : K
type OmitMultiple<T, K extends Key> = Pick<T, Exclude<keyof T, KeyAsStringType<K>>>

/***
 * 排除对象中指定fields
 *
 * const obj = { a: 'a', b: 'b', c: 'c' }
 *
 * omit(obj, ['a']) => { b: 'b', c: 'c' }
 *
 * @param val
 * @param keys
 */
export function omit<T extends object, K extends Key>(val: unknown, keys: K): OmitMultiple<T, K> {
  if (!isObject(val))
    return {} as OmitMultiple<T, K>

  if (typeof keys === 'string')
    return val[keys] as OmitMultiple<T, K>

  const shallowCopy = { ...val }

  keys.forEach(key => delete shallowCopy[key])

  return shallowCopy as OmitMultiple<T, K>
}
