/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const numSet1 = new Set(nums1);
  const numSet2 = new Set();
  const ans = [];

  for (const num of nums2) {
    if (numSet1.has(num) && !numSet2.has(num)) {
      ans.push(num);
      numSet2.add(num);
    }
  }

  return ans;
};
