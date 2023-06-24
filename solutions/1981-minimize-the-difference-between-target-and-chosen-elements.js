/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
  const m = mat.length;
  const n = mat[0].length;

  let minAns = 0;
  let maxAns = 0;
  let ansSet = new Set([ 0 ]);

  for (let i = 0; i < m; i += 1) {
    minAns += Math.min(...mat[i]);
    maxAns += Math.max(...mat[i]);

    const nextSet = new Set();
    for (const num of ansSet.values()) {
      for (let j = 0; j < n; j += 1) {
        nextSet.add(num + mat[i][j]);
      }
    }

    ansSet = nextSet;
  }

  if (minAns >= target) {
    return Math.abs(target - minAns);
  } else if (maxAns <= target) {
    return Math.abs(target - maxAns);
  }

  let minAbsDiff = Number.MAX_SAFE_INTEGER;
  for (const ans of ansSet.values()) {
    minAbsDiff = Math.min(minAbsDiff, Math.abs(target - ans));

    if (minAbsDiff === 0) {
      return minAbsDiff;
    }
  }

  return minAbsDiff;
};
