const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
};

assert.equal(search([-1,0,3,5,9,12], 9), 4);
assert.equal(search([-1,0,3,5,9,12], 2), -1);
