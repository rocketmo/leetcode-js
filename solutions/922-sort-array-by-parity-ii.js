/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let oddIdx = 1;

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 1) {
      while (oddIdx < nums.length) {
        if (nums[oddIdx] % 2 === 0) {
          const tmp = nums[i];
          nums[i] = nums[oddIdx];
          nums[oddIdx] = tmp;

          oddIdx += 2;
          break;
        }

        oddIdx += 2;
      }
    }
  }

  return nums;
};
