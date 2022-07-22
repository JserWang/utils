import { expect, it } from 'vitest'
import { keys } from '../../src/object/keys'

it('omit', () => {
  const obj = {
    a: {
      a1: 'a1',
    },
    b: 'b',
    c: 'c',
  }

  expect(keys(null)).toEqual([])

  expect(keys(obj)).toEqual(['a', 'b', 'c'])
})
