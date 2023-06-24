/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // Check if there are zeroes in the first row or first column
  let zeroFirstCol = false;
  let zeroFirstRow = false;

  for (let i = 0; i < matrix.length; i += 1) {
    if (matrix[i][0] === 0) {
      zeroFirstCol = true;
      break;
    }
  }

  for (let i = 0; i < matrix[0].length; i += 1) {
    if (matrix[0][i] === 0) {
      zeroFirstRow = true;
      break;
    }
  }

  // Flag the the first cell of each row and column if there is a zero in it
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Update matrix with zeroes
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[i].length; j += 1) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (zeroFirstCol) {
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][0] = 0;
    }
  }

  if (zeroFirstRow) {
    for (let i = 0; i < matrix[0].length; i += 1) {
      matrix[0][i] = 0;
    }
  }


  return matrix;
};
