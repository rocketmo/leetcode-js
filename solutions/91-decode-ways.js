const _ = require('lodash');

/**
 * Also see P639 (Decode Ways II)
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = _.fill(Array(s.length + 1), 1);

  for (let i = s.length - 1; i >= 0; i -= 1) {
    const char = s[i];
    const nextChar = s[i + 1];
    const nextChar2 = s[i + 2];
    const prevChar = s[i - 1];

    if (char === '1') {
      if (nextChar >= '1' && nextChar <= '9' && nextChar2 !== '0') {
        dp[i] = dp[i + 1] + dp[i + 2];
      } else {
        dp[i] = dp[i + 1];
      }

      continue;

    } else if (char === '2') {
      if (nextChar >= '1' && nextChar <= '6' && nextChar2 !== '0') {
        dp[i] = dp[i + 1] + dp[i + 2];
      } else {
        dp[i] = dp[i + 1];
      }

      continue;
    } else if (char === '0') {
      if (prevChar !== '1' && prevChar !== '2') {
        dp[i] = 0;
        continue;
      }
    }

    dp[i] = dp[i + 1];
  }

  return dp[0];
};
