/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let minDiff = Number.MAX_SAFE_INTEGER;
    const space = k - 1;

    for (let i = 0; i < nums.length - space; i += 1) {
        minDiff = Math.min(minDiff, nums[i + space] - nums[i]);
    }

    return minDiff;
};
