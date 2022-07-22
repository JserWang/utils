/**
 * 可能为空的值
 */
export type Nullable<T> = T | null | undefined

/**
 * 可能为数组
 */
export type MaybeArray<T> = T | Array<T>

/**
 * 可能是Promise
 */
export type MaybePromise<T> = T | PromiseLike<T>

type MergeInsertions<T> =
    T extends object
      ? { [K in keyof T]: MergeInsertions<T[K]> }
      : T

export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>
