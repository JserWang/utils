import { is } from '../base'

/**
 * 校验是否为布尔类型
 *
 * @example
 * isBoolean(true) => true
 * isBoolean(false) => true
 * isBoolean([]) => false
 * isBoolean(null) => false
 *
 * @param val
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}
