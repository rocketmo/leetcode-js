const assert = require('assert');

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let bin = n.toString(2).split('').reverse().join('');
  while (bin.length < 32) {
    bin += '0';
  }

  return parseInt(bin, 2);
};

assert.equal(reverseBits(43261596), 964176192);
assert.equal(reverseBits(4294967293), 3221225471 );
