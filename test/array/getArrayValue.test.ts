import { expect, it } from 'vitest'
import { getArrayValue } from '../../src/array/getArrayValue'

it('getValue from array', () => {
  expect(getArrayValue(null, 1)).toBe(undefined)

  expect(getArrayValue(undefined, 1)).toBe(undefined)

  expect(getArrayValue([1, 2], 1)).toBe(2)

  expect(getArrayValue([1, 2, 3], -1)).toBe(3)
})
