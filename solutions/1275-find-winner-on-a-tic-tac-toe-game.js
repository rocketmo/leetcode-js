const assert = require('assert');
const _ = require('lodash');

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const grid = [];
  for (let i = 0; i < 3; i += 1) {
    grid.push(_.fill(Array(3), null));
  }

  // Make the moves on the grid; use "A" and "B" instead of "X" and "O" to simplify logic
  let isA = true;
  for (const [ row, col ] of moves) {
    grid[row][col] = isA ? 'A' : 'B';
    isA = !isA;
  }

  // Check for winner
  for (let i = 0; i < 3; i += 1) {
    const rowWinner = checkRow(i);
    if (rowWinner) {
      return rowWinner;
    }

    const colWinner = checkCol(i);
    if (colWinner) {
      return colWinner;
    }
  }

  // Check diagonals
  const diagWinner1 = checkTopLeftDiagonal();
  if (diagWinner1) {
    return diagWinner1;
  }

  const diagWinner2 = checkTopRightDiagonal();
  if (diagWinner2) {
    return diagWinner2;
  }

  // No winner
  return moves.length < 9 ? 'Pending' : 'Draw';

  function checkForLine([row1, col1], [row2, col2], [row3, col3]) {
    if (grid[row1][col1] && grid[row1][col1] === grid[row2][col2] &&
            grid[row1][col1] === grid[row3][col3]) {
      return grid[row1][col1];
    }

    return null;
  }

  function checkRow(row) {
    return checkForLine([row, 0], [row, 1], [row, 2]);
  }

  function checkCol(col) {
    return checkForLine([0, col], [1, col], [2, col]);
  }

  function checkTopLeftDiagonal() {
    return checkForLine([0, 0], [1, 1], [2, 2]);
  }

  function checkTopRightDiagonal() {
    return checkForLine([0, 2], [1, 1], [2, 0]);
  }
};

assert.equal(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]), 'A');
assert.equal(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]), 'B');
assert.equal(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]), 'Draw');
assert.equal(tictactoe([[0,0],[1,1]]), 'Pending');
