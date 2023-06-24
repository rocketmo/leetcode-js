const assert = require('assert');

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  // Check if we need to remove all digits
  if (num.length === k) return '0';

  // Push digits onto a stack
  const stack = [];
  for (let i = 0; i < num.length; i += 1) {
    // Discard previous digits if they are greater than the current digit
    while(k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k -= 1;
    }

    stack.push(num[i]);
  }

  // Remove the required amount if we haven't already
  while (k > 0) {
    stack.pop();
    k -= 1;
  }

  // Remove leading zeroes
  stack.reverse();
  while(stack.length > 1 && stack[stack.length - 1] === '0') {
    stack.pop();
  }

  // Convert to a string and return
  return stack.reverse().join('');
};

assert.equal(removeKdigits('1432219', 3), '1219');
assert.equal(removeKdigits('10200', 1), '200');
assert.equal(removeKdigits('10', 2), '0');
assert.equal(removeKdigits('2003', 2), '0');
assert.equal(removeKdigits('112', 1), '11');
