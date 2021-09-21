const assert = require("assert");

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const charSet = new Set();

    for (const char of sentence) {
        charSet.add(char);
    }

    return charSet.size === 26;
};

assert(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
assert.equal(checkIfPangram("leetcode"), false);
