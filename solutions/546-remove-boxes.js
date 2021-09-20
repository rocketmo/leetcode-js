const _ = require("lodash");

/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const n = boxes.length;
    const dp = [];

    for (let i = 0; i < n; i += 1) {
        dp.push([]);

        for (let j = 0; j < n; j += 1) {
            dp[i].push(_.fill(Array(n), 0));
        }
    }

    return solve(0, n - 1, 0);


    /**
     * Calculates the max number of points possible by removing the boxes of the subarray
     * boxes[i, j] with k boxes attached to its left, with the same color as boxes[i]
     */
    function solve(i, j, k) {
        if (i > j) { return 0; }
        if (dp[i][j][k] > 0) { return dp[i][j][k]; }

        // Keep original i, j, k
        let x = i, y = j, z = k;

        // Group boxes of the same color
        while (i + 1 <= j && boxes[i] === boxes[i + 1]) {
            i += 1;
            k += 1;
        }

        let ans = ((k + 1) * (k + 1)) + solve(i + 1, j, 0);

        for (let m = i + 1; m <= j; m += 1) {
            if (boxes[i] === boxes[m]) {
                ans = Math.max(ans, solve(i + 1, m - 1, 0) + solve(m, j, k + 1));
            }
        }

        dp[x][y][z] = ans;
        return ans;
    }
};
