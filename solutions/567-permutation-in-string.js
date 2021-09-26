const assert = require("assert");

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    const s1Count = new Map();
    for (const char of s1) {
        const currCount = s1Count.get(char) ?? 0;
        s1Count.set(char, currCount + 1);
    }


    const s2Count = new Map();
    let numCorrect = 0;
    for (let i = 0; i < s1.length; i += 1) {
        const char = s2[i];
        const currCount = s2Count.get(char) ?? 0;
        s2Count.set(char, currCount + 1);

        if (s1Count.has(char) && s2Count.get(char) <= s1Count.get(char)) {
            numCorrect += 1;
        }
    }

    let startIdx = 0;
    for (let i = s1.length; i < s2.length && numCorrect < s1.length; i += 1) {

        // Remove character at front of our window
        const startChar = s2[startIdx];
        if (s1Count.has(startChar) && s1Count.get(startChar) >= s2Count.get(startChar)) {
            numCorrect -= 1;
        }

        s2Count.set(startChar, s2Count.get(startChar) - 1);
        startIdx += 1;

        // Add next character to window
        const nextChar = s2[i];
        const currCount = s2Count.get(nextChar) ?? 0;
        s2Count.set(nextChar, currCount + 1);

        if (s1Count.has(nextChar) && s2Count.get(nextChar) <= s1Count.get(nextChar)) {
            numCorrect += 1;
        }
    }

    return numCorrect === s1.length;
};

assert(checkInclusion("ab", "eidbaooo"));
assert.equal(checkInclusion("ab", "eidboaoo"), false);
