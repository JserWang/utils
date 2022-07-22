import { expect, it } from 'vitest'
import { camelCase } from '../../src'

it('camelCase', () => {
  expect(camelCase(undefined)).toEqual('')

  expect(camelCase('f')).toEqual('f')

  expect(camelCase('foo bar')).toEqual('fooBar')

  expect(camelCase('/api/user/list')).toEqual('apiUserList')
})
