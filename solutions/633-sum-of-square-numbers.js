/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  const sqrSet = new Set();
  let i = 0;

  while (i * i <= c) {
    const sqr = i * i;
    const diff = c - sqr;

    if (sqrSet.has(diff) || sqr === diff) {
      return true;
    }

    sqrSet.add(sqr);
    i += 1;
  }

  return false;
};
