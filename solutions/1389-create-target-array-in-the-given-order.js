/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    const ans = [];

    for (let i = 0; i < nums.length; i += 1) {
        ans.splice(index[i], 0, nums[i]);
    }

    return ans;
};
