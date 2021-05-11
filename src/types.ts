export type Nullable<T> = T | null | undefined

export type NonNullable<T> = T extends null | undefined ? never : T

export type Fn<T = void> = () => T

export type Indexable<T = any> = {
  [key: string]: T
}

export type Recordable<T = any> = Record<string, T>

export type ElementOf<T> = T extends (infer E)[] ? E : never
