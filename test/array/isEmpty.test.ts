import { expect, it } from 'vitest'
import { isEmpty } from '../../src/array/isEmpty'

it('array isEmpty', () => {
  expect(isEmpty(null)).toBe(true)

  expect(isEmpty(undefined)).toBe(true)

  expect(isEmpty(1)).toBe(true)

  expect(isEmpty(['1'])).toBe(false)

  expect(isEmpty([])).toBe(true)
})
