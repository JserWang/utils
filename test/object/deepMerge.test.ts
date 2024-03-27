import { describe, expect, it } from 'vitest'
import { deepMerge } from '../../src'

describe('deepMerge', () => {
  it('object merge', () => {
    const obj1 = {
      a: {
        b1: ['a', 'c', 'd'],
        b: {
          c: '1',
        },
      },
    }

    const obj2 = {
      a: {
        b1: ['b', 'c'],
        b: {
          c2: '2',
        },
      },
    }

    const expected = {
      a: {
        b1: ['a', 'c', 'd', 'b'],
        b: {
          c: '1',
          c2: '2',
        },
      },
    }

    expect(deepMerge(obj1, obj2)).toEqual(expected)
  })

  it('object replace', () => {
    const obj1 = {
      a: {
        b: {
          c: '1',
        },
      },
    }

    const obj2 = {
      a: {
        b: {
          c: '2',
        },
      },
    }

    const expected = {
      a: {
        b: {
          c: '2',
        },
      },
    }

    expect(deepMerge(obj1, obj2)).toEqual(expected)
  })

  it('like assign', () => {
    const obj1 = {
      a: 1,
    }

    const obj2 = {
      b: {
        c: 'c',
      },
    }

    const expected = {
      a: 1,
      b: {
        c: 'c',
      },
    }

    expect(deepMerge(obj1, obj2)).toEqual(expected)
  })
})
