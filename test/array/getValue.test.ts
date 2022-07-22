import { expect, it } from 'vitest'
import { getValue } from '../../src/array/getValue'

it('getValue from array', () => {
  expect(getValue(null, 1)).toBe(undefined)

  expect(getValue(undefined, 1)).toBe(undefined)

  expect(getValue([1, 2], 1)).toBe(2)

  expect(getValue([1, 2, 3], -1)).toBe(3)
})
