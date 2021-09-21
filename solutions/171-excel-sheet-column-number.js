const assert = require("assert");

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const startCode = "A".charCodeAt(0);
    let ans = 0;

    for (let i = 0; i < columnTitle.length; i += 1) {
        const charCode = columnTitle.charCodeAt(i);
        ans = (ans * 26) + (charCode - startCode + 1);
    }

    return ans;
};

assert.equal(titleToNumber("A"), 1);
assert.equal(titleToNumber("AB"), 28);
assert.equal(titleToNumber("ZY"), 701);
assert.equal(titleToNumber("FXSHRXW"), 2147483647);
