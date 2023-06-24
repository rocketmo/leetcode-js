/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let lCount = 0, rCount = 0, numSplits = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'L') {
      lCount += 1;
    } else {
      rCount += 1;
    }

    if (lCount === rCount) {
      numSplits += 1;
      lCount = 0;
      rCount = 0;
    }
  }

  return numSplits;
};
