/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let replaceIndex = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      count += 1;
      continue;
    }

    nums[replaceIndex] = nums[i];
    replaceIndex += 1;
  }

  return nums.length - count;
};
