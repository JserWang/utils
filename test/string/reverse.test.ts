import { expect, it } from 'vitest'
import { reverse } from '../../src/string/reverse'

it('reverse', () => {
  expect(reverse(undefined)).toEqual('')

  expect(reverse('foo')).toEqual('oof')
})
