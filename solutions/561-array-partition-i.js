/**
 * Solution: Sort the array, then get the sum of every other number (i.e. numbers in the
 * 0th, 2nd, 4th, etc. index)
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
};
