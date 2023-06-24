/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function(nums, k) {
  const diffMap = new Map();
  let left = 0;
  let right = nums.reduce((acc, val) => acc + val, 0);
  let ans = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    left += nums[i];
    right -= nums[i];

    const diff = left - right;
    ans += (diff === 0) ? 1 : 0;

    const diffs = diffMap.get(diff) ?? [];
    diffs.push(i);
    diffMap.set(diff, diffs);
  }

  for (let i = 0; i < nums.length; i += 1) {
    const kDiff = k - nums[i];
    let kAns = 0;

    if (diffMap.has(kDiff)) {
      const arr = diffMap.get(kDiff);
      let left = findPivotsToLeft(arr, i);
      kAns += left;
    }

    if (diffMap.has(-kDiff)) {
      const arr = diffMap.get(-kDiff);
      let left = findPivotsToLeft(arr, i);
      kAns += (arr.length - left);
    }

    ans = Math.max(kAns, ans);
  }

  return ans;

  function findPivotsToLeft(arr, idx) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < idx) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
