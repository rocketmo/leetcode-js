/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map((num, i) => {
        return nums[nums[i]];
    });
};
