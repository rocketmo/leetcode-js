/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  return patterns.reduce((acc, pattern) => {
    return acc + (word.indexOf(pattern) > -1 ? 1 : 0);
  }, 0);
};
