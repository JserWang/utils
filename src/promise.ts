/**
 * Promisify setTimeout
 * @param ms milliseconds
 * @param callback  
 * @returns 
 */
export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
