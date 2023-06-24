/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'X') {
      ans += 1;
      i += 2;
    }
  }

  return ans;
};
