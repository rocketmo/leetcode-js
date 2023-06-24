const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  nums.sort((a, b) => a - b);

  const dp = [ nums[0] ];
  let maxPoints = nums[0];
  let prevPoints1 = 0;
  let prevPoints2 = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      dp.push(nums[i] + dp[i - 1]);
    } else if (nums[i] - 1 === nums[i - 1]) {
      dp.push(nums[i] + Math.max(prevPoints1, prevPoints2));
      prevPoints2 = prevPoints1;
      prevPoints1 = dp[i - 1];
    } else {
      dp.push(nums[i] + maxPoints);
      prevPoints2 = prevPoints1;
      prevPoints1 = dp[i - 1];
    }

    maxPoints = Math.max(maxPoints, dp[i]);
  }

  return maxPoints;
};

assert.equal(deleteAndEarn([3,4,2]), 6);
assert.equal(deleteAndEarn([2,2,3,3,3,4]), 9);
assert.equal(deleteAndEarn([1,1,1,2,4,5,5,5,6]), 18);
