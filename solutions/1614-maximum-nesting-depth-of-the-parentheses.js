const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let ans = 0;
  let currAns = 0;

  for (const char of s) {
    if (char === '(') {
      currAns += 1;
      ans = Math.max(currAns, ans);
    } else if (char === ')') {
      currAns -= 1;
    }
  }

  return ans;
};

assert.equal(maxDepth('(1+(2*3)+((8)/4))+1'), 3);
assert.equal(maxDepth('(1)+((2))+(((3)))'), 3);
assert.equal(maxDepth('1+(2*3)/(2-1)'), 1);
assert.equal(maxDepth('1'), 0);
assert.equal(maxDepth(''), 0);
