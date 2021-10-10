const assert = require("assert");

/**
 * First solution: Naive
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let ans = left;

    for (let i = left + 1; i <= right; i += 1) {
        ans &= i;

        if (ans === 0) {
            break;
        }
    }

    return ans;
};

/**
 * Second solution: Iterate from right to left, skip iterations when possible
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    while (right > left) {
        right = right & (right - 1);
    }

    return left & right;
};

assert.equal(rangeBitwiseAnd(5, 7), 4);
assert.equal(rangeBitwiseAnd(0, 0), 0);
assert.equal(rangeBitwiseAnd(1, 2), 0);
assert.equal(rangeBitwiseAnd(1, 2147483647), 0);
