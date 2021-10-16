const assert = require("assert");

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }

    let sIdx = 0;

    for (const char of t) {
        if (s[sIdx] === char) {
            sIdx += 1;
        }

        if (sIdx >= s.length) {
            return true;
        }
    }

    return false;
};

assert.equal(isSubsequence("", "ahbgdc"), true);
assert.equal(isSubsequence("abc", "ahbgdc"), true);
assert.equal(isSubsequence("axc", "ahbgdc"), false);
