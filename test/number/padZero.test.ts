import { expect, it } from 'vitest'
import { padZero } from '../../src'

it('padZero', () => {
  expect(padZero({}, 2)).toBe('')
  expect(padZero(null, 2)).toBe('')
  expect(padZero(undefined, 2)).toBe('')
  expect(padZero(1, 2)).toBe('001')
  expect(padZero('2', 2)).toBe('002')
  expect(padZero('2', 1)).toBe('02')
  expect(padZero('3')).toBe('03')
})
