import { is } from '../base'

/**
 * 校验是否为日期类型
 *
 * @example
 * isDate(new Date()) => true
 * isDate('2022-07-01') => false
 * isDate(null) => false
 *
 * @param val
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}
