/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  const ops = {
    '++X': 1,
    'X++': 1,
    '--X': -1,
    'X--': -1,
  };

  let ans = 0;

  for (const op of operations) {
    if (ops[op]) {
      ans += ops[op];
    }
  }

  return ans;
};
