/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      let sum = (i ** 2) + (j ** 2);
      let root = Math.floor(Math.sqrt(sum));

      if (root <= n) {
        count += root ** 2 === sum ? 1 : 0;
      } else {
        break;
      }
    }
  }

  return count;
};
