'use strict'

const TypedArray = Object.getPrototypeOf(Int8Array)

module.exports = (obj) => obj instanceof TypedArray
