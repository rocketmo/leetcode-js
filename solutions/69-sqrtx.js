/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0;
  let right = x;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid === left) {
      if (right * right <= x) {
        left = right;
      } else {
        right = left;
      }
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
};
