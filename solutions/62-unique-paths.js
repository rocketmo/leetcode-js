const assert = require("assert");

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [];
    for (let i = 0; i < m; i += 1) {
        dp.push(Array(n).fill(1));
    }

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (i === 0 && j === 0) continue;

            let above = i > 0 ? dp[i - 1][j] : 0;
            let left = j > 0 ? dp[i][j - 1] : 0;

            dp[i][j] = above + left;
        }
    }

    return dp[m - 1][n - 1];
};

assert.equal(uniquePaths(3, 2), 3);
assert.equal(uniquePaths(3, 7), 28);
assert.equal(uniquePaths(7, 3), 28);
assert.equal(uniquePaths(3, 3), 6);
