import type { MaybeArray, Nullable } from '../base/types'
import { isNullOrUnDef } from '../base/is'
import { isArray } from './isArray'

/**
 * 将可能为数组的值转为数组
 *
 * @example
 * toArray('foo') => ['foo']
 * toArray(['foo']) => ['foo']
 * toArray(null) => []
 * toArray(undefined) => []
 *
 * @param array
 */
export function toArray<T>(array?: Nullable<MaybeArray<T>>): Array<T> {
  return !isNullOrUnDef(array) ? isArray(array) ? array : [array] : []
}
