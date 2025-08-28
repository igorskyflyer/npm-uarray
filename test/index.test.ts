import { describe, expect, it } from 'vitest'
import { UArray } from '../src/index.ts'

// pass an Array
const food: string[] = UArray(['🍟', '🌭', '🍿', '🥙', '🥓'])
// pass the entries of an Array directly = arguments
const objects: string[] = UArray('🎈', '🎩', '⚽', '🥇', '🎯')

describe('UArray tests', () => {
  it('should return an empty array', () => {
    expect(UArray()).toHaveLength(0)
  })

  describe('Array[] used', () => {
    it('should return "🥓"', () => {
      expect(food[-1]).toBe('🥓')
    })

    it('should return "🍿"', () => {
      expect(food[-3]).toBe('🍿')
    })

    it('should return "🍟"', () => {
      expect(food[0]).toBe('🍟')
    })

    it('should return undefined', () => {
      expect(food[-100]).toBeUndefined()
    })

    it('should return 5', () => {
      expect(food.length).toBe(5)
    })

    it('should return 6', () => {
      food.push('🥟')
      expect(food.length).toBe(6)
    })
  }) // array-used

  describe('arguments[] used', () => {
    it('should return "🎯"', () => {
      expect(objects[-1]).toBe('🎯')
    })

    it('should return "⚽"', () => {
      expect(objects[-3]).toBe('⚽')
    })

    it('should return "🎈"', () => {
      expect(objects[0]).toBe('🎈')
    })

    it('should return undefined', () => {
      expect(objects[-100]).toBeUndefined()
    })

    it('should return 5', () => {
      expect(objects.length).toBe(5)
    })

    it('should return 6', () => {
      objects.push('🎁')
      expect(objects.length).toBe(6)
    })
  }) // arguments-passed
})
