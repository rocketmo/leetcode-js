const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let total = 0;
  let maxSum = nums[0];
  let currMax = 0;
  let minSum = nums[0];
  let currMin = 0;

  for (const num of nums) {
    total += num;
    currMax = Math.max(currMax + num, num);
    maxSum = Math.max(currMax, maxSum);
    currMin = Math.min(currMin + num, num);
    minSum = Math.min(currMin, minSum);
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

assert.equal(maxSubarraySumCircular([1,-2,3,-2]), 3);
assert.equal(maxSubarraySumCircular([5,-3,5]), 10);
assert.equal(maxSubarraySumCircular([3,-1,2,-1]), 4);
assert.equal(maxSubarraySumCircular([3,-2,2,-3]), 3);
