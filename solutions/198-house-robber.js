const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  const dp = [];
  let maxCash = 0;

  for (let i = 0; i < n; i += 1) {
    const currCash = nums[i];
    const prevCash = i > 1 ? dp[i - 2] : 0;
    const prevCash2 = i > 2 ? dp[i - 3] : 0;
    const currBest = Math.max(currCash + prevCash, currCash + prevCash2);

    dp.push(currBest);
    maxCash = Math.max(currBest, maxCash);
  }

  return maxCash;
};

assert.equal(rob([1,2,3,1]), 4);
assert.equal(rob([2,7,9,3,1]), 12);
assert.equal(rob([2,1,1,2]), 4);
