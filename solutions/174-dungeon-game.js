const assert = require("assert");
const _ = require("lodash");

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;
    const dp = [];

    for (let i = 0; i < m; i += 1) {
        dp.push(_.fill(Array(n), 0));
    }

    for (let i = m - 1; i >= 0; i -= 1) {
        for (let j = n - 1; j >= 0; j -= 1) {
            if (i === m - 1 && j === n - 1) {
                dp[i][j] = Math.max(1, 1 - dungeon[i][j]);
            } else if (i === m - 1) {
                dp[i][j] = Math.max(1, dp[i][j + 1] - dungeon[i][j]);
            } else if (j === n - 1) {
                dp[i][j] = Math.max(1, dp[i + 1][j] - dungeon[i][j]);
            } else {
                dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
            }
        }
    }

    return dp[0][0];
};

assert.equal(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]), 7);
assert.equal(calculateMinimumHP([[1,-3,3],[0,-2,0],[-3,-3,-3]]), 3);
assert.equal(calculateMinimumHP([[0]]), 1);
