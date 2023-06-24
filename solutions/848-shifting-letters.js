const _ = require('lodash');

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const minCharCode = 'a'.charCodeAt(0);
  const maxCharCode = 'z'.charCodeAt(0);
  const n = shifts.length;
  const shiftsByCharPos = _.fill(Array(n), 0);
  shiftsByCharPos[n - 1] = shifts[n - 1] % 26;

  for (let i = n - 2; i >= 0; i -= 1) {
    shiftsByCharPos[i] = (shifts[i] + shiftsByCharPos[i + 1]) % 26;
  }

  return s.split('').map((char, idx) => {
    let currCharCode = char.charCodeAt(0);
    let shiftedCharCode = currCharCode + shiftsByCharPos[idx];
    if (shiftedCharCode > maxCharCode) {
      shiftedCharCode = (shiftedCharCode % (maxCharCode + 1)) + minCharCode;
    }

    return String.fromCharCode(shiftedCharCode);
  }).join('');
};
