const assert = require('assert');

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let columnTitle = '';

  while (columnNumber > 0) {
    const remainder = (columnNumber - 1) % 26;
    columnTitle = convertToChar(remainder) + columnTitle;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return columnTitle;
};

function convertToChar(num) {
  return String.fromCharCode(num + 65); // 65 is the char code for 'A'
}

assert.equal(convertToTitle(1), 'A');
assert.equal(convertToTitle(28), 'AB');
assert.equal(convertToTitle(701), 'ZY');
assert.equal(convertToTitle(2147483647), 'FXSHRXW');
