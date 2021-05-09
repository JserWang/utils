export const isString = (val: any): val is string => typeof val === 'string'

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'
