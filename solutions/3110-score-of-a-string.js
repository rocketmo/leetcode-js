const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let score = 0;
  for (let i = 1; i < s.length; i += 1) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }

  return score;
};

assert.equal(scoreOfString('hello'), 13);
assert.equal(scoreOfString('zaz'), 50);
