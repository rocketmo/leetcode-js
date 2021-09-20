/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let min = null;
    let min2 = null;
    let max = null;
    let max2 = null;

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];

        if (min === null || num <= min) {
            min2 = min;
            min = num;
        } else if (min2 === null || num < min2) {
            min2 = num;
        }

        if (max === null || num >= max) {
            max2 = max;
            max = num;
        } else if (max2 === null || num > max2) {
            max2 = num;
        }
    }

    return (max * max2) - (min * min2);
};
