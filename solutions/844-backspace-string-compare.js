const assert = require('assert');

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const bsStr1 = getBackspaceString(s);
  const bsStr2 = getBackspaceString(t);

  return bsStr1 === bsStr2;

  function getBackspaceString(str) {
    let bsStr = [];

    for (const char of str) {
      if (char === '#') {
        if (bsStr.length > 0) {
          bsStr.pop();
        }
      } else {
        bsStr.push(char);
      }
    }

    return bsStr.join('');
  }
};

assert(backspaceCompare('ab#c', 'ad#c'));
assert(backspaceCompare('ab##', 'c#d#'));
assert(backspaceCompare('a##c', '#a#c'));
assert.equal(backspaceCompare('a#c', 'b'), false);
