'use strict'

/**
 * Creates an Array that supports negative indices / indexes.
 * @param {Array} items
 * @returns {Array}
 */
function UArray(items) {
  if (!items) {
    return []
  }

  return new Proxy(items, {
    get(target, prop) {
      if (!isNaN(prop)) {
        let index = parseInt(prop)

        if (index < 0) {
          index += target.length
        }

        return target[index]
      } else {
        return target[prop]
      }
    },
  })
}

module.exports = UArray
