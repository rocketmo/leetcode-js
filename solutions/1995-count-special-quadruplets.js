/**
 * Brute force solution
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length - 3; i += 1) {
        for (let j = i + 1; j < nums.length - 2; j += 1) {
            for (let k = j + 1; k < nums.length - 1; k += 1) {
                for (let m = k + 1; m < nums.length; m += 1) {
                    if (nums[i] + nums[j] + nums[k] === nums[m]) {
                        ans += 1;
                    }
                }
            }
        }
    }

    return ans;
};
