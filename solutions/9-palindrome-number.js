/**
 * First solution: Convert to string, then check if it is a palindrome
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = String(x);

  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

/**
 * Second solution: Reverse the number and return true if the reversed number equals the original
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) { return false; }

  let y = x, reversed = 0;
  while (y > 0) {
    reversed = (reversed * 10) + (y % 10);
    y = Math.floor(y / 10);
  }

  return x === reversed;
};

/**
 * Third solution: Uses built-in functions to reverse the integer, more elegant
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();
  return str === str.split('').reverse().join('');
};
