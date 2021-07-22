/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    let len = 1;
    let maxOfGroup = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length - 1; i += 1) {
        maxSoFar = Math.max(maxSoFar, nums[i]);

        if (nums[i] < maxOfGroup) {
            len = i + 1;
            maxOfGroup = maxSoFar;
        }
    }

    return len;
};
