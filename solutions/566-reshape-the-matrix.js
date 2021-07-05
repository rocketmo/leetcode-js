/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    // Check if the matrix can be reshaped; if not, return the original matrix
    const totalElements = mat.length * mat[0].length;
    if (r * c !== totalElements) { return mat; }

    // Reshape
    const reshapedMatrix = [ [] ];
    let ri = 0;
    let ci = 0;

    for (let i = 0; i < mat.length; i += 1) {
        for (let j = 0; j < mat[i].length; j += 1) {
            if (ci >= c) {
                reshapedMatrix.push([]);
                ri += 1;
                ci = 0;
            }

            reshapedMatrix[ri][ci] = mat[i][j];
            ci += 1;
        }
    }

    return reshapedMatrix;
};
