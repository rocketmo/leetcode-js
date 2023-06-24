const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let maxLen = 0;
  let hasOddCount = false;
  const charCount = new Map();

  for (const char of s) {
    const currCount = charCount.get(char) ?? 0;
    charCount.set(char, currCount + 1);
  }

  for (const count of charCount.values()) {
    if (count % 2 === 0) {
      maxLen += count;
    } else {
      if (!hasOddCount) {
        maxLen += count;
        hasOddCount = true;
      } else {
        maxLen += (count - 1);
      }
    }
  }

  return maxLen;
};

assert.equal(longestPalindrome('abccccdd'), 7);
assert.equal(longestPalindrome('a'), 1);
assert.equal(longestPalindrome('bb'), 2);
assert.equal(longestPalindrome('bbaaaccc'), 7);
