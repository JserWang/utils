import { isString } from '../string'
import { isNumber } from './isNumber'

/**
 * 数字前补0
 *
 * @example
 * padZero({}) => ''
 * padZero(null) => ''
 * padZero(undefined) => ''
 * padZero(1, 1) => '1'
 * padZero(1, 2) => '01'
 * padZero('2', 3) => '002'
 *
 * @param val
 * @param length 期望最终字符串长度
 */
export function padZero(val: unknown, length = 1) {
  if (isString(val) || isNumber(val)) {
    if (`${val}`.length >= length)
      return `${val}`

    return `${val}`.padStart(length, '0')
  }

  return ''
}
