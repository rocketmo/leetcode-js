const _ = require('lodash');
const assert = require('assert');

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // If top left coordinate has an obstacle, robot cannot move
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  const numRows = obstacleGrid.length;
  const numCols = obstacleGrid[0].length;

  // Memoize number of paths per coordinate in dp array
  const dp = Array(numRows);
  for (let i = 0; i < dp.length; i += 1) {
    dp[i] = _.fill(Array(numCols), 0);
  }
  dp[0][0] = 1;

  for (let i = 0; i < numRows; i += 1) {
    for (let j = 0; j < numCols; j += 1) {
      if (obstacleGrid[i][j] === 1 || (i === 0 && j === 0)) {
        continue;
      }

      let ans = 0;

      if (i > 0) {
        ans += dp[i - 1][j];
      }

      if (j > 0) {
        ans += dp[i][j - 1];
      }

      dp[i][j] = ans;
    }
  }

  return dp[numRows - 1][numCols - 1];
};

assert.equal(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]), 2);
assert.equal(uniquePathsWithObstacles([[0,1],[0,0]]), 1);
assert.equal(uniquePathsWithObstacles([[0]]), 1);
assert.equal(uniquePathsWithObstacles([[1]]), 0);
