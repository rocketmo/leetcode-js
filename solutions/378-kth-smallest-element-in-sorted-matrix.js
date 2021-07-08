/**
 * First solution: Flatten the matrix, sort the array and return the kth element
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    const flattened = matrix.reduce((acc, row) => {
        acc.push(...row);
        return acc;
    }, [])

    flattened.sort((a, b) => a - b);
    return flattened[k - 1];
};

/**
 * Improved solution: Use binary search. Through each iteration, count the number of matrix elements
 * smaller than the current value.
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let n = matrix.length,
        lo = matrix[0][0],
        hi = matrix[n -1][n - 1];

    while (lo < hi) {
        let count = 0,
            currCol = n - 1,
            mid = Math.floor((lo + hi) / 2);

        /**
         * Count the number of smaller elements. Since each row is sorted, we can traverse from the
         * top right to the bottom left of the matrix to count how many elements in each row are
         * smaller than the current value of `mid`.
         */
        for (let i = 0; i < n; i += 1) {
            while (currCol >= 0 && matrix[i][currCol] > mid) { currCol -= 1; }
            count += (currCol + 1);
        }

        if (count < k) { lo = mid + 1; }
        else { hi = mid; }
    }

    return lo;
};
