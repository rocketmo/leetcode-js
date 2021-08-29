/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => {
        if (a.length === b.length) {
            return b > a ? 1 : -1;
        }

        return b.length > a.length ? 1 : -1;
    });

    return nums[k - 1];
};
