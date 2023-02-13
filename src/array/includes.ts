import type { MaybeArray, Nullable } from '../base'
import { isArray } from './isArray'
import { isEmptyArray } from './isEmptyArray'

/**
 * 数组 array 是否包含 target
 *
 * @example
 *
 * includes([1, 2, 3], 1) => true
 * includes([], 0) => false
 * includes(null, 0) => false
 *
 * @param array
 * @param target
 */
export function includes<T>(array: Nullable<MaybeArray<T>>, target: T) {
  if (!isArray(array))
    return false

  if (isEmptyArray(array))
    return false

  return array.includes(target)
}
