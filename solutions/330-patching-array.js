/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let smallestMissing = 1;
    let addedNums = 0;
    let i = 0;

    while (smallestMissing <= n) {
        if (i < nums.length && nums[i] <= smallestMissing) {
            smallestMissing += nums[i];
            i += 1;
        } else {
            smallestMissing += smallestMissing;
            addedNums += 1;
        }
    }

    return addedNums;
};
