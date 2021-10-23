const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let left = 0, right = nums.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right -= 1;
        }
    }

    return nums[left];
};

assert.equal(findMin([1,3,5]), 1);
assert.equal(findMin([2,2,2,0,1]), 0);
