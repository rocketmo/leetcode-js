const assert = require("assert");

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charMap = new Map();
    for (const char of s) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    for (const char of t) {
        if (!charMap.has(char) || charMap.get(char) === 0) {
            return false;
        }

        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
};

assert(isAnagram("anagram", "nagaram"));
assert.equal(isAnagram("rat", "car"), false);
