const assert = require("assert");

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 !== 0;
};

assert.equal(canWinNim(4), false);
assert.equal(canWinNim(1), true);
assert.equal(canWinNim(2), true);
