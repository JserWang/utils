import { expect, it } from 'vitest'
import { keys } from '../../src'

it('omit', () => {
  const obj = {
    a: {
      a1: 'a1',
    },
    b: 'b',
    c: 'c',
  }

  expect(keys({})).toEqual([])

  expect(keys(obj)).toEqual(['a', 'b', 'c'])
})
