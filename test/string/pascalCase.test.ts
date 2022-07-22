import { expect, it } from 'vitest'
import { pascalCase } from '../../src'

it('pascalCase', () => {
  expect(pascalCase(undefined)).toEqual('')

  expect(pascalCase('f')).toEqual('F')

  expect(pascalCase('foo bar')).toEqual('FooBar')

  expect(pascalCase(' foo bar ')).toEqual('FooBar')

  expect(pascalCase('/api/user/info')).toEqual('ApiUserInfo')
})
