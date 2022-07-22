import { describe, expect, it } from 'vitest'
import { setValue } from '../../src'

describe('setValue', () => {
  it('set value to empty object', () => {
    const target = {}
    const propertyKey = 'a.b.c'
    const expected = {
      a: {
        b: {
          c: 'hi',
        },
      },
    }

    expect(setValue(target, propertyKey, 'hi')).toEqual(expected)
  })

  it('set value to object which not exists key', () => {
    const target = {
      a: {
        b: {
          c1: 'foo',
        },
      },
    }
    const propertyKey = 'a.b.c'
    const expected = {
      a: {
        b: {
          c1: 'foo',
          c: 'hi',
        },
      },
    }

    expect(setValue(target, propertyKey, 'hi')).toEqual(expected)
  })

  it('set value to object', () => {
    const target = {
      a: {
        b: {
          c: {
            d: 'foo',
          },
        },
      },
    }
    const propertyKey = 'a.b.c'
    const expected = {
      a: {
        b: {
          c: 'hi',
        },
      },
    }

    expect(setValue(target, propertyKey, 'hi')).toEqual(expected)
  })
})

