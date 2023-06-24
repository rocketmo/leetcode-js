const assert = require('assert');

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  let carry = 0;
  let sum = '';

  while (aIdx >= 0 || bIdx >= 0 || carry > 0) {
    let numA = aIdx >= 0 ? parseInt(a[aIdx]) : 0;
    let numB = bIdx >= 0 ? parseInt(b[bIdx]) : 0;

    let total = numA + numB + carry;

    if (total > 1) {
      carry = 1;
      total -= 2;
    } else {
      carry = 0;
    }

    sum = total.toString() + sum;
    aIdx -= 1;
    bIdx -= 1;
  }

  return sum;
};

assert.equal(addBinary('11', '1'), '100');
assert.equal(addBinary('1010', '1011'), '10101');
