const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let newStr = "";

    for (let i = 0; i < s.length; i += 1) {
        if (i % 2 === 0) {
            newStr += s[i];
        } else {
            const shiftAmnt = parseInt(s[i]);
            let charCode = s.charCodeAt(i - 1) + shiftAmnt;
            newStr += String.fromCharCode(charCode);
        }
    }

    return newStr;
};

assert.equal(replaceDigits("a1c1e1"), "abcdef");
assert.equal(replaceDigits("a1b2c3d4e"), "abbdcfdhe");
