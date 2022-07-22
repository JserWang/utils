import { expect, it } from 'vitest'
import { toArray } from '../../src'

it('toArray', () => {
  expect(toArray([])).toEqual([])
  expect(toArray(['foo'])).toEqual(['foo'])
  expect(toArray(null)).toEqual([])
  expect(toArray(undefined)).toEqual([])
  expect(toArray('foo')).toEqual(['foo'])
})
