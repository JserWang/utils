import { isObject } from './isObject'

/**
 * 对象是否为空
 *
 * @example
 * isEmpty(null) => false
 * isEmpty({ a: 1 }) => false
 * isEmpty({}) => true
 *
 * @param val
 */
export function isEmpty(val: unknown) {
  return isObject(val) && Object.keys(val).length === 0
}
