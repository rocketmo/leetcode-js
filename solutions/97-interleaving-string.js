const assert = require('assert');
const _ = require('lodash');

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;

  if (m + n !== s3.length) {
    return false;
  }

  const dp = [];
  _.times(m + 1, () => {
    dp.push(_.fill(Array(n + 1), false));
  });

  for (let i = 0; i <= m; i += 1) {
    for (let j = 0; j <= n; j += 1) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
        continue;
      }

      const toMatch = s3[i + j - 1];
      const iMatch = i > 0 && s1[i - 1] === toMatch;
      const jMatch = j > 0 && s2[j - 1] === toMatch;
      if (!iMatch && !jMatch) {
        continue;
      }

      if ((iMatch && i > 0 && dp[i - 1][j]) || (jMatch && j > 0 && dp[i][j - 1])) {
        dp[i][j] = true;
      }
    }
  }

  return dp[m][n];
};

assert(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
assert(isInterleave('', '', ''));
assert.equal(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'), false);
assert.equal(isInterleave('ab', 'bc', 'bbac'), false);
