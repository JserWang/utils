import type { MaybePromise } from '../base'

interface CreateControlledPromise<T = void> extends Promise<T> {
  resolve: (value: MaybePromise<T>) => void
  reject: (reason?: any) => void
}

/**
 * 创建一个受控的Promise
 *
 * @example
 *
 * const promise = controlledPromise()
 *
 * await promise
 *
 * // 在其他任意上下文中使用
 * promise.resolve(data)
 *
 */
export function createControlledPromise<T>() {
  let resolve: any, reject: any
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as CreateControlledPromise<T>

  promise.resolve = resolve
  promise.reject = reject

  return promise
}
