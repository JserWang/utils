import { expect, it } from 'vitest'
import { isString } from '../../src/string/isString'

it('isString', () => {
  expect(isString(null)).toBe(false)

  expect(isString(undefined)).toBe(false)

  expect(isString(1)).toBe(false)

  expect(isString({})).toBe(false)

  expect(isString('')).toBe(true)
})
