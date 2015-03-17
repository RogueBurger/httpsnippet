'use strict'

var util = require('util')

/**
 * Use "strong quoting" using single quotes so that we only need
 * to deal with nested single quote characters.
 * <http://wiki.bash-hackers.org/syntax/quoting#strong_quoting>
 */
module.exports = function (value) {
  var safe = /^[a-z0-9-_/.@%^=:]+$/i

  // Unless `value` is a simple shell-safe string, quote it.
  if (!safe.test(value)) {
    return util.format("'%s'", value.replace(/'/g, "'\\''"))
  }

  return value
}
