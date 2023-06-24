/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = n.toString().split('').map(num => Number(num));
  return digits.reduce((acc, val) => acc * val, 1) - digits.reduce((acc, val) => acc + val, 0);
};
