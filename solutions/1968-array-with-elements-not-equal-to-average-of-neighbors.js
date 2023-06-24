/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length - 1; i += 1) {
    const avg = (nums[i - 1] + nums[i + 1]) / 2;
    if (avg === nums[i]) {
      const tmp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = tmp;
      i = Math.max(0, i - 2);
    }
  }

  return nums;
};
