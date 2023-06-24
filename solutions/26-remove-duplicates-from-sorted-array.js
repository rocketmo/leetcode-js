/**
 * First solution: Splicing array to remove duplicates
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

/**
 * Second solution: Ignore deletion, just move non-duplicate elements into the correct position
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let dupeCount = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      dupeCount += 1;
    } else if (dupeCount > 0) {
      nums[i - dupeCount] = nums[i];
    }
  }

  return nums.length - dupeCount;
};
