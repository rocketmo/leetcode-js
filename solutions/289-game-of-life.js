const assert = require('assert');

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!board.length || !board[0].length) return;
  updateTile(board, 0, 0);
};

var updateTile = function(board, x, y) {
  const liveNeighbours = countLiveNeighbours(board, x, y);
  const newVal = determineNewValue(board, x, y, liveNeighbours);

  if (y + 1 < board[x].length) {
    updateTile(board, x, y + 1);
  } else if (x + 1 < board.length) {
    updateTile(board, x + 1, 0);
  }

  board[x][y] = newVal;
};

var countLiveNeighbours = function(board, x, y) {
  let liveNeighbours = 0;
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (i === 0 && j === 0) {
        continue;
      }

      const neighbourX = x + i;
      const neighbourY = y + j;
      if (
        neighbourX < 0 ||
        neighbourX >= board.length ||
        neighbourY < 0 ||
        neighbourY >= board[x].length
      ) {
        continue;
      }

      const neighbour = board[neighbourX][neighbourY];
      liveNeighbours += neighbour;
    }
  }

  return liveNeighbours;
};

var determineNewValue = function(board, x, y, liveNeighbours) {
  const currVal = board[x][y];
  if (currVal && (liveNeighbours < 2 || liveNeighbours > 3)) {
    return 0;
  } else if (!currVal && liveNeighbours !== 3) {
    return 0;
  }

  return 1;
};

// TODO: Solve without using recursion

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board);
assert.deepEqual(board, [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]);

const board2 = [[1,1],[1,0]];
gameOfLife(board2);
assert.deepEqual(board2, [[1,1],[1,1]]);
