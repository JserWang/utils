import type { MaybeArray, Nullable } from '../base/types'
import { isArray } from './isArray'
import { isEmpty } from './isEmpty'
import { toArray } from './toArray'

/**
 * 将数组中 from 和 to 对应的索引进行位置交换
 *
 * @example
 *
 * exchange([1, 2, 3], 0, 1) => [2, 1, 3]
 * exchange([], 0, 1) => []
 * exchange(null, 0, 1) => []
 *
 * @param array
 * @param from
 * @param to
 */
export function exchange<T>(array: Nullable<MaybeArray<T>>, from: number, to: number) {
  if (!isArray(array))
    return toArray(array)

  if (isEmpty(array))
    return array

  array.splice(to, 0, array.splice(from, 1)[0])

  return array
}
