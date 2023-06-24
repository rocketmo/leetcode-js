const _ = require('lodash');

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
  const grid = [];
  const ans = [];

  for (let i = 0; i < n; i += 1) {
    grid.push(_.fill(Array(n), 1));
    ans.push(_.fill(Array(n), Number.MAX_SAFE_INTEGER));
  }

  for (const [row, col] of mines) {
    grid[row][col] = 0;
  }

  // Calculate largest plus arms, by rows
  for (let i = 0; i < n; i += 1) {

    // Left to right
    let oneCount = 0;
    for (let j = 0; j < n; j += 1) {
      oneCount = process(i, j, oneCount);
    }

    // Right to left
    oneCount = 0;
    for (let j = n - 1; j >= 0; j -= 1) {
      oneCount = process(i, j, oneCount);
    }
  }

  // Calculate largest plus arms, by columns
  let maxAns = 0;
  for (let i = 0; i < n; i += 1) {

    // Top to bottom
    let oneCount = 0;
    for (let j = 0; j < n; j += 1) {
      oneCount = process(j, i, oneCount);
    }

    // Bottom to top
    oneCount = 0;
    for (let j = n - 1; j >= 0; j -= 1) {
      oneCount = process(j, i, oneCount);

      if (grid[j][i] === 1) {
        maxAns = Math.max(maxAns, ans[j][i] + 1);
      }
    }
  }

  return maxAns;


  function process(row, col, oneCount) {
    if (grid[row][col] === 0) {
      ans[row][col] = 0;
      return 0;
    }

    ans[row][col] = Math.min(ans[row][col], oneCount);
    return oneCount + 1;
  }
};
