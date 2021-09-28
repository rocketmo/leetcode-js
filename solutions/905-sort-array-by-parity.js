/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let frontIdx = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 === 0) {
            let tmp = nums[frontIdx];
            nums[frontIdx] = nums[i];
            nums[i] = tmp;
            frontIdx += 1;
        }
    }

    return nums;
};
