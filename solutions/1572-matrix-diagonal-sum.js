/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let ans = 0;
  for (let i = 0; i < mat.length; i += 1) {
    ans += mat[i][i];

    const second = mat.length - 1 - i;
    if (second !== i) {
      ans += mat[i][second];
    }
  }

  return ans;
};
