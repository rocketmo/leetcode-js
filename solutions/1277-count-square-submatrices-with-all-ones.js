/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const dp = [];
  let count = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    dp.push([]);

    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] !== 1) {
        dp[i][j] = 0;
        continue;
      }

      let top = i > 0 ? dp[i - 1][j] : 0;
      let left = j > 0 ? dp[i][j - 1] : 0;
      let topLeft = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;

      dp[i][j] = Math.min(top, left, topLeft) + 1;
      count += dp[i][j];
    }
  }

  return count;
};
