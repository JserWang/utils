import { isArray } from '../array'
import { isObject } from './isObject'

type AllKeys<T> = T extends any ? keyof T : never

type IndexValue<T, K extends PropertyKey, D = never> = T extends any
  ? K extends keyof T
    ? T[K]
    : D
  : never

type PartialKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>> extends infer O
  ? { [P in keyof O]: O[P] }
  : never

type Function = (...a: any[]) => any

type Primitives =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | Date
  | Function

type Merged<T> = [T] extends [Array<any>]
  ? { [K in keyof T]: Merged<T[K]> }
  : [T] extends [Primitives]
      ? T
      : [T] extends [object]
          ? PartialKeys<{ [K in AllKeys<T>]: Merged<IndexValue<T, K>> }, never>
          : T

interface IObject {
  [key: string]: any
}

export function deepMerge<T extends IObject[]>(...objects: T): Merged<T[number]> {
  return objects.reduce((result, current) => {
    if (isArray(current)) {
      throw new TypeError(
        'Arguments provided to deepMerge must be objects, not arrays.',
      )
    }

    Object.keys(current).forEach((key) => {
      if (isArray(result[key]) && isArray(current[key])) {
        result[key] = Array.from(
          new Set((result[key] as unknown[]).concat(current[key])),
        )
      }
      else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = deepMerge(result[key] as IObject, current[key] as IObject)
      }
      else {
        result[key] = current[key]
      }
    })

    return result
  }, {}) as any
}
