import { camelCase } from './camelCase'
import { isString } from './isString'

/**
 * 字符串转帕斯卡格式
 *
 * @example
 * pascalCase("foo bar") => 'FooBar'
 * pascalCase("user/test") => 'UserTest'
 *
 * @param val
 */
export function pascalCase(val: unknown): string {
  if (!isString(val))
    return ''

  if (val.length === 1)
    return val.toUpperCase()

  const camelCased = camelCase(val)
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}
