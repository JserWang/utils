import { expect, it } from 'vitest'
import { getObjectValue } from '../../src'

it('getValue from object', () => {
  const obj = {
    a: {
      b: {
        c: 'hi',
      },
    },
  }

  expect(getObjectValue(null, 'a')).toBe(undefined)

  expect(getObjectValue({}, '')).toBe(undefined)

  expect(getObjectValue(obj, 'a.b.c')).toEqual('hi')

  expect(getObjectValue(obj, 'a.b.c.d')).toBe(undefined)

  expect(getObjectValue(obj, 'a.b')).toEqual({ c: 'hi' })
})
