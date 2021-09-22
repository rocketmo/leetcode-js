/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let maxPathLen = 0;
    let startRow = 0;
    let startCol = 0;
    preProcess();

    let numPaths = 0;
    dfs([], startRow, startCol);

    return numPaths;

    // Walks along every possible path without moving onto previous squares
    function dfs(currPath, row, col) {

        // Try to walk in each direction
        for (const [ rowDir, colDir ] of directions) {
            const nextRow = row + rowDir;
            const nextCol = col + colDir;

            if (check(currPath, nextRow, nextCol)) {

                // Move onto the next square and check possible paths from the new position
                // Also mark the new position as visited.
                grid[nextRow][nextCol] = 1;
                currPath.push([nextRow, nextCol]);
                dfs(currPath, nextRow, nextCol);

                // Backtrack
                grid[nextRow][nextCol] = 0;
                currPath.pop();
            }
        }
    }

    // Checks if the given position is empty or not. Returns true if yes.
    // If the given position is the end square, check if we've walked over every square. If yes,
    // increment numPaths.
    function check(currPath, row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 1 ||
            grid[row][col] === -1) {
            return false;
        } else if (grid[row][col] === 2) {
            if (currPath.length === maxPathLen) {
                numPaths += 1;
            }

            return false;
        }

        return true;
    }

    // Finds the path length required to walk over each empty square, and also the starting position
    function preProcess() {
        for (let i = 0; i < m; i += 1) {
            for (let j = 0; j < n; j += 1) {
                if (grid[i][j] === 0) {
                    maxPathLen += 1;
                } else if (grid[i][j] === 1) {
                    startRow = i;
                    startCol = j;
                }
            }
        }
    }
};
