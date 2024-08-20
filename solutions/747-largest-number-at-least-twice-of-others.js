const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = nums[0];
  let maxIdx = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = i;
    }
  }

  nums.sort((a, b) => b - a);
  return nums[0] >= 2 * nums[1] ? maxIdx : -1;
};

assert.equal(dominantIndex([3,6,1,0]), 1);
assert.equal(dominantIndex([1,2,3,4]), -1);
