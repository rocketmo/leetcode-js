/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const numMap = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    numMap.set(nums[i], i);
  }

  const ans = [];
  for (let i = 0; i < nums.length - 3; i += 1) {
    if (nums[i] === nums[i - 1]) { continue; }

    for (let j = i + 1; j < nums.length - 2; j += 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      for (let k = j + 1; k < nums.length - 1; k += 1) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }

        const quadTarget = target - nums[i] - nums[j] - nums[k];
        if (numMap.has(quadTarget) && numMap.get(quadTarget) > k) {
          ans.push([ nums[i], nums[j], nums[k], quadTarget ]);
        }
      }
    }
  }

  return ans;
};
