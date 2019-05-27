'use strict'

const assert = require('assert')

const isTypedExport = require('./index.js')

assert.ok(isTypedExport(new Uint8ClampedArray([])))
assert.ok(!isTypedExport('fhqwhgads'))
