const chai = require('chai').assert
const UArray = require('../src/index.js')

// pass an Array
const food = UArray(['🍟', '🌭', '🍿', '🥙', '🥓'])
// pass the entries of an Array directly = arguments
const objects = UArray('🎈', '🎩', '⚽', '🥇', '🎯')

describe('UArray tests', () => {
  it('should return an empty array', () => {
    // @ts-ignore
    chai.isEmpty(UArray())
  })

  describe('Array[] used', () => {
    it('should return "🥓"', () => {
      chai.equal(food[-1], '🥓')
    })

    it('should return "🍿"', () => {
      chai.equal(food[-3], '🍿')
    })

    it('should return "🍟"', () => {
      chai.equal(food[0], '🍟')
    })

    it('should return undefined', () => {
      chai.isUndefined(food[-100])
    })

    it('should return 5', () => {
      chai.equal(food.length, 5)
    })

    it('should return 6', () => {
      food.push('🥟')
      chai.equal(food.length, 6)
    })
  }) // array-used

  describe('arguments[] used', () => {
    it('should return "🎯"', () => {
      chai.equal(objects[-1], '🎯')
    })

    it('should return "⚽"', () => {
      chai.equal(objects[-3], '⚽')
    })

    it('should return "🎈"', () => {
      chai.equal(objects[0], '🎈')
    })

    it('should return undefined', () => {
      chai.isUndefined(objects[-100])
    })

    it('should return 5', () => {
      chai.equal(objects.length, 5)
    })

    it('should return 6', () => {
      objects.push('🎁')
      chai.equal(objects.length, 6)
    })
  }) // arguments-passed
})
