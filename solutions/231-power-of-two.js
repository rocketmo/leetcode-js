const assert = require('assert');

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  // n must have only a single `1` bit
  return (n & (n - 1)) === 0;
};

assert(isPowerOfTwo(1));
assert(isPowerOfTwo(4));
assert(isPowerOfTwo(16));
assert.equal(isPowerOfTwo(0), false);
assert.equal(isPowerOfTwo(3), false);
assert.equal(isPowerOfTwo(5), false);
assert.equal(isPowerOfTwo(15), false);
assert.equal(isPowerOfTwo(-4), false);
