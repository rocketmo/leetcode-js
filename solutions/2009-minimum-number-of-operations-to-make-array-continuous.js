/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  let bestRange = 0;
  let currMin = nums[0];
  let currMinIdx = 0;
  let currRangeSet = new Set([ nums[0] ]);

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    if (currRangeSet.has(num)) {
      continue;
    }

    currRangeSet.add(num);

    if (num < currMin + len) {
      bestRange = Math.max(bestRange, currRangeSet.size - 1);
    } else {
      while (num >= currMin + len) {
        if (currRangeSet.has(currMin)) {
          currRangeSet.delete(currMin);
        }

        currMinIdx += 1;
        currMin = nums[currMinIdx];
      }
    }
  }

  return (len - 1 - bestRange);
};
