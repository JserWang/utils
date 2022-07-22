import { expect, it } from 'vitest'
import { toArray } from '../../src/array/toArray'

it('toArray', () => {
  expect(toArray([])).toEqual([])
  expect(toArray(['foo'])).toEqual(['foo'])
  expect(toArray(null)).toEqual([null])
  expect(toArray(undefined)).toEqual([undefined])
  expect(toArray('foo')).toEqual(['foo'])
})
