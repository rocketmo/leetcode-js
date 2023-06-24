/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const charCount = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  for (const char of text) {
    if (charCount[char] !== undefined) {
      charCount[char] += 1;
    }
  }

  return Math.min(charCount.b, charCount.a, Math.floor(charCount.l / 2),
    Math.floor(charCount.o / 2), charCount.n);
};
