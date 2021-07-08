/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numSet = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];

        if (numSet.has(diff)) {
            return [numSet.get(diff), i];
        }

        numSet.set(nums[i], i);
    }

    return [-1, -1];
};
