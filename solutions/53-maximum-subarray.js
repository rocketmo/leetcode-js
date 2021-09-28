const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let prev = ans;

    for (let i = 1; i < nums.length; i += 1) {
        const curr = Math.max(nums[i], nums[i] + prev);
        ans = Math.max(ans, curr);
        prev = curr;
    }

    return ans;
};

assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
assert.equal(maxSubArray([1]), 1);
assert.equal(maxSubArray([5,4,-1,7,8]), 23);
