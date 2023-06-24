/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  solve();

  function solve() {
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (board[i][j] !== '.') { continue; }

        // Try inserting every digit
        for (let digit = 1; digit <= 9; digit += 1) {
          const digitChar = digit.toString();
          if (isValid(i, j, digitChar)) {
            board[i][j] = digitChar;

            if (solve()) { // True if we've solved the puzzle
              return true;
            } else { // Otherwise, backtrack
              board[i][j] = '.';
            }
          }
        }

        // Unable to continue
        return false;
      }
    }

    // Solved the puzzle!
    return true;
  }

  // Returns true if inserting the given digit at the given cell is valid
  function isValid(row, col, digit) {
    for (let i = 0; i < 9; i += 1) {
      const sameRow = board[row][i] !== '.' && board[row][i] === digit; // Checks row
      const sameCol = board[i][col] !== '.' && board[i][col] === digit; // Checks column

      // Checks 3x3 box
      const boxRow = (3 * (Math.floor(row / 3))) + (Math.floor(i / 3));
      const boxCol = (3 * (Math.floor(col / 3))) + (i % 3);
      const sameBox = board[boxRow][boxCol] !== '.' && board[boxRow][boxCol] === digit;

      if (sameRow || sameCol || sameBox) { return false; }
    }

    return true;
  }
};
