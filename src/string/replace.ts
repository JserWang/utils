import { isString } from './isString'

/**
 * 将字符串中的全量 ch1 替换 ch2
 *
 * @example
 * replace('foo baz', 'o', 'i') => 'fii baz'
 *
 * @param val
 * @param ch1
 * @param ch2
 */
export function replace(val: unknown, ch1?: string, ch2 = ''): string {
  if (!isString(val))
    return ''

  if (!ch1)
    return val

  return val.split(ch1).join(ch2)
}
