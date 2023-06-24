const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const ans = Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let idx = nums.length - 1;

  while (idx >= 0) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      ans[idx] = (nums[left] * nums[left]);
      left += 1;
    } else {
      ans[idx] = (nums[right] * nums[right]);
      right -= 1;
    }

    idx -= 1;
  }

  return ans;
};

assert.deepEqual(sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100]);
assert.deepEqual(sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121]);
