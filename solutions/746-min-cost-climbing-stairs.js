const assert = require("assert");

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [ cost[0], cost[1] ];
    const n = cost.length;

    for (let i = 2; i < n; i += 1) {
        dp.push(Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]));
    }

    return Math.min(dp[n - 1], dp[n - 2]);
};

assert.equal(minCostClimbingStairs([10,15,20]), 15);
assert.equal(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]), 6);
