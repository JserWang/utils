import { expect, it } from 'vitest'
import { omit } from '../../src'

it('omit', () => {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
  }

  expect(omit(null, 'a')).toEqual({})

  expect(omit(obj, 'a')).toEqual({
    b: 'b',
    c: 'c',
  })

  expect(omit(obj, ['b', 'c'])).toEqual({
    a: 'a',
  })
})
