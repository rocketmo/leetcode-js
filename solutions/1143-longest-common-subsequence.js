const assert = require("assert");
const _ = require("lodash");

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = [];

    for (let i = 0; i < m; i += 1) {
        dp.push(_.fill(Array(n), 0));
    }

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (text1[i] === text2[j]) {
                const prev = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;
                dp[i][j] = prev + 1;
            } else {
                const prev1 = i > 0 ? dp[i - 1][j] : 0;
                const prev2 = j > 0 ? dp[i][j - 1] : 0;

                dp[i][j] = Math.max(prev1, prev2);
            }
        }
    }

    return dp[m - 1][n - 1];
};

assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
assert.equal(longestCommonSubsequence("abc", "abc"), 3);
assert.equal(longestCommonSubsequence("abc", "def"), 0);
