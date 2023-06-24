const _ = require('lodash');

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (t.length > s.length) {
    return 0;
  }

  const dp = _.fill(Array(t.length), 0);
  const charMap = new Map();

  for (let i = 0; i < t.length; i += 1) {
    const char = t[i];

    if (charMap.has(char)) {
      charMap.get(char).push(i);
    } else {
      charMap.set(char, [ i ]);
    }
  }

  for (const char of s) {
    if (!charMap.has(char)) {
      continue;
    }

    const indexes = charMap.get(char);
    for (let i = indexes.length - 1; i >= 0; i -= 1) {
      const idx = indexes[i];

      if (idx === 0) {
        dp[idx] += 1;
      } else {
        dp[idx] += dp[idx - 1];
      }
    }
  }

  return dp[t.length - 1];
};
