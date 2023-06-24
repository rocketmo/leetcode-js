const assert = require('assert');

/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
  const n = board.length;

  // Count of ones in first row and column
  let rowSum = 0;
  let colSum = 0;

  // Count of misplaced elements in first row and column
  let rowMisplaced = 0;
  let colMisplaced = 0;

  // Check corners of each rectangle in the board. The corners of each rectangle must be one
  // of the following: 4 zeroes, 2 zeroes and 2 ones, or 4 ones.
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) {
        return -1;
      }
    }
  }

  // Count ones and misplaced elements in first row and column
  for (let i = 0; i < n; i += 1) {
    rowSum += board[0][i];
    colSum += board[i][0];

    if (board[i][0] === i % 2) { rowMisplaced += 1; }
    if (board[0][i] === i % 2) { colMisplaced += 1; }
  }

  // Confirm that first row and column have the correct number of ones
  // Checking first row and column is sufficient because we have verified the corners of the board
  if (rowSum !== Math.floor(n / 2) && rowSum !== Math.floor((n + 1) / 2)) { return -1; }
  if (colSum !== Math.floor(n / 2) && colSum !== Math.floor((n + 1) / 2)) { return -1; }

  // If n is odd, only one pattern is possible.
  // If misplaced is even, pattern is "1010...", otherwise pattern is "0101...".
  if (n % 2 === 1) {
    if (rowMisplaced % 2 === 1) { rowMisplaced = n - rowMisplaced; }
    if (colMisplaced % 2 === 1) { colMisplaced = n - colMisplaced; }
  }

  // If n is even, pattern can be either "1010..." or "0101...".
  else {
    rowMisplaced = Math.min(n - rowMisplaced, rowMisplaced);
    colMisplaced = Math.min(n - colMisplaced, colMisplaced);
  }

  // Divide the total by 2 as one swap fixes two misplaced elements
  return Math.floor((rowMisplaced + colMisplaced) / 2);
};

assert.equal(movesToChessboard([[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]), 2);
assert.equal(movesToChessboard([[0,1],[1,0]]), 0);
assert.equal(movesToChessboard([[1,0],[1,0]]), -1);
assert.equal(movesToChessboard([[1,1,0],[0,0,1],[0,0,1]]), 2);
assert.equal(movesToChessboard([[1,0,0],[0,1,1],[1,0,0]]), 1);
