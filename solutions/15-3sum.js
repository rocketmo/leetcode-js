/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const ans = [];
  const countMap = new Map(); // Counts how many times a number appears in `nums` array

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let i = 0; i < nums.length - 2; i += 1) {

    // Impossible to have a triplet with all positive integers
    if (nums[i] > 0) {
      break;
    }

    // Skip duplicate
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 1; j += 1) {

      // Skip duplicate
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Calculate the required integer to complete the triplet; must be greater than nums[j]
      const reqVal = 0 - nums[i] - nums[j];
      if (reqVal < nums[j]) {
        break;
      }

      // Check if we have the correct number of integers that match the required value
      // Note nums[i] and nums[j] are counted
      let reqCount = 1;
      reqCount += (nums[i] === reqVal) ? 1 : 0;
      reqCount += (nums[j] === reqVal) ? 1 : 0;

      if (countMap.get(reqVal) >= reqCount) {
        ans.push([nums[i], nums[j], reqVal]);
      }
    }
  }

  return ans;
};
