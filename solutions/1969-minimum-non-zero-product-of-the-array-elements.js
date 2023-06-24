/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function(p) {
  if (p === 1) {
    return 1;
  }

  let ans = (2n ** BigInt(p)) - 1n;
  const multiplier = ans - 1n;
  const times = ans / 2n;

  ans = modulo(modulo(ans) * expn(multiplier, times));

  return Number(ans);


  function expn(n, k) {
    if (k === 0n) {
      return 1n;
    } else if (k === 1n) {
      return modulo(n);
    } else if (k % 2n === 0) {
      const tmp = expn(n, k / 2n);
      return modulo(tmp * tmp);
    } else {
      let tmp = expn(n, k / 2n);
      tmp = modulo(tmp * tmp);
      return modulo(tmp * modulo(n));
    }
  }

  function modulo(num) {
    return num % BigInt(1e9 + 7);
  }
};
