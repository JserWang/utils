import { expect, it } from 'vitest'
import { unique } from '../../src'

it('array unique', () => {
  expect(unique(null)).toEqual([])

  expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3])

  expect(unique([], 'name')).toEqual([])

  const expectArr = [
    {
      name: 'foo',
    },
    {
      name: 'bar',
    },
    {
      name: 'foo',
    },
  ]

  expect(unique(expectArr, 'name'))
    .toEqual(
      [{
        name: 'foo',
      },
      {
        name: 'bar',
      }],
    )
})
