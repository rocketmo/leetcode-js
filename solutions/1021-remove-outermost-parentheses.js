const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let str = '';
  let lCount = 0;
  let rCount = 0;
  let lIdx = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      lCount += 1;
    } else {
      rCount += 1;
    }

    if (lCount === rCount) {
      str += s.slice(lIdx + 1, i);
      lIdx = i + 1;
    }
  }

  return str;
};

assert.equal(removeOuterParentheses('(()())(())'), '()()()');
assert.equal(removeOuterParentheses('(()())(())(()(()))'), '()()()()(())');
assert.equal(removeOuterParentheses('()()'), '');
