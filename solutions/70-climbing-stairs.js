const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [ 1 ];

    for (let i = 1; i <= n; i += 1) {
        let ans = dp[i - 1];

        if (i >= 2) {
            ans += dp[i - 2];
        }

        dp.push(ans);
    }

    return dp[n];
};

assert.equal(climbStairs(2), 2);
assert.equal(climbStairs(3), 3);
assert.equal(climbStairs(4), 5);
