const _ = require('lodash');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const ans = _.fill(Array(nums.length), 0);

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] > nums[j]) {
        ans[i] += 1;
      } else if (nums[j] > nums[i]) {
        ans[j] += 1;
      }
    }
  }

  return ans;
};
