import { is } from '../base/is'

/**
 * 校验是否为字符串
 *
 * @example
 * isString("foo") => true
 * isString(1) => false
 *
 * @param val
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}
