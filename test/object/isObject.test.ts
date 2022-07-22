import { expect, it } from 'vitest'
import { isObject } from '../../src'

it('isObject', () => {
  expect(isObject(null)).toBe(false)

  expect(isObject('')).toBe(false)

  expect(isObject({})).toBe(true)
})
