const assert = require("assert");
const _ = require("lodash");

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const n = grid[0].length;
    const prefix = _.fill(Array(n), 0);
    const suffix = _.fill(Array(n), 0);

    for (let i = 0; i < n; i += 1) {
        if (i === 0) {
            prefix[i] = grid[0][i];
            suffix[n - 1 - i] = grid[1][n - 1 - i];
        } else {
            prefix[i] = grid[0][i] + prefix[i - 1];
            suffix[n - 1 - i] = grid[1][n - 1 - i] + suffix[n - i];
        }
    }

    let bestIdx = 0;
    let minSecondScore = getBestSecondScore(0);

    for (let i = 1; i < n; i += 1) {
        const total = getBestSecondScore(i);
        if (total < minSecondScore) {
            bestIdx = i;
            minSecondScore = total;
        }
    }

    return getBestSecondScore(bestIdx);


    function getBestSecondScore(idx) {
        return Math.max(prefix[n - 1] - prefix[idx], suffix[0] - suffix[idx]);
    }
};

assert.equal(gridGame([[2,5,4],[1,5,1]]), 4);
assert.equal(gridGame([[3,3,1],[8,5,2]]), 4);
assert.equal(gridGame([[1,3,1,15],[1,3,3,1]]), 7);
assert.equal(gridGame([[18,6,19,3,10,11,2,16,5],[2,11,15,20,19,3,16,6,5]]), 44);
assert.equal(gridGame([[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]]), 63);
