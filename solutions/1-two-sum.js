const assert = require("assert");

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

const arr1 = [2, 7, 11, 15];
const twoSumAns1 = twoSum(arr1, 9);
assert(twoSumAns1.length === 2);
assert(twoSumAns1[0] >= 0 && twoSumAns1[0] < arr1.length);
assert(twoSumAns1[1] >= 0 && twoSumAns1[1] < arr1.length);
assert.equal(arr1[twoSumAns1[0]] + arr1[twoSumAns1[1]], 9);
