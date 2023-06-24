/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const subSeqByIdx = [];
  let ans = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const numSeqMap = new Map();
    const curr = nums[i];

    for (let j = 0; j < i; j += 1) {
      const diff = curr - nums[j];
      const prevSum = subSeqByIdx[j].has(diff) ? subSeqByIdx[j].get(diff) : 0;
      const currSum = numSeqMap.has(diff) ? numSeqMap.get(diff) : 0;
      numSeqMap.set(diff, currSum + prevSum + 1);
      ans += prevSum;
    }

    subSeqByIdx.push(numSeqMap);
  }

  return ans;
};
