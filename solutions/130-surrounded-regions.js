const assert = require('assert');

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

  // Fill cells on the outer edges
  for (let i = 0; i < board.length; i += 1) {
    fillRegion('E', i, 0);
    fillRegion('E', i, board[0].length - 1);
  }

  for (let i = 0; i < board[0].length; i += 1) {
    fillRegion('E', 0, i);
    fillRegion('E', board.length - 1, i);
  }

  // Fill inner cells
  for (let i = 1; i < board.length - 1; i += 1) {
    for (let j = 1; j < board[i].length - 1; j += 1) {
      fillRegion('X', i, j);
    }
  }

  // Change all "E"s back to "O"s
  for (let i = 0; i < board.length; i += 1) {
    for (let j =  0; j < board[i].length; j += 1) {
      if (board[i][j] === 'E') {
        board[i][j] = 'O';
      }
    }
  }

  function fillRegion(char, row, col) {
    const stack = [[ row, col ]];
    while (stack.length) {
      const [ boardRow, boardCol ] = stack.pop();
      if (!board[boardRow] || !board[boardRow][boardCol] ||
                board[boardRow][boardCol] !== 'O') {
        continue;
      }

      board[boardRow][boardCol] = char;
      stack.push([ boardRow + 1, boardCol ], [ boardRow - 1, boardCol ],
        [ boardRow, boardCol + 1 ], [ boardRow, boardCol - 1 ]);
    }
  }
};

const board1 = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']];
solve(board1);
assert.deepEqual(board1, [['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]);

const board2 = [['X']];
solve(board2);
assert.deepEqual(board2, [['X']]);

const board3 = [['X','O','X'],['X','O','X'],['X','O','X']];
solve(board3);
assert.deepEqual(board3, [['X','O','X'],['X','O','X'],['X','O','X']]);
