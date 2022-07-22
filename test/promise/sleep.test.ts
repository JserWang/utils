import { expect, it } from 'vitest'
import { sleep } from '../../src'

it('sleep', async () => {
  let num = 0

  await sleep(100, () => {
    num += 1
  })

  expect(num).toBe(1)
})
