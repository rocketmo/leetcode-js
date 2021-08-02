/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;

    // Insert integers into nums1 in reverse order
    for (let i = m + n - 1; i >= 0; i -= 1) {
        if (index2 < 0) {
            break;
        } else if (index1 < 0) {
            nums1[i] = nums2[index2];
            index2 -= 1;
        } else if (nums1[index1] > nums2[index2]) {
            nums1[i] = nums1[index1];
            index1 -= 1;
        } else {
            nums1[i] = nums2[index2];
            index2 -= 1;
        }
    }
};
