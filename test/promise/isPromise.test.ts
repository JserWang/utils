import { isPromise } from 'node:util/types'
import { expect, it } from 'vitest'

it('isPromise', () => {
  expect(isPromise(null)).toBe(false)

  expect(isPromise(undefined)).toBe(false)

  expect(isPromise({})).toBe(false)

  expect(isPromise(() => {})).toBe(false)

  expect(isPromise(Promise.resolve())).toBe(true)

  expect(isPromise(new Promise(() => {}))).toBe(true)

  class TestClass {
    then() {

    }

    catch() {

    }
  }

  expect(isPromise(new TestClass())).toBe(false)
})
