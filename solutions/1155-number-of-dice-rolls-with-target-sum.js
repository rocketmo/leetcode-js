/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  const dp = [ [] ];

  for (let i = 1; i <= target; i += 1) {
    dp[0][i] = (i <= f) ? 1 : 0;
  }

  for (let i = 1; i < d; i += 1) {
    dp.push([]);

    for (let j = 1; j <= target; j += 1) {
      let count = 0;

      for (let k = 1; k <= f; k += 1) {
        const diff = j - k;

        if (diff > 0) {
          count = modulo(count + dp[i - 1][diff]);
        } else {
          break;
        }
      }

      dp[i][j] = count;
    }
  }

  return dp[d - 1][target];

  function modulo(num) {
    return num % (1e9 + 7);
  }
};
