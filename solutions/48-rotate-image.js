const assert = require("assert");

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    let len = n;
    let start = 0;

    while (len > 1) {
        const arr = [];

        // Record all numbers in the current ring

        // Top row
        for (let i = start; i < start + len; i += 1) {
            arr.push(matrix[start][i]);
        }

        // Right side (exclude top right)
        for (let i = start + 1; i < start + len; i += 1) {
            arr.push(matrix[i][start + len - 1]);
        }

        // Bottom row (exclude bottom right)
        for (let i = start + len - 2; i >= start; i -= 1) {
            arr.push(matrix[start + len - 1][i]);
        }

        // Left side (exclude bottom left, top left)
        for (let i = start + len - 2; i > start; i -= 1) {
            arr.push(matrix[i][start]);
        }


        // Rotate the ring with our record numbers
        let idx = 0;

        // Right side
        for (let i = start; i < start + len; i += 1) {
            matrix[i][start + len - 1] = arr[idx];
            idx += 1;
        }

        // Bottom row (exclude bottom right)
        for (let i = start + len - 2; i >= start; i -= 1) {
            matrix[start + len - 1][i] = arr[idx];
            idx += 1;
        }

        // Left side (exclude bottom left)
        for (let i = start + len - 2; i >= start; i -= 1) {
            matrix[i][start] = arr[idx];
            idx += 1;
        }

        // Top row (exclude top left, top right)
        for (let i = start + 1; i < start + len - 1; i += 1) {
            matrix[start][i] = arr[idx];
            idx += 1;
        }

        start += 1;
        len -= 2;
    }
};

const arr1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(arr1);
assert.deepEqual(arr1, [[7,4,1],[8,5,2],[9,6,3]], "fail 1");

const arr2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(arr2);
assert.deepEqual(arr2, [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
