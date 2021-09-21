const assert = require("assert");

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [ [1] ];
    let row = 1;

    while (row < numRows) {
        const nextRow = Array(row + 1);
        nextRow[0] = 1;
        nextRow[row] = 1;

        for (let i = 1; i < row; i += 1) {
            nextRow[i] = ans[row - 1][i - 1] + ans[row - 1][i];
        }

        ans.push(nextRow);

        row += 1;
    }

    return ans;
};

assert.deepEqual(generate(5), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
assert.deepEqual(generate(1), [[1]]);
