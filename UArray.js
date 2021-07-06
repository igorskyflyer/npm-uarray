// @ts-nocheck
'use strict'

/**
 * Creates an Array that supports negative indices / indexes.
 * @param {Array} items
 * @returns {Array}
 */
function UArray(items) {
  // handles both undefined param,
  // and tests if the param is an Array
  if (!(items instanceof Array)) {
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
