import { expect, it } from 'vitest'
import { isFunction } from '../../src'

it('isFunction', () => {
  function func() {}
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction(func)).toBe(true)

  expect(isFunction(null)).toBe(false)
  expect(isFunction(1)).toBe(false)
})
