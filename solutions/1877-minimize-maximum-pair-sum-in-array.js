const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const n = nums.length;
    let ans = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length / 2; i += 1) {
        ans = Math.max(ans, nums[i] + nums[n - 1 - i]);
    }

    return ans;
};

assert.equal(minPairSum([3,5,2,3]), 7);
assert.equal(minPairSum([3,5,4,2,4,6]), 8);
