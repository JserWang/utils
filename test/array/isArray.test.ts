import { expect, it } from 'vitest'
import { isArray } from '../../src/array/isArray'

it('isArray', () => {
  expect(isArray([])).toBe(true)
  expect(isArray(['foo', 'bar'])).toBe(true)
  expect(isArray(undefined)).toBe(false)
  expect(isArray(null)).toBe(false)
  expect(isArray('')).toBe(false)
  expect(isArray('foo')).toBe(false)
})
