import { isObject } from '../object'
import { isFunction } from '../function'

/**
 * 校验是否为Promise
 *
 * @example
 * isPromise({}) => false
 * isPromise(null) => false
 * isPromise(() => {}) => false
 * isPromise(Promise.resolve()) => true
 *
 * @param val
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
