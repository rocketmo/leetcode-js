const assert = require('assert');

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let distance = 0;

  for (let i = 0; i < 32; i += 1) {
    const bitX = (x >> i) & 1;
    const bitY = (y >> i) & 1;
    distance += (bitX === bitY) ? 0 : 1;
  }

  return distance;
};

assert.equal(hammingDistance(1, 4), 2);
assert.equal(hammingDistance(3, 1), 1);
