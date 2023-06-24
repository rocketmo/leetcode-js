/**
 * First solution: Uses a set, O(n) space
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  for (const val of numSet.values()) {
    return val;
  }
};

/**
 * Second solution: Bit manipulation, constant space
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    nums[0] ^= nums[i];
  }

  return nums[0];
};
