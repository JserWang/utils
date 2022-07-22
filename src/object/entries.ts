import { isObject } from './isObject'

export function entries<T extends object>(obj?: T): Array<[keyof T, T[keyof T]]> {
  return !isObject<T>(obj) ? [] : Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}
