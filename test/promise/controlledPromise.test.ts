import { expect, it } from 'vitest'
import { createControlledPromise } from '../../src'

it('controlledPromise', async () => {
  let num = 0

  const promise = createControlledPromise<number>()

  promise.then(n => num = n)

  expect(num).toBe(0)

  setTimeout(() => {
    promise.resolve(++num)
  }, 200)

  await promise

  expect(num).toBe(1)
})
