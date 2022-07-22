import type { DeepMerge } from '../base/types'
import { isObject } from './isObject'

/**
 * 深拷贝
 *
 * @param target
 * @param sources
 */
export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
  if (!sources.length) {
    // @ts-expect-error
    return target
  }
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        // @ts-expect-error
        if (!target[key])
          Object.assign(target, { [key]: {} })
        // @ts-expect-error
        deepMerge(target[key], source[key])
      }
      else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return deepMerge(target, ...sources)
}
