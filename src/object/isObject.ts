import { is } from '../base/is'

/**
 * 校验是否为对象
 *
 * @example
 * isObject({}) => true
 * isObject(null) => false
 * isObject(1) => false
 *
 * @param val
 */
export function isObject<T extends Record<any, any>>(val: any): val is T {
  return val !== null && is(val, 'Object')
}
