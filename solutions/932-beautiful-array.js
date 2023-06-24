/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
  const memo = new Map(); // Memoize results
  return helper(n);

  function helper(size) {

    // Result has already been computed
    if (memo.has(size)) {
      return memo.get(size);
    }

    const ans = [];
    if (size === 1) {
      ans.push(1);
    } else {
      // Split left side into odd numbers, right side into even numbers. Use divide and
      // conquer approach to get beautiful arrays for each side, then map those arrays to odd
      // and even numbers. Notice that beautiful arrays can always map to the odd or even
      // side of another beautiful array that is double in size.
      const odds = helper(Math.floor((size + 1) / 2));
      const evens = helper(Math.floor(size / 2));

      for (const num of odds) {
        ans.push((2 * num) - 1);
      }

      for (const num of evens) {
        ans.push(2 * num);
      }
    }

    memo.set(size, ans);
    return ans;
  }
};
