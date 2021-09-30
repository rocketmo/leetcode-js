const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = [ nums[0] ];
    const dpWithoutFirst = [ 0 ];

    for (let i = 1; i < n; i += 1) {
        const currCash = nums[i];

        // Including first house
        const prevCash = i > 1 ? dp[i - 2] : 0;
        const prevCash2 = i > 2 ? dp[i - 3] : 0;
        dp.push(Math.max(currCash + prevCash, currCash + prevCash2));

        // Excluding first house
        const prevCash3 = i > 1 ? dpWithoutFirst[i - 2] : 0;
        const prevCash4 = i > 2 ? dpWithoutFirst[i - 3] : 0;
        dpWithoutFirst.push(Math.max(currCash + prevCash3, currCash + prevCash4));
    }

    const last = n >= 2 ? dpWithoutFirst[n - 1] : dp[n - 1];
    const last2 = n >= 2 ? dp[n - 2] : 0;
    const last3 = n >= 3 ? dp[n - 3] : 0;

    return Math.max(last, last2, last3);
};

assert.equal(rob([2,3,2]), 3);
assert.equal(rob([1,2,3,1]), 4);
assert.equal(rob([1,2,3]), 3);
assert.equal(rob([200,3,140,20,10]), 340);
