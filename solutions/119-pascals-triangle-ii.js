const assert = require("assert");

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [ 1 ];

    for (let i = 1; i <= rowIndex; i += 1) {
        const nextRow = Array(i + 1);
        nextRow[0] = 1;
        nextRow[i] = 1;

        for (let j = 1; j < i; j += 1) {
            nextRow[j] = row[j - 1] + row[j];
        }

        row = nextRow;
    }

    return row;
};

assert.deepEqual(getRow(3), [1,3,3,1]);
assert.deepEqual(getRow(0), [1]);
assert.deepEqual(getRow(1), [1,1]);
