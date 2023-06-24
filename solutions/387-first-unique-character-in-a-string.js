const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charMap = new Map();
  charMap.set(s[0], false);
  let currIdx = 0;

  for (let i = 1; i < s.length; i += 1) {
    const char = s[i];
    if (charMap.has(char)) {
      charMap.set(char, true);
    } else {
      charMap.set(char, false);
    }

    while (currIdx < s.length && charMap.get(s[currIdx])) {
      currIdx += 1;
    }
  }

  if (currIdx < s.length) {
    return currIdx;
  }

  return -1;
};

assert.equal(firstUniqChar('leetcode'), 0);
assert.equal(firstUniqChar('loveleetcode'), 2);
assert.equal(firstUniqChar('dddccdbba'), 8);
assert.equal(firstUniqChar('aabb'), -1);
