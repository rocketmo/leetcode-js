/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  // Using dynamic programming approach, store length of longest suffix length for each (i, j),
  // where i = [0, nums1.length - 1], j = [0, nums2.length - 1]
  const ans = [];
  let maxLen = 0;

  for (let i = 0; i < nums1.length; i += 1) {
    ans.push([]);

    for (let j = 0; j < nums2.length; j += 1) {
      const prevSuffixLen = (i > 0 && j > 0) ? ans[i - 1][j - 1] : 0;
      ans[i][j] = nums1[i] === nums2[j] ? prevSuffixLen + 1 : 0;
      maxLen = Math.max(maxLen, ans[i][j]);
    }
  }

  return maxLen;
};
