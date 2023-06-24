/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const arr = [];

  for (let i = 0; i < nums.length / 2; i += 1) {
    const freq = nums[2 * i];
    const val = nums[(2 * i) + 1];

    for (let j = 0; j < freq; j += 1) {
      arr.push(val);
    }
  }

  return arr;
};
