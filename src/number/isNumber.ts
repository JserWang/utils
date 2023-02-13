import { is } from '../base'

/**
 * 校验是否为数值
 *
 * @example
 * isNumber({}) => false
 * isNumber(null) => false
 * isNumber(Number.NaN) => false
 * isNumber(0) => true
 *
 * @param val
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number') && !Number.isNaN(val)
}
