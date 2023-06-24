/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const runningSums = [];
  let currSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    currSum += nums[i];
    runningSums.push(currSum);
  }

  return runningSums;
};
