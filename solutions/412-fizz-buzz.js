const assert = require('assert');

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const ans = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push('FizzBuzz');
    } else if (i % 3 === 0) {
      ans.push('Fizz');
    } else if (i % 5 === 0) {
      ans.push('Buzz');
    } else {
      ans.push(i.toString());
    }
  }

  return ans;
};

assert.deepEqual(fizzBuzz(3), ['1','2','Fizz']);
assert.deepEqual(fizzBuzz(5), ['1','2','Fizz','4','Buzz']);
assert.deepEqual(fizzBuzz(15),
  ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
