/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let ans = 0;

    for (let i = 0; i < mat.length; i += 1) {
        for (let j = 0; j < mat[i].length; j += 1) {

            // Found a 1
            if (mat[i][j] === 1) {
                // Count the maximum number of columns to consider in further submatrices
                let maxCols = 1;

                // Count submatrices you can create with (i, j) being the top left corner
                for (let row = i; row < mat.length; row += 1) {

                    // Can no longer create submatrices if first number in submatrix row is not 1
                    if (mat[row][j] !== 1) {
                        break;
                    }

                    // Otherwise, count number of columns we can add to the submatrix
                    ans += 1;
                    let currCols = 1;
                    for (let col = j + 1; col < mat[i].length; col += 1) {
                        if ((row !== i && currCols + 1 > maxCols) || mat[row][col] !== 1) {
                            break;
                        }

                        ans += 1;
                        currCols += 1;
                    }

                    maxCols = currCols;
                }
            }
        }
    }

    return ans;
};
