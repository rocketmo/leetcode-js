const assert = require("assert");

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let ans = 0;
    const allowedSet = new Set(allowed);

    for (const word of words) {
        let isConsistent = true;
        for (const char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }

        if (isConsistent) {
            ans += 1;
        }
    }

    return ans;
};

assert(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]), 2);
assert(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]), 7);
assert(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]), 4);
