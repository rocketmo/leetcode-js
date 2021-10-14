const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const perfectSquares = [];
    const dp = [ 0 ];
    const MAX_SQUARE = 10000;

    let perfSquareIdx = 1;
    while (perfSquareIdx * perfSquareIdx <= MAX_SQUARE) {
        perfectSquares.push(perfSquareIdx * perfSquareIdx);
        perfSquareIdx += 1;
    }

    for (let i = 1; i <= n; i += 1) {
        let minCount = dp[i - 1] + 1;
        for (const square of perfectSquares) {
            if (square > i) {
                break;
            }

            minCount =  Math.min(minCount, dp[i - square] + 1);
        }

        dp.push(minCount);
    }

    return dp[n];
};

assert.equal(numSquares(12), 3);
assert.equal(numSquares(13), 2);
