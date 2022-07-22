import { expect, it } from 'vitest'
import { trim } from '../../src'

it('trim', () => {
  expect(trim(undefined)).toEqual('')

  expect(trim('__FOO__')).toEqual('FOO')

  expect(trim(' FOO ')).toEqual('FOO')

  expect(trim('--FOO--')).toEqual('FOO')

  expect(trim('--F OO--')).toEqual('F OO')
})
