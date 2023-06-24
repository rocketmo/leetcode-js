const assert = require('assert');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy1 = Number.MIN_SAFE_INTEGER; // Max amount after buying first stock
  let buy2 = Number.MIN_SAFE_INTEGER; // Max amount after buying second stock
  let sell1 = 0;                      // Max amount after selling first stock
  let sell2 = 0;                      // Max amount after selling second stock

  for (const price of prices) {
    sell2 = Math.max(sell2, buy2 + price);
    buy2 = Math.max(buy2, sell1 - price);
    sell1 = Math.max(sell1, buy1 + price);
    buy1 = Math.max(buy1, -price);
  }

  return sell2;
};

assert.equal(maxProfit([3,3,5,0,0,3,1,4]), 6);
assert.equal(maxProfit([1,2,3,4,5]), 4);
assert.equal(maxProfit([7,6,4,3,1]), 0);
assert.equal(maxProfit([1]), 0);
