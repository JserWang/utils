import { expect, it } from 'vitest'
import { isEmptyArray } from '../../src'

it('array isEmpty', () => {
  expect(isEmptyArray(null)).toBe(true)

  expect(isEmptyArray(undefined)).toBe(true)

  expect(isEmptyArray(1)).toBe(true)

  expect(isEmptyArray(['1'])).toBe(false)

  expect(isEmptyArray([])).toBe(true)
})
