const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }

        numSet.add(num);
    }

    return false;
};

assert(containsDuplicate([1,2,3,1]));
assert(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
assert.equal(containsDuplicate([1,2,3,4]), false);
