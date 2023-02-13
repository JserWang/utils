import { expect, it } from 'vitest'
import { isNumber } from '../../src'

it('isNumber', () => {
  expect(isNumber({})).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber(Number.NaN)).toBe(false)
  expect(isNumber(1)).toBe(true)
})
