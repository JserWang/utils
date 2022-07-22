import { isObject } from './isObject'

/**
 * 为Object.keys增加类型
 *
 * @example
 * keys(null) => []
 * keys({ a: 1, b: 2 }) => ['a', 'b']
 *
 * @param obj
 */
export function keys<T extends object>(obj?: T): Array<keyof T> {
  return !isObject(obj) ? [] : Object.keys(obj)
}
