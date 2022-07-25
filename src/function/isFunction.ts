import { is } from '../base'

/**
 * 校验是否为函数
 *
 * @example
 * isFunction({}) => false
 * isFunction(null) => false
 * isFunction(() => {}) => true
 *
 * @param val
 */
export function isFunction(val: unknown): val is Function {
  return is(val, 'Function')
}
