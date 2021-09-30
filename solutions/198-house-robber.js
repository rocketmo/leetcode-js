const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = [];

    for (let i = 0; i < nums.length; i += 1) {
        const currCash = nums[i];
        const prevCash = i > 1 ? dp[i - 2] : 0;
        const prevCash2 = i > 2 ? dp[i - 3] : 0;

        dp.push(Math.max(currCash + prevCash, currCash + prevCash2));
    }

    if (n >= 2) {
        return Math.max(dp[n - 1], dp[n - 2]);
    }

    return dp[n - 1];
};

assert.equal(rob([1,2,3,1]), 4);
assert.equal(rob([2,7,9,3,1]), 12);
assert.equal(rob([2,1,1,2]), 4);
