const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let ans = 0;

    // Odd amount of numbers
    if (n % 2 === 1) {
        const mid = (Math.floor(n / 2) * 2) + 1;

        for (let i = 1; i < mid; i += 2) {
            ans += (mid - i);
        }

        return ans;
    }

    // Even amount of numbers
    ans = 1;
    const mid = (((n / 2) - 1) * 2) + 1;

    for (let i = 1; i < mid; i += 2) {
        ans += (mid - i) + 1;
    }

    return ans;
};

assert.equal(minOperations(1), 0);
assert.equal(minOperations(2), 1);
assert.equal(minOperations(3), 2);
assert.equal(minOperations(4), 4);
assert.equal(minOperations(5), 6);
assert.equal(minOperations(6), 9);
