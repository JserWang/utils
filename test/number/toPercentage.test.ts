import { expect, it } from 'vitest'
import { toPercentage } from '../../src'

it('toPercentage', () => {
  expect(toPercentage(undefined)).toBe('')
  expect(toPercentage(0.1234)).toBe('12.34%')
  expect(toPercentage(0.1234, 3)).toBe('12.340%')
})
