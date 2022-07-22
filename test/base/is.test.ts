import { describe, expect, it } from 'vitest'
import { isDef, isNull, isUnDef } from '../../src'

describe('base is', () => {
  it('isDef', () => {
    expect(isDef(undefined)).toBe(false)
    expect(isDef(null)).toBe(true)
  })

  it('isUnDef', () => {
    expect(isUnDef(undefined)).toBe(true)
    expect(isUnDef(null)).toBe(false)
  })

  it('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull('')).toBe(false)
    expect(isNull(0)).toBe(false)
  })
})

