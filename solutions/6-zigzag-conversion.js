/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    // Construct storage object
    const rows = [];
    for (let i = 0; i < numRows; i += 1) {
        rows.push([]);
    }

    // Zig-zag into the rows
    let currentRow = 0;
    let reverse = false;
    for (let j = 0; j < s.length; j += 1) {
        rows[currentRow].push(s[j]);

        if (numRows > 1) {
            currentRow += (reverse ? -1 : 1);

            if (currentRow > numRows - 1) {
                currentRow -= 2;
                reverse = true;
            } else if (currentRow < 0) {
                currentRow += 2;
                reverse = false;
            }
        }
    }

    // Combine rows into single string
    return rows.reduce((accumulator, row) => {
        return accumulator + row.join("");
    }, "");
};
