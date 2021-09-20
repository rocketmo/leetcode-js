const _ = require("lodash");

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let m = points.length, n = points[0].length;
    const dp = [];

    for (let i = 0; i < m; i += 1) {
        dp.push(_.fill(Array(n), 0));
        let runningMax = 0;

        // Calculate the running max from left to right
        if (i !== 0) {
            for (let j = 0; j < n; j += 1) {
                runningMax = Math.max(runningMax - 1, dp[i - 1][j]);
                dp[i][j] = runningMax;
            }
        }

        // Calculate the running max from right to left, then assign max points for each row cell
        for (let j = n - 1; j >= 0; j -= 1) {
            if (i !== 0) {
                runningMax = Math.max(runningMax - 1, dp[i - 1][j]);
                dp[i][j] = Math.max(dp[i][j], runningMax) + points[i][j];
            } else {
                dp[i][j] = points[i][j];
            }
        }
    }

    return Math.max(...dp[m - 1]);
};
