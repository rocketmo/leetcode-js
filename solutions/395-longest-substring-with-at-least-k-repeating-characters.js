const assert = require('assert');

/**
 * First solution: Divide and conquer
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let ans = 0;
  const charCount = new Map();
  for (const char of s) {
    const currCount = charCount.get(char) ?? 0;
    charCount.set(char, currCount + 1);
  }

  findAns(s, charCount);
  return ans;

  function findAns(str, charCount) {
    if (!str) {
      return;
    }

    const windowCount = new Map();
    let uniqueChars = new Set();
    let start = 0;

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      if (charCount.get(char) < k) {
        findAns(str.slice(start, i), windowCount);

        start = i + 1;
        uniqueChars.clear();
        windowCount.clear();
        continue;
      }

      const currWindowCount = windowCount.get(char) ?? 0;
      windowCount.set(char, currWindowCount + 1);

      if (windowCount.get(char) === k) {
        uniqueChars.add(char);
      }

      if (uniqueChars.size === windowCount.size) {
        ans = Math.max(ans, i - start + 1);
      }
    }

    if (start !== 0) {
      findAns(str.slice(start), windowCount);
    }
  }
};

/**
 * Second solution: Sliding window
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const charCount = new Map();
  for (const char of s) {
    const currCount = charCount.get(char) ?? 0;
    charCount.set(char, currCount + 1);
  }

  let ans = 0;
  for (let i = 1; i <= charCount.size; i += 1) {
    const windowCount = new Map();
    let numUniqueChars = 0;
    let start = 0;

    for (let j = 0; j < s.length; j += 1) {
      const char = s[j];
      const currWindowCount = windowCount.get(char) ?? 0;
      windowCount.set(char, currWindowCount + 1);

      if (windowCount.get(char) === k) {
        numUniqueChars += 1;
      }

      while (windowCount.size > i) {
        const startChar = s[start];
        if (windowCount.get(startChar) === k) {
          numUniqueChars -= 1;
        }

        if (windowCount.get(startChar) === 1) {
          windowCount.delete(startChar);
        } else {
          windowCount.set(startChar, windowCount.get(startChar) - 1);
        }

        start += 1;
      }

      if (numUniqueChars === windowCount.size) {
        ans = Math.max(ans, j - start + 1);
      }
    }
  }

  return ans;
};

assert.equal(longestSubstring('aaabb', 3), 3);
assert.equal(longestSubstring('ababbc', 2), 5);
assert.equal(longestSubstring('bbaaacbd', 3), 3);
assert.equal(longestSubstring('baaabcb', 3), 3);
assert.equal(longestSubstring('cbcbbaaa', 3), 3);
assert.equal(longestSubstring('ababacb', 3), 0);
