import { expect, it } from 'vitest'
import { entries } from '../../src/object/entries'

it('omit', () => {
  const obj = {
    a: {
      a1: 'a1',
    },
    b: 'b1',
    c: 'c1',
  }

  expect(entries(null)).toEqual([])

  expect(entries(obj)).toEqual([
    ['a', { a1: 'a1' }],
    ['b', 'b1'],
    ['c', 'c1'],
  ])
})
