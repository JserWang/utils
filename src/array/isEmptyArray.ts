import { isNullOrUnDef } from '../base'
import { isArray } from './isArray'

/**
 * 数组是否为空
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1]) => false
 * isEmpty(null) => true
 *
 * @param val
 */
export function isEmptyArray(val: unknown) {
  if (isNullOrUnDef(val) || !isArray(val))
    return true

  return val.length === 0
}
