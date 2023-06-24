const assert = require('assert');
const _ = require('lodash');

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;
  const dp = _.fill(Array(n), null);
  dp[0] = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (dp[i] === null) {
      continue;
    }

    for (let j = 1; j <= nums[i] && i + j < n; j += 1) {
      if (dp[i + j] === null) {
        dp[i + j] = dp[i] + 1;
      } else {
        dp[i + j] = Math.min(dp[i] + 1, dp[i + j]);
      }
    }
  }

  return dp[n - 1];
};

assert.equal(jump([2,3,1,1,4]), 2);
assert.equal(jump([2,3,0,1,4]), 2);
