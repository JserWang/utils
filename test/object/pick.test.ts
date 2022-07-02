import { expect, it } from 'vitest'
import { pick } from '../../src/object/pick'

it('pick', () => {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
  }

  expect(pick(null, [])).toEqual({})

  expect(pick(obj, ['a', 'b'])).toEqual({
    a: 'a',
    b: 'b',
  })

  expect(pick(obj, ['b', 'c'])).toEqual({
    b: 'b',
    c: 'c',
  })
})
