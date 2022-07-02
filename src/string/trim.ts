import { isString } from './isString'

const reg = /^[-_.\W\s]+|[-_.\W\s]+$/g

/**
 * 增强版trim，移除传入字符串前后非字母、数字的字符
 *
 * @example
 * trim('_FOO_') => 'FOO'
 * trim('-FOO-') => 'FOO'
 * trim(' FOO ') => 'FOO'
 *
 * @param val
 */
export function trim(val: unknown): string {
  if (!isString(val))
    return ''

  return val.trim().replace(reg, '')
}
