/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  const divSet = new Set();
  divSet.add(1);
  divSet.add(n);

  for (let i = 2; i <= Math.floor(n / 2); i += 1) {
    const x = Math.floor(n / i);

    if (i * x === n) {
      divSet.add(i);
      divSet.add(x);
    }

    if (divSet.size > 3) {
      return false;
    }
  }

  return divSet.size === 3;
};
