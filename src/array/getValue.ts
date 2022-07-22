import type { MaybeArray } from '../base/types'
import { isNullOrUnDef } from '../base/is'
import { isArray } from './isArray'

/**
 * 获取数组值指定索引值
 * 当索引为负数时，则从后往前取
 *
 * @example
 *
 * getValue([1, 2, 3], -1) => 3
 * getValue(null, -1) => undefined
 *
 */
export function getValue<T>(array: MaybeArray<T>, index: number) {
  if (isNullOrUnDef(array) || !isArray(array))
    return undefined

  if (index < 0)
    index += array.length

  return array[index]
}
