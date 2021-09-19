/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    const maxFromBeginning = [];
    const minFromEnd = Array(nums.length);

    for (let i = 0; i < nums.length; i += 1) {
        if (maxFromBeginning.length) {
            maxFromBeginning.push(Math.max(nums[i], maxFromBeginning[i - 1]));
        } else {
            maxFromBeginning.push(nums[i]);
        }
    }

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        if (i < nums.length - 1) {
            minFromEnd[i] = Math.min(nums[i], minFromEnd[i + 1]);
        } else {
            minFromEnd[i] = nums[i];
        }
    }

    let beauty = 0;
    for (let i = 1; i < nums.length - 1; i += 1) {
        if (nums[i] > maxFromBeginning[i - 1] && nums[i] < minFromEnd[i + 1]) {
            beauty += 2;
        } else if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
            beauty += 1;
        }
    }

    return beauty;
};
