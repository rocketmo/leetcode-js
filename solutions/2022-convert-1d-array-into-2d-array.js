/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (original.length !== (m * n)) {
    return [];
  }

  const ans = [];
  let idx = 0;

  for (let i = 0; i < m; i += 1) {
    ans.push([]);
    for (let j = 0; j < n; j += 1) {
      ans[i].push(original[idx]);
      idx += 1;
    }
  }

  return ans;
};
