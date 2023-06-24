const _ = require('lodash');

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const ans = [];

  // Calculate distances from top left to bottom right
  for (let i = 0; i < mat.length; i += 1) {
    ans.push(_.fill(Array(mat[i].length), null));

    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0;
        continue;
      }

      let above = i > 0 && ans[i - 1][j] !== null
        ? ans[i - 1][j] : null;
      let left = j > 0 && ans[i][j - 1] !== null
        ? ans[i][j - 1] : null;

      if (above !== null && left === null) {
        ans[i][j] = above + 1;
      } else if (above === null && left !== null) {
        ans[i][j] = left + 1;
      } else if (above !== null && left !== null) {
        ans[i][j] = Math.min(above, left) + 1;
      }
    }
  }

  // Calculate distances from bottom right to top left
  for (let i = mat.length - 1; i >= 0; i -= 1) {
    for (let j = mat[i].length - 1; j >= 0; j -= 1) {
      if (ans[i][j] === 0) {
        continue;
      }

      let below = i < mat.length - 1 && ans[i + 1][j] !== null
        ? ans[i + 1][j] : Number.MAX_SAFE_INTEGER - 1;
      let right = j < mat[i].length - 1 && ans[i][j + 1] !== null
        ? ans[i][j + 1] : Number.MAX_SAFE_INTEGER - 1;
      let curr = ans[i][j] ?? Number.MAX_SAFE_INTEGER;

      ans[i][j] = Math.min(curr, below + 1, right + 1);
    }
  }

  return ans;
};
