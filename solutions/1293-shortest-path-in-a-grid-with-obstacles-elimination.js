const assert = require("assert");

/**
 * First attempt: DFS solution (TLE)
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    let ans = -1;

    dfs(0, 0, 0, k);
    return ans;

    function dfs(row, col, currNumSteps, remElimination) {
        if (row === m - 1 && col === n - 1) {
            ans = (ans === -1) ? currNumSteps : Math.min(currNumSteps, ans);
            return;
        }

        for (const [ rowOffset, colOffset ] of directions) {
            const nextRow = row + rowOffset;
            const nextCol = col + colOffset;

            if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) {
                continue;
            }

            if (grid[nextRow][nextCol] === 0) {
                grid[nextRow][nextCol] = 2;
                dfs(nextRow, nextCol, currNumSteps + 1, remElimination);
                grid[nextRow][nextCol] = 0;
            } else if (grid[nextRow][nextCol] === 1 && remElimination > 0) {
                grid[nextRow][nextCol] = 2;
                dfs(nextRow, nextCol, currNumSteps + 1, remElimination - 1);
                grid[nextRow][nextCol] = 1;
            }
        }
    }
};

/**
 * Second attempt: BFS solution
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    if (m === 1 && n === 1) {
        return 0;
    }

    if (k >= m + n - 2) {
        return m + n - 2;
    }

    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    const visitedSet = new Set([ `0,0,${k}` ]);
    let queue = [ { row: 0, col: 0, eliminations: k }];
    let currSteps = 1;

    while (queue.length) {
        const nextQueue = [];

        for (const { row, col, eliminations } of queue) {
            for (const [ rowOffset, colOffset ] of directions) {
                const nextRow = row + rowOffset;
                const nextCol = col + colOffset;

                if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) {
                    continue;
                }

                if (nextRow === m - 1 && nextCol === n - 1) {
                    return currSteps;
                }

                if (grid[nextRow][nextCol] === 0 &&
                    !visitedSet.has(`${nextRow},${nextCol}${eliminations}`)) {
                    nextQueue.push({ row: nextRow, col: nextCol, eliminations });
                    visitedSet.add(`${nextRow},${nextCol}${eliminations}`);
                } else if (grid[nextRow][nextCol] === 1 && eliminations > 0 &&
                    !visitedSet.has(`${nextRow},${nextCol}${eliminations - 1}`)) {
                    nextQueue.push({ row: nextRow, col: nextCol, eliminations: eliminations - 1 });
                    visitedSet.add(`${nextRow},${nextCol}${eliminations - 1}`);
                }
            }
        }

        queue = nextQueue;
        currSteps += 1;
    }

    return -1;
};

assert.equal(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1), 6);
assert.equal(shortestPath([[0,1,1],[1,1,1],[1,0,0]], 1), -1);
