import { is } from '../common/is'

/**
 * 校验是否为对象
 *
 * isObject({}) => true
 *
 * isObject(1) => false
 *
 * @param val
 */
export function isObject<T extends Record<any, any>>(val: any): val is T {
  return val !== null && is(val, 'Object')
}
