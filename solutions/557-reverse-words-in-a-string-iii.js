const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(word => {
    return word.split('').reverse().join('');
  }).join(' ');
};

assert.equal(reverseWords('Let\'s take LeetCode contest'), 's\'teL ekat edoCteeL tsetnoc');
assert.equal(reverseWords('God Ding'), 'doG gniD');
