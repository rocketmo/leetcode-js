const assert = require("assert");
const _ = require("lodash");

/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    const MOD = BigInt(1e9 + 7);
    const numFaces = rollMax.length;
    const dp = [];

    for (let i = 0; i <= n; i += 1) {
        dp.push(_.fill(Array(numFaces + 1), 0n));
    }

    // 1 combination for 0 rolls
    dp[0][numFaces] = 1n;

    // 6 combinations for 1 roll
    dp[1][numFaces] = 6n;
    for (let i = 0; i < numFaces; i += 1) {
        dp[1][i] = 1n;
    }

    // Roll 2 to n times
    for (let i = 2; i <= n; i += 1) {

        // Get total combinations for each face
        for (let j = 0; j < numFaces; j += 1) {

            // Get previous combinations
            for (let k = 1; k <= rollMax[j]; k += 1) {
                if (k > i) {
                    break;
                }

                dp[i][j] = dp[i][j] + dp[i - k][numFaces] - dp[i - k][j];
            }
        }

        // Update total for this roll
        dp[i][numFaces] = dp[i].reduce((acc, val) => {
            return acc + val;
        }, 0n);
    }

    return Number(dp[n][numFaces] % MOD);
};

assert.equal(dieSimulator(2, [1,1,2,2,2,3]), 34);
assert.equal(dieSimulator(2, [1,1,1,1,1,1]), 30);
assert.equal(dieSimulator(3, [1,1,1,2,2,3]), 181);
assert.equal(dieSimulator(4, [2,1,1,3,3,2]), 1082);
assert.equal(dieSimulator(30, [2,3,1,2,1,2]), 753152086);
