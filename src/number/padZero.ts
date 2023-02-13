import { isString } from '../string'
import { isNumber } from './isNumber'

/**
 * 数字前补0
 *
 * @example
 * padZero({}) => ''
 * padZero(null) => ''
 * padZero(undefined) => ''
 * padZero(1, 1) => '01'
 * padZero(1) => '01'
 * padZero('2', 2) => '002'
 *
 * @param val
 * @param count
 */
export function padZero(val: unknown, count = 1) {
  if (isString(val) || isNumber(val))
    return `${val}`.padStart(`${val}`.length + count, '0')

  return ''
}
