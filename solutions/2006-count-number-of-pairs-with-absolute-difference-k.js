/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let ans = 0;

    for (let i = 0; i < nums.length - 1; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                ans += 1;
            }
        }
    }

    return ans;
};
