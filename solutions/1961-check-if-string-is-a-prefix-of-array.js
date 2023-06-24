/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  let word = '';
  for (let i = 0; i < words.length; i += 1) {
    word += words[i];
    if (word === s) {
      return true;
    }
  }

  return false;
};
