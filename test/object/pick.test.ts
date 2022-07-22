import { expect, it } from 'vitest'
import { pick } from '../../src/object/pick'

it('pick', () => {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: undefined,
    e: null,
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

  expect(pick(obj, ['d'])).toEqual({})

  expect(pick(obj, ['d'], true)).toEqual({ d: undefined })

  expect(pick(obj, ['e'])).toEqual({ e: null })
})
