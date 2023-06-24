const assert = require('assert');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0;
  let min = prices[0];
  let max = null;

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
      max = null;
    } else if (max === null || prices[i] >= max) {
      max = prices[i];
      ans = Math.max(max - min, ans);
    }
  }

  return ans;
};

assert.equal(maxProfit([7,1,5,3,6,4]), 5);
assert.equal(maxProfit([7,6,4,3,1]), 0);
assert.equal(maxProfit([2,1,2,1,0,1,2]), 2);
assert.equal(maxProfit([3,3,5,0,0,3,1,4]), 4);
