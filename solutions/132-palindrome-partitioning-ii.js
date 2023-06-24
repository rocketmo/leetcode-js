/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const dp = [];
  const isPal = [];

  for (let i = 0; i < s.length; i += 1) {
    isPal.push(Array(s.length));
    let min = i;

    for (let j = 0; j <= i; j += 1) {
      if (s[i] === s[j] && (j + 1 > i - 1 || isPal[j + 1][i - 1])) {
        isPal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, dp[j - 1] + 1);
      }
    }

    dp.push(min);
  }

  return dp[s.length - 1];
};
