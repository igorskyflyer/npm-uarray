const chai = require('chai').assert
const UArray = require('../UArray')

const food = UArray(['🍟', '🌭', '🍿', '🥙', '🥓'])

describe('UArray tests', () => {
  it('should return an empty array', () => {
    // @ts-ignore
    chai.isEmpty(UArray())
  })

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
})
