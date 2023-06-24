const assert = require('assert');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === 0) {
        continue;
      }

      for (const [ rowOffset, colOffset ] of directions) {
        const otherRow = i + rowOffset;
        const otherCol = j + colOffset;
        if (otherRow < 0 || otherRow >= m || otherCol < 0 || otherCol >= n ||
                    grid[otherRow][otherCol] === 0) {
          ans += 1;
        }
      }
    }
  }

  return ans;
};

assert.equal(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]), 16);
assert.equal(islandPerimeter([[1]]), 4);
assert.equal(islandPerimeter([[1,0]]), 4);
