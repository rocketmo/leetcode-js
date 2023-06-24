const assert = require('assert');

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (n === 0) {
    return 0;
  }

  return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};

assert.equal(trailingZeroes(3), 0);
assert.equal(trailingZeroes(5), 1);
assert.equal(trailingZeroes(0), 0);
assert.equal(trailingZeroes(25), 6);
