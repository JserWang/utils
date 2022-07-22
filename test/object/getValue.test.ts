import { expect, it } from 'vitest'
import { getValue } from '../../src/object/getValue'

it('getValue from object', () => {
  const obj = {
    a: {
      b: {
        c: 'hi',
      },
    },
  }

  expect(getValue(null, 'a')).toBe(undefined)

  expect(getValue({}, '')).toBe(undefined)

  expect(getValue(obj, 'a.b.c')).toEqual('hi')

  expect(getValue(obj, 'a.b.c.d')).toBe(undefined)

  expect(getValue(obj, 'a.b')).toEqual({ c: 'hi' })
})
