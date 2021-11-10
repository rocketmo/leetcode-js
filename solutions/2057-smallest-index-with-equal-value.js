const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    for (let i = 0; i < nums.length; i += 1) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }

    return -1;
};

assert.equal(smallestEqual([0,1,2]), 0);
assert.equal(smallestEqual([4,3,2,1]), 2);
assert.equal(smallestEqual([1,2,3,4,5,6,7,8,9,0]), -1);
assert.equal(smallestEqual([2,1,3,5,2]), 1);
