const assert = require("assert");
const _ = require("lodash");

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = [];

    for (let i = 0; i < m; i += 1) {
        visited.push(_.fill(Array(n), false));
    }

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;

    function dfs(row, col, charPos) {
        if (board[row][col] !== word[charPos] || visited[row][col]) {
            return false;
        } else if (charPos === word.length - 1) {
            return true;
        }

        visited[row][col] = true;
        for (const [rowOffset, colOffset] of directions) {
            const nextRow = row + rowOffset;
            const nextCol = col + colOffset;

            if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n &&
                dfs(nextRow, nextCol, charPos + 1)) {
                return true;
            }
        }

        // Backtrack
        visited[row][col] = false;
        return false;
    }
};

assert(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
assert(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
assert.equal(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"), false);
