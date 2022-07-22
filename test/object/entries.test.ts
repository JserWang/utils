import { expect, it } from 'vitest'
import { entries } from '../../src'

it('omit', () => {
  const obj = {
    a: {
      a1: 'a1',
    },
    b: 'b1',
    c: 'c1',
  }

  expect(entries({})).toEqual([])

  expect(entries(obj)).toEqual([
    ['a', { a1: 'a1' }],
    ['b', 'b1'],
    ['c', 'c1'],
  ])
})
