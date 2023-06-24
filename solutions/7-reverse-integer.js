/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num = Math.abs(x);
  let reversed = 0;

  // Get the reversed number
  while (num > 0) {
    const rem = num % 10;
    reversed = (reversed * 10) + rem;

    num = Math.floor(num / 10);
  }

  // Add sign
  if (x < 0) {
    reversed *= -1;
  }

  // Return 0 if outside of 32-bit integer range
  if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
    return 0;
  }

  return reversed;
};
