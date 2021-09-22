const assert = require("assert");

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let min = prices[0];
    let max = min;

    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] < min) {
            min = prices[i];
            max = min;
        } else if (prices[i] > max) {
            max = prices[i];
            ans += (max - min);
            min = max;
        }
    }

    return ans;
};

assert.equal(maxProfit([7,1,5,3,6,4]), 7);
assert.equal(maxProfit([1,2,3,4,5]), 4);
assert.equal(maxProfit([7,6,4,3,1]), 0);
