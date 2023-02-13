import { expect, it } from 'vitest'
import { includes } from '../../src'

it('includes', () => {
  expect(includes(null, 0)).toBe(false)
  expect(includes([], 0)).toBe(false)
  expect(includes([1, 2, 3], 1)).toBe(true)
})
