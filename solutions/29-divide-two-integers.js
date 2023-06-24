/**
 * First solution: Just use normal division (cheating!)
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let ans = Math.trunc(dividend / divisor);
  const MAX = (2 ** 31) - 1;
  const MIN = -(2 ** 31);

  if (ans > MAX) {
    return MAX;
  } else if (ans < MIN) {
    return MIN;
  }

  return ans;
};

/**
 * Second solution: Recursion
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  // Handle edge case
  const MAX = (2 ** 31) - 1;
  const MIN = -(2 ** 31);

  if (dividend === MIN && divisor === -1) {
    return MAX;
  }

  // Calculate the answer
  let ans = divideHelper(Math.abs(dividend), Math.abs(divisor));
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    ans = -ans;
  }

  return ans;


  // Recursively finds the quotient; assumes dividend and divisor are non-negative
  function divideHelper(dividendAbs, divisorAbs) {
    if (divisorAbs > dividendAbs) {
      return 0;
    }

    let sum = divisorAbs;
    let multiple = 1;

    // Double the stride each iteration
    while (sum + sum < dividendAbs) {
      sum += sum;
      multiple += multiple;
    }

    return multiple + divideHelper(dividendAbs - sum, divisorAbs);
  }
};
