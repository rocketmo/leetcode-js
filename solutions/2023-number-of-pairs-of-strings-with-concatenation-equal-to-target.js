/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  let ans = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i === j || nums[i].length + nums[j].length !== target.length) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        ans += 1;
      }
    }
  }

  return ans;
};
