const assert = require("assert");

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const m = image.length;
    const n = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === newColor) {
        return image;
    }

    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
    const stack = [ { row: sr, col: sc }];
    image[sr][sc] = newColor;

    while (stack.length) {
        const { row, col } = stack.pop();
        for (const [ rowOffset, colOffset ] of directions) {
            const nextRow = row + rowOffset;
            const nextCol = col + colOffset;

            if (nextRow >= 0 && nextCol >= 0 && nextRow < m && nextCol < n &&
                image[nextRow][nextCol] === originalColor) {
                image[nextRow][nextCol] = newColor;
                stack.push({ row: nextRow, col: nextCol });
            }
        }
    }

    return image;
};

assert.deepEqual(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2), [[2,2,2],[2,2,0],[2,0,1]]);
assert.deepEqual(floodFill([[0,0,0],[0,0,0]], 0, 0, 2), [[2,2,2],[2,2,2]]);
assert.deepEqual(floodFill([[0,0,0],[0,0,0]], 0, 0, 0), [[0,0,0],[0,0,0]]);
assert.deepEqual(floodFill([[0,0,0],[0,1,0]], 1, 1, 2), [[0,0,0],[0,2,0]]);
