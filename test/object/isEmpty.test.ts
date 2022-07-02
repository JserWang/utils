import { expect, it } from 'vitest'
import { isEmpty } from '../../src/object/isEmpty'

it('object isEmpty', () => {
  expect(isEmpty(null)).toBe(false)

  expect(isEmpty(1)).toBe(false)

  expect(isEmpty({ a: 1 })).toBe(false)

  expect(isEmpty({})).toBe(true)
})
