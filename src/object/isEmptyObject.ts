import { isNullOrUnDef } from '../base'
import { isObject } from './isObject'

/**
 * 对象是否为空
 *
 * @example
 * isEmpty(null) => true
 * isEmpty({ a: 1 }) => false
 * isEmpty({}) => true
 *
 * @param val
 */
export function isEmptyObject(val: unknown) {
  if (isNullOrUnDef(val) || !isObject(val))
    return true

  return Object.keys(val).length === 0
}
