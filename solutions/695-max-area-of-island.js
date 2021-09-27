const assert = require("assert");

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    let ans = 0;

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (grid[i][j] === 1) {
                grid[i][j] = 2;
                const islandSize = dfs(i, j);
                ans = Math.max(ans, islandSize);
            }
        }
    }

    return ans;

    function dfs(row, col) {
        let currSize = 1;
        for (const [ rowOffset, colOffset ] of directions) {
            const nextRow = row + rowOffset;
            const nextCol = col + colOffset;

            if (nextRow >= 0 && nextCol >= 0 && nextRow < m && nextCol < n &&
                grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = 2;
                currSize += dfs(nextRow, nextCol);
            }
        }

        return currSize;
    }
};

assert.equal(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]
]), 6);
assert.equal(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]), 0);
