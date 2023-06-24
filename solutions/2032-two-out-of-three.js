/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const numSet1 = new Set(nums1);
  const numSet2 = new Set(nums2);
  const numSet3 = new Set(nums3);

  const ans = new Set();
  addToAns(numSet1, numSet2);
  addToAns(numSet1, numSet3);
  addToAns(numSet2, numSet3);

  return Array.from(ans.values());

  function addToAns(set1, set2) {
    for (const num of set1.values()) {
      if (set2.has(num)) {
        ans.add(num);
      }
    }
  }
};
