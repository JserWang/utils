import { expect, it } from 'vitest'
import { reverse } from '../../src'

it('reverse', () => {
  expect(reverse(undefined)).toEqual('')

  expect(reverse('foo')).toEqual('oof')
})
