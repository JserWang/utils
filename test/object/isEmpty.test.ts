import { expect, it } from 'vitest'
import { isEmpty } from '../../src/object/isEmpty'

it('object isEmpty', () => {
  expect(isEmpty(null)).toBe(true)

  expect(isEmpty(undefined)).toBe(true)

  expect(isEmpty(1)).toBe(true)

  expect(isEmpty({ a: 1 })).toBe(false)

  expect(isEmpty({})).toBe(true)
})
