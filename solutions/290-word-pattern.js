const assert = require('assert');

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const letterToWord = new Map();
  const wordSet = new Set();

  for (let i = 0; i < pattern.length; i += 1) {
    if ((letterToWord.has(pattern[i]) && words[i] !== letterToWord.get(pattern[i])) ||
            (!letterToWord.has(pattern[i]) && wordSet.has(words[i]))) {
      return false;
    } else if (!letterToWord.has(pattern[i])) {
      letterToWord.set(pattern[i], words[i]);
      wordSet.add(words[i]);
    }
  }

  return true;
};

assert(wordPattern('abba', 'dog cat cat dog'));
assert.equal(wordPattern('abba', 'dog cat cat fish'), false);
assert.equal(wordPattern('aaaa', 'dog cat cat dog'), false);
assert.equal(wordPattern('abba', 'dog dog dog dog'), false);
