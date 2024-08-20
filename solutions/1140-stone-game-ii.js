const assert = require('assert');
const _ = require('lodash');

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const n = piles.length;

  if (n === 0) {
    return 0;
  }

  // Calculate sums of stones from each pile position to the end
  const pileSums = _.fill(Array(n), 0);
  pileSums[n - 1] = piles[n - 1];

  for (let i = n - 2; i >= 0; i -= 1) {
    pileSums[i] = pileSums[i + 1] + piles[i];
  }

  // Create a memoization vector where dp[i][j] is the optimal choice
  // at the ith pile and max 2 * j piles can be taken.
  const dp = [];
  for (let i = 0; i < n; i += 1) {
    dp.push(_.fill(Array(n + 1), 0));
  }

  const helper = (pileIndex, m) => {
    // No more piles
    if (pileIndex >= n) {
      return 0;
    }

    // Take all the remaining piles if possible
    if (2 * m >= n - pileIndex) {
      return pileSums[pileIndex];
    }

    // If we've already calculated the optimal choice for this state, return that
    if (dp[pileIndex][m]) {
      return dp[pileIndex][m];
    }

    // Minimize the number of stones the opponent can take
    let min = Number.MAX_SAFE_INTEGER;
    for (let x = 1; x <= 2 * m; x += 1) {
      min = Math.min(min, helper(pileIndex + x, Math.max(m, x)));
    }

    // Optimal number of stones is equal to the total sums starting at the current position
    // minus the least amount of stones the opponent can take.
    dp[pileIndex][m] = pileSums[pileIndex] - min;
    return dp[pileIndex][m];
  };

  return helper(0, 1);
};

assert.equal(stoneGameII([2,7,9,4,4]), 10);
assert.equal(stoneGameII([1,2,3,4,5,100]), 104);
assert.equal(stoneGameII([4]), 4);
assert.equal(stoneGameII([4, 6]), 10);
assert.equal(stoneGameII([0]), 0);
