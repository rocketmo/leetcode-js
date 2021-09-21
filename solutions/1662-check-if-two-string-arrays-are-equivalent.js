const assert = require("assert");

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("") === word2.join("");
};

assert(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
assert(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
assert.equal(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]), false);
