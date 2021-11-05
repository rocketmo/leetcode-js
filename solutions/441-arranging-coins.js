const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let ans = 0;
    let currRow = 1;
    let totalCoinsUsed = 0;

    while (totalCoinsUsed + currRow <= n) {
        totalCoinsUsed += currRow;
        currRow += 1;
        ans += 1;
    }

    return ans;
};

assert.equal(arrangeCoins(5), 2);
assert.equal(arrangeCoins(8), 3);
