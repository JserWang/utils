import { expect, it } from 'vitest'
import { replace } from '../../src/string/replace'

it('replace', () => {
  expect(replace(undefined)).toEqual('')

  expect(replace('foo baz', 'o', 'i')).toEqual('fii baz')

  expect(replace('foo baz', '', 'i')).toEqual('foo baz')

  expect(replace('foo baz')).toEqual('foo baz')
})
