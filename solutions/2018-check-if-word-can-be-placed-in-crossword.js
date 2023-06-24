const assert = require('assert');

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const numChars = word.length;

  // Rows
  for (let i = 0; i < m; i += 1) {
    let colStart = null;
    let hasLetters = false;

    for (let j = 0; j <= n; j += 1) {
      if (j === n || board[i][j] === '#') {
        if (colStart === null) {
          continue;
        }

        if (j - colStart === numChars && (!hasLetters || checkValidRow(i, colStart, j))) {
          return true;
        }

        colStart = null;
        hasLetters = false;
      } else {
        if (colStart === null) {
          colStart = j;
        }

        hasLetters = hasLetters || board[i][j] !== ' ';
      }
    }
  }

  // Columns
  for (let j = 0; j < n; j += 1) {
    let rowStart = null;
    let hasLetters = false;

    for (let i = 0; i <= m; i += 1) {
      if (i === m || board[i][j] === '#') {
        if (rowStart === null) {
          continue;
        }

        if (i - rowStart === numChars && (!hasLetters || checkValidCol(j, rowStart, i))) {
          return true;
        }

        rowStart = null;
        hasLetters = false;
      } else {
        if (rowStart === null) {
          rowStart = i;
        }

        hasLetters = hasLetters || board[i][j] !== ' ';
      }
    }
  }

  return false;

  function checkValidRow(row, colStart, colEnd) {
    let forwardsValid = true;
    let reverseValid = true;

    for (let i = 0; i < numChars; i += 1) {
      if (board[row][colStart + i] !== ' ' && word[i] !== board[row][colStart + i]) {
        forwardsValid = false;
      }

      if (board[row][colEnd - 1 - i] !== ' ' && word[i] !== board[row][colEnd - 1 - i]) {
        reverseValid = false;
      }

      if (!forwardsValid && !reverseValid) {
        break;
      }
    }

    return forwardsValid || reverseValid;
  }

  function checkValidCol(col, rowStart, rowEnd) {
    let forwardsValid = true;
    let reverseValid = true;

    for (let i = 0; i < numChars; i += 1) {
      if (board[rowStart + i][col] !== ' ' && word[i] !== board[rowStart + i][col]) {
        forwardsValid = false;
      }

      if (board[rowEnd - 1 - i][col] !== ' ' && word[i] !== board[rowEnd - 1 - i][col]) {
        reverseValid = false;
      }

      if (!forwardsValid && !reverseValid) {
        break;
      }
    }

    return forwardsValid || reverseValid;
  }
};

assert(placeWordInCrossword([['#', ' ', '#'], [' ', ' ', '#'], ['#', 'c', ' ']], 'abc'));
assert(placeWordInCrossword([['#', ' ', '#'], [' ', ' ', '#'], ['#', ' ', 'c']], 'ca'));
assert.equal(
  placeWordInCrossword([[' ', '#', 'a'], [' ', '#', 'c'], [' ', '#', 'a']], 'ac'), false);
