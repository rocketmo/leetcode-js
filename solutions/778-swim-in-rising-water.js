const _ = require("lodash");

/**
 * Depth first search approach
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const dp = []; // dp[i][j] records the least amount of time to get to the cell at (i, j)

    for (let i = 0; i < n; i += 1) {
        dp.push(_.fill(Array(n), Number.MAX_SAFE_INTEGER));
    }

    dp[0][0] = grid[0][0];

    // Push coordinates we want to check onto the stack. For each coordinate, we check if each
    // adjacent cell can be reached quicker if we come from the current cell. If yes, we update
    // the quicker time in dp and push the adjacent coordinate onto the stack.
    const stack = [{ i: 0, j: 0 }];

    while (stack.length) {
        const { i, j } = stack.pop();
        const curr = dp[i][j];

        // Check the above cell
        if (i > 0 && dp[i - 1][j] > Math.max(curr, grid[i - 1][j])) {
            dp[i - 1][j] = Math.max(curr, grid[i - 1][j]);
            stack.push({ i: i - 1, j });
        }

        // Check the below cell
        if (i < n - 1 && dp[i + 1][j] > Math.max(curr, grid[i + 1][j])) {
            dp[i + 1][j] = Math.max(curr, grid[i + 1][j]);
            stack.push({ i: i + 1, j });
        }

        // Check the cell to the left
        if (j > 0 && dp[i][j - 1] > Math.max(curr, grid[i][j - 1])) {
            dp[i][j - 1] = Math.max(curr, grid[i][j - 1]);
            stack.push({ i, j: j - 1 });
        }

        // Check the cell to the right
        if (j < n - 1 && dp[i][j + 1] > Math.max(curr, grid[i][j + 1])) {
            dp[i][j + 1] = Math.max(curr, grid[i][j + 1]);
            stack.push({ i, j: j + 1 });
        }

    }

    return dp[n - 1][n - 1];
};
