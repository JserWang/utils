import { expect, it } from 'vitest'
import { isDate } from '../../src'

it('isDate', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate('2022-07-01')).toBe(false)
  expect(isDate(null)).toBe(false)
})
