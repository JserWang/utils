import type { MaybeArray } from '../base'
import { isNullOrUnDef } from '../base'
import { isArray } from './isArray'
import { toArray } from './toArray'

/**
 * 数组去重
 *
 * @example
 *
 * unique([1, 1, 2, 3, 3]) => [1, 2, 3]
 *
 * const arr = [
 * {
 *   name: 1
 * },
 * {
 *   name: 2
 * },
 * {
 *   name: 1
 * }]
 *
 * unique(arr, 'name') => [{ name: 1 }, { name: 2 }]
 *
 * @param array
 * @param key
 */
export function unique<T>(array: MaybeArray<T>, key?: keyof T) {
  if (!isArray(array))
    return toArray(array)

  if (isNullOrUnDef(key))
    return Array.from(new Set(array))

  return Array.from(new Map(array.map(item => [item[key], item])).values())
}
