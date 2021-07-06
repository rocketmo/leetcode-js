/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);

    if (merged.length % 2 === 1) {
        return merged[(merged.length - 1) / 2];
    }

    const median1 = merged[merged.length / 2];
    const median2 = merged[(merged.length / 2) - 1];

    return (median1 + median2) / 2;
};
