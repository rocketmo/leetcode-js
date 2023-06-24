const assert = require('assert');

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let num1 = 0, num2 = 1;
  for (let i = 2; i <= n; i += 1) {
    const tmp = num2;
    num2 = num2 + num1;
    num1 = tmp;
  }

  return num2;
};

assert.equal(fib(0), 0);
assert.equal(fib(1), 1);
assert.equal(fib(2), 1);
assert.equal(fib(3), 2);
assert.equal(fib(4), 3);
assert.equal(fib(8), 21);
