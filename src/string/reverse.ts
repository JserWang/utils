import { isString } from './isString'

/**
 * 颠倒字符串
 *
 * @example
 * reverse('foo') => 'oof'
 *
 * @param val
 */
export function reverse(val: unknown): string {
  if (!isString(val))
    return ''

  return val.split('').reverse().join('')
}
