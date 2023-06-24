const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let min = 0;
  let total = 0;

  for (const num of nums) {
    total += num;
    min = Math.min(min, total);
  }

  return -(min - 1);
};

assert.equal(minStartValue([-3,2,-3,4,2]), 5);
assert.equal(minStartValue([1,2]), 1);
assert.equal(minStartValue([1,-2,-3]), 5);
