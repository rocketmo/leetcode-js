const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let nTotal = 0;
  let numsTotal = 0;

  for (let i = 0; i < nums.length; i += 1) {
    nTotal += (i + 1);
    numsTotal += nums[i];
  }

  return nTotal - numsTotal;
};

assert.equal(missingNumber([3,0,1]), 2);
assert.equal(missingNumber([0,1]), 2);
assert.equal(missingNumber([9,6,4,2,3,5,7,0,1]), 8);
assert.equal(missingNumber([0]), 1);
