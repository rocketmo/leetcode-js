const assert = require('assert');

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = [];
  const n = triangle.length;

  for (let i = 0; i < n; i += 1) {
    dp.push([]);
        
    for (let j = 0; j < triangle[i].length; j += 1) {
      let minPrev = 0;
      if (i > 0) {
        if (j === 0) {
          minPrev = dp[i - 1][0];
        } else if (j === triangle[i].length - 1) {
          minPrev = dp[i - 1][triangle[i].length - 2];
        } else {
          minPrev = Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
        }
      }

      dp[i].push(minPrev + triangle[i][j]);
    }
  }

  return Math.min(...dp[n - 1]);
};

assert.equal(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]), 11);
assert.equal(minimumTotal([[-10]]), -10);
