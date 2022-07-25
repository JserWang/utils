import { expect, it } from 'vitest'
import { isBoolean } from '../../src'

it('isBoolean', () => {
  expect(isBoolean(new Date())).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean([])).toBe(false)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
})
