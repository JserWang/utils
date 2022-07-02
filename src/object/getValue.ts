import { isObject } from './isObject'

/**
 * 根据属性名从对象中取值
 * 支持 a.b.c 的形式
 *
 * const obj = { a: { b: { c: { d: 'hello' } } } }
 *
 * getValue(obj, 'a.b.c') => { d: 'hello' }
 * getValue(obj, 'a.b.c.d') => 'hello'
 * getValue(obj, 'a1') => undefined
 *
 * @param obj
 * @param propertyKey
 */
export function getValue(obj: Record<string, any>, propertyKey: string) {
  if (!propertyKey)
    return undefined

  if (!isObject(obj))
    return undefined

  const keyList = propertyKey.split('.')
  return keyList.reduce((obj, key) => {
    if (isObject(obj) && Reflect.has(obj, key))
      return obj[key]

    return undefined
  }, obj)
}
