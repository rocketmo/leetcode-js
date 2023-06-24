/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.trim().split(' ');
  const reversed = [];

  for (let i = words.length - 1; i >= 0; i -= 1) {
    const word = words[i].trim();

    if (word) {
      reversed.push(word);
    }
  }

  return reversed.join(' ');
};
