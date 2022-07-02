import { isString } from './isString'
import { trim } from './trim'

const reg = /[-_.\W\s]+(\w|$)/g

/**
 * 字符串转驼峰格式
 *
 * camelCase('foo bar') => 'fooBar'
 *
 * camelCase('api/user/list') => 'apiUserList'
 *
 * @param val
 */
export function camelCase(val: unknown): string {
  if (!isString(val))
    return ''

  if (val.length === 1)
    return val.toLowerCase()

  return trim(val).replace(reg, (_, ch) => ch.toUpperCase())
}
