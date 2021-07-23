/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {

    // Extract each diagonal into their own array
    const diags = [];
    const m = mat.length;
    const n = mat[0].length;

    let i = m - 1;
    let j = 0;

    while (j < n) {
        const arr = [];
        let x = i, y = j;

        while (x < m && y < n) {
            arr.push(mat[x][y]);
            x += 1;
            y += 1;
        }

        diags.push(arr);

        if (i > 0) {
            i -= 1;
        } else {
            j += 1;
        }
    }

    // Sort each diagonal
    diags.forEach(arr => {
        arr.sort((a, b) => a - b);
    });

    // Place the sorted diagonals back into the matrix
    i = m - 1;
    j = 0;

    for (const arr of diags) {
        let x = i, y = j;

        for (const num of arr) {
            mat[x][y] = num;
            x += 1;
            y += 1;
        }

        if (i > 0) {
            i -= 1;
        } else {
            j += 1;
        }
    }

    return mat;
};
