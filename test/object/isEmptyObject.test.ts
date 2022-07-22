import { expect, it } from 'vitest'
import { isEmptyObject } from '../../src/object/isEmptyObject'

it('object isEmpty', () => {
  expect(isEmptyObject(null)).toBe(true)

  expect(isEmptyObject(undefined)).toBe(true)

  expect(isEmptyObject(1)).toBe(true)

  expect(isEmptyObject({ a: 1 })).toBe(false)

  expect(isEmptyObject({})).toBe(true)
})
