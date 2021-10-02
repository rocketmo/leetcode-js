const assert = require("assert");

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charCount = new Map();
    for (const char of magazine) {
        const currCount = charCount.get(char) ?? 0;
        charCount.set(char, currCount + 1);
    }

    for (const char of ransomNote) {
        if (!charCount.has(char) || charCount.get(char) <= 0) {
            return false;
        }

        charCount.set(char, charCount.get(char) - 1);
    }

    return true;
};

assert(canConstruct("aa", "aab"));
assert.equal(canConstruct("a", "b"), false);
assert.equal(canConstruct("aa", "ab"), false);
