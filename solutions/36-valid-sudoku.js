/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const setByRow = [];
  const setByCol = [];
  const setByBox = [];

  for (let i = 0; i < 9; i += 1) {
    setByRow.push(new Set());
    setByCol.push(new Set());
    setByBox.push(new Set());
  }

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      const digit = board[i][j];
      if (digit === '.') {
        continue;
      }

      const box = (Math.floor(i / 3) * 3) + Math.floor(j / 3);

      if (setByRow[i].has(digit) || setByCol[j].has(digit) || setByBox[box].has(digit)) {
        return false;
      }

      setByRow[i].add(digit);
      setByCol[j].add(digit);
      setByBox[box].add(digit);
    }
  }

  return true;
};
