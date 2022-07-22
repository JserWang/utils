import { expect, it } from 'vitest'
import { exchange } from '../../src'

it('exchange', () => {
  expect(exchange(null, 0, 1)).toEqual([])
  expect(exchange([], 0, 1)).toEqual([])
  expect(exchange([1, 2, 3], 0, 1)).toEqual([2, 1, 3])
})
