const assert = require("assert");

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    let mins = 0;
    let totalRotten = 0;
    let totalOranges = 0;

    let rotten = [];
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (grid[i][j] === 2) {
                rotten.push({ row: i, col: j });
                totalRotten += 1;
                totalOranges += 1;
            } else if (grid[i][j] === 1) {
                totalOranges += 1;
            }
        }
    }

    while (rotten.length > 0 && totalRotten !== totalOranges) {
        const newRotten = [];
        for (const { row, col } of rotten) {
            for (const [ rowOffset, colOffset ] of directions) {
                const newRow = row + rowOffset;
                const newCol = col + colOffset;

                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n &&
                    grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    newRotten.push({ row: newRow, col: newCol });
                    totalRotten += 1;
                }
            }
        }

        rotten = newRotten;
        mins += 1;
    }

    return totalRotten === totalOranges ? mins : -1;
};

assert.equal(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]), 4);
assert.equal(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]), -1);
assert.equal(orangesRotting([[0,2]]), 0);
