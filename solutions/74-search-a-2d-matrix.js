const assert = require('assert');

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (matrix[mid][n - 1] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (left >= m) {
    return false;
  }

  const row = left;
  left = 0;
  right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return false;
};

assert(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
assert(searchMatrix([[1]], 1));
assert.equal(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13), false);
assert.equal(searchMatrix([[1]], 2), false);
