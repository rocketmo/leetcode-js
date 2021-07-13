/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let currRow = 0;
    let currCol = 0;

    for (let i = 1; i < matrix.length; i += 1) {
        if (matrix[i][0] > target) {
            break;
        }

        currRow = i;
    }

    while (true) {
        if (matrix[currRow][currCol] === target) {
            return true;
        }

        currCol += 1;
        if (currCol >= matrix[currRow].length || currRow < 0) {
            break;
        }

        while (currRow > 0 && matrix[currRow][currCol] > target) {
            currRow -= 1;
        }
    }

    return false;
};
