const assert = require("assert");

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 1) {
        if (n % 3 > 0) {
            break;
        }

        n /= 3;
    }

    return n === 1;
};

assert(isPowerOfThree(27));
assert(isPowerOfThree(9));
assert(isPowerOfThree(1));
assert.equal(isPowerOfThree(0), false);
assert.equal(isPowerOfThree(45), false);
