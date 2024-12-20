import { isNumber } from './isNumber'

/**
 * 将数字转换为百分比
 *
 * @example
 *
 * toPercentage(undefined) => ''
 * toPercentage(0.1234) => '12.30%'
 * toPercentage(0.1234, 3) => '12.340%'
 *
 * @param val
 * @param decimals 保留小数位数
 */
export function toPercentage(val: unknown, decimals: number = 2) {
  if (isNumber(val))
    return `${(val * 100).toFixed(decimals)}%`

  return ''
}
