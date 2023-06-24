const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let ans = 0;
  let currAns = 0;

  for (const num of nums) {
    if (num === 1) {
      currAns += 1;
      ans = Math.max(ans, currAns);
    } else {
      currAns = 0;
    }
  }

  return ans;
};

assert.equal(findMaxConsecutiveOnes([1,1,0,1,1,1]), 3);
assert.equal(findMaxConsecutiveOnes([1,0,1,1,0,1]), 2);
