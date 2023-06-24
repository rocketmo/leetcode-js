const assert = require('assert');

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const wordCount = new Map();
  for (const word of words) {
    const currCount = wordCount.get(word) ?? 0;
    wordCount.set(word, currCount + 1);
  }

  const ans = [];
  const sLen = s.length;
  const numWords = words.length;
  const wordLen = words[0].length;
  const subStrLen = numWords * wordLen;

  for (let i = 0; i <= sLen - subStrLen; i += 1) {
    const subStr = s.substr(i, subStrLen);
    if (isConcatenation(subStr)) {
      ans.push(i);
    }
  }

  return ans;

  function isConcatenation(str) {
    const strCount = new Map();
    for (let i = 0; i < numWords; i += 1) {
      const subStr = str.substr(i * wordLen, wordLen);

      if (!wordCount.has(subStr) ||
                (strCount.has(subStr) && strCount.get(subStr) >= wordCount.get(subStr))) {
        return false;
      }

      const currCount = strCount.get(subStr) ?? 0;
      strCount.set(subStr, currCount + 1);
    }

    return true;
  }
};

assert.deepEqual(findSubstring('barfoothefoobarman', ['foo','bar']), [0,9]);
assert.deepEqual(findSubstring('wordgoodgoodgoodbestword', ['word','good','best','word']), []);
assert.deepEqual(findSubstring('barfoofoobarthefoobarman', ['bar','foo','the']), [6,9,12]);
