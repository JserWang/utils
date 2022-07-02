import { expect, it } from 'vitest'
import { isObject } from '../../src/object/isObject'

it('isObject', () => {
  expect(isObject(null)).toBe(false)

  expect(isObject('')).toBe(false)

  expect(isObject({})).toBe(true)
})
