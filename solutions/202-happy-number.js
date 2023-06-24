const assert = require('assert');

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let prev = n;
  let seenSet = new Set();

  while (true) {
    const digits = prev.toString(10).split('').map(digit => {
      return parseInt(digit);
    });

    const sum = digits.reduce((acc, val) => {
      return acc + (val * val);
    }, 0);

    prev = sum;
    if (seenSet.has(sum) || sum === 1) {
      break;
    }

    seenSet.add(sum);
  }

  return prev === 1;
};

assert(isHappy(19));
assert.equal(isHappy(2), false);
