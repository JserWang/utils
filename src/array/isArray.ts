import type { MaybeArray } from '../base/types'

/**
 * 校验是否为数组
 *
 * @example
 * isArray("foo") => false
 * isArray([]) => true
 *
 * @param val
 */
export function isArray<T = any>(val?: MaybeArray<T>): val is Array<T> {
  return val ? Array.isArray(val) : false
}
