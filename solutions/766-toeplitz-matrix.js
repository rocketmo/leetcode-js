/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {

    // Search diagonals starting on 1st column
    for (let i = 0; i < matrix.length; i += 1) {
        let val = matrix[i][0];
        let x = i + 1;
        let y = 1;

        while (x < matrix.length && y < matrix[x].length) {
            if (matrix[x][y] !== val) {
                return false;
            }

            x += 1;
            y += 1;
        }
    }

    // Search diagonals on 1st row, starting from 2nd element
    for (let i = 1; i < matrix[0].length; i += 1) {
        let val = matrix[0][i];
        let x = 1;
        let y = i + 1;

        while (x < matrix.length && y < matrix[x].length) {
            if (matrix[x][y] !== val) {
                return false;
            }

            x += 1;
            y += 1;
        }
    }

    return true;
};
