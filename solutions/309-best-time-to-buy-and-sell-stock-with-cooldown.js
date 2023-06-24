const assert = require('assert');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = [];
  let ans = 0;

  for (let i = 0; i < prices.length; i += 1) {
    let maxProfit = i > 0 ? dp[i - 1] : 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      let currProfit = prices[i] - prices[j];
      if (j >= 2) {
        currProfit += dp[j - 2];
      }

      maxProfit = Math.max(currProfit, maxProfit);
    }

    dp.push(maxProfit);
    ans = Math.max(ans, maxProfit);
  }

  return ans;
};

assert.equal(maxProfit([1,2,3,0,2]), 3);
assert.equal(maxProfit([1]), 0);
assert.equal(maxProfit([1,4,2]), 3);
assert.equal(maxProfit([6,1,6,4,3,0,2]), 7);
