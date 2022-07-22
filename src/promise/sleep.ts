import type { Fn } from '../base'

/**
 * Promisify setTimeout
 *
 * @param ms
 * @param callback
 */
export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>((resolve) => {
    setTimeout(async () => {
      await callback?.()
      resolve()
    }, ms)
  })
}
