const assert = require("assert");

/**
 * First solution: Brute force
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;

    while (n > 1) {
        let carry = 0;

        if (n % 2 === 1) {
            carry = 1;
            n -= 1;
        }

        const newMatches = n / 2;
        n -= newMatches;
        n += carry;
        matches += newMatches;
    }

    return matches;
};

/**
 * Second solution: Clever solution
 * Returns n-1, since every team will lose 1, except the champion
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    return n - 1;
};

assert.equal(numberOfMatches(7), 6);
assert.equal(numberOfMatches(14), 13);
assert.equal(numberOfMatches(3), 2);
assert.equal(numberOfMatches(4), 3);
assert.equal(numberOfMatches(8), 7);
