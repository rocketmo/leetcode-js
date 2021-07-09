/**
 * First solution: Merge the two arrays into one, sort the resultant array and return the median
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

/**
 * Improved solution: Use binary search. Find the split points in each of the arrays.
 * Median can then be derived from the values at the split point.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const shortArr = nums1.length > nums2.length ? nums2 : nums1;
    const longArr = nums1.length > nums2.length ? nums1 : nums2;

    // Shorter array may have zero elements; in that case, take the median from the longer array
    if (shortArr.length === 0) {
        if (longArr.length % 2 === 1) {
            return longArr[(longArr.length - 1) / 2];
        }

        const median1 = longArr[longArr.length / 2];
        const median2 = longArr[(longArr.length / 2) - 1];

        return (median1 + median2) / 2;
    }

    // Make splits in the arrays until the median is found
    let iMin = 0; // Min. index of shortArr
    let iMax = shortArr.length; // Max. index of shortArr
    let halfIndex = Math.floor((shortArr.length + longArr.length + 1) / 2);

    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2); // Current split index of shortArr
        let j = halfIndex - i; // Current split index of longArr

        // i is too small; increase it
        if (i < shortArr.length && longArr[j - 1] > shortArr[i]) {
            iMin = i + 1;
        }

        // i is too large; decrease it
        else if (i > 0 && shortArr[i - 1] > longArr[j]) {
            iMax = i - 1;
        }

        // Found correct i; return the median
        else {
            let maxOfLeft = 0;
            if (i === 0) { maxOfLeft = longArr[j - 1]; }
            else if (j === 0) { maxOfLeft = shortArr[i - 1]; }
            else { maxOfLeft = Math.max(shortArr[i - 1], longArr[j - 1]); }

            // Odd number of integers
            if ((shortArr.length + longArr.length) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight = 0;
            if (i === shortArr.length) { minOfRight = longArr[j]; }
            else if (j === longArr.length) { minOfRight = shortArr[i]; }
            else { minOfRight = Math.min(shortArr[i], longArr[j]); }

            // Even number of integers
            return (maxOfLeft + minOfRight) / 2;
        }
    }

    // Should not reach here
    return null;
};
