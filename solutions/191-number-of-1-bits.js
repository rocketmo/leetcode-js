const assert = require("assert");

/**
 * First solution: Using powers of 2
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let power = 31;
    let ans = 0;

    while (power >= 0 && n > 0) {
        const num = (2 ** power);
        if (n >= num) {
            ans += 1;
            n -= num;
        }

        power -= 1;
    }

    return ans;
};

/**
 * Second solution: Bit shifting
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;

    while (n > 0) {
        ans += (n & 1);
        n = n >>> 1;
    }

    return ans;
};

assert.equal(hammingWeight(11), 3);
assert.equal(hammingWeight(0), 0);
assert.equal(hammingWeight(16), 1);
