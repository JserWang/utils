export const isString = (val: any): val is string => typeof val === 'string'

export const isBrowser = (): boolean => typeof window !== 'undefined'
