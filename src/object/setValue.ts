import { deepMerge } from './deepMerge'
import { isEmptyObject } from './isEmptyObject'

/**
 * 为对象赋值
 * 支持 a.b.c 形式
 *
 * const obj = {}
 * setValue(obj, 'a.b.c', 'hi') => { a: { b: { c: 'hi' } } }
 *
 * const obj = { a: { b: { c: 'hi' } } }
 * setValue(obj, 'a.b.c1', 'foo') => { a: { b: { c: 'hi', c1: 'foo' } } }
 *
 * @param target
 * @param propertyKey
 * @param value
 */
export function setValue(target: Record<any, any>, propertyKey: string, value: any) {
  const processed = propertyKey.split('.').reduceRight((p, c, index) => {
    if (index === propertyKey.split('.').length - 1)
      return { [c]: value }

    return { [c]: p }
  }, {})

  return isEmptyObject(target) ? processed : deepMerge(target, processed)
}
