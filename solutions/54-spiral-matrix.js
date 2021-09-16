/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let topRow = 0, botRow = m - 1, leftCol = 0, rightCol = n- 1;
    const arr = [];

    while (topRow <= botRow && leftCol <= rightCol) {
        if (topRow === botRow) {
            for (let i = leftCol; i <= rightCol; i += 1) {
                arr.push(matrix[topRow][i]);
            }
        } else if (leftCol === rightCol) {
            for (let i = topRow; i <= botRow; i += 1) {
                arr.push(matrix[i][leftCol]);
            }
        } else {
            for (let i = leftCol; i <= rightCol; i += 1) {
                arr.push(matrix[topRow][i]);
            }

            for (let i = topRow + 1; i <= botRow; i += 1) {
                arr.push(matrix[i][rightCol]);
            }

            for (let i = rightCol - 1; i >= leftCol; i -= 1) {
                arr.push(matrix[botRow][i]);
            }

            for (let i = botRow - 1; i > topRow; i -= 1) {
                arr.push(matrix[i][leftCol]);
            }
        }

        topRow += 1;
        botRow -= 1;
        leftCol += 1;
        rightCol -= 1;
    }

    return arr;
};
