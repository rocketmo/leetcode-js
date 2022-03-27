const assert = require("assert");

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const numSoldiers = [];

    // Count number of soldies in each row
    for (let i = 0; i < mat.length; i += 1) {
        const row = mat[i];
        let count = 0;
        for (const val of row) {
            if (val === 0) break;
            count += 1;
        }

        numSoldiers.push({ idx: i, count });
    }

    // Sort the result
    numSoldiers.sort((a, b) => (a.count === b.count ? a.idx - b.idx : a.count - b.count));

    // Return first k results
    return numSoldiers.slice(0, k).map(soldierObj => soldierObj.idx);
};

const mat1 =[
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
];
assert.deepEqual(kWeakestRows(mat1, 3), [2,0,3]);

const mat2 =[
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]
];
assert.deepEqual(kWeakestRows(mat2, 2), [0,2]);
