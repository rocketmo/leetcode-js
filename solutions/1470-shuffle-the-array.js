/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const arr = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(nums[i]);
    arr.push(nums[n + i]);
  }

  return arr;
};
