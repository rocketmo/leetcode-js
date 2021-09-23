const assert = require("assert");

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            break;
        } else if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    // Note: returned indexes are 1-indexed
    return [ left + 1, right + 1 ];
};

assert.deepEqual(twoSum([2,7,11,15], 9), [1,2]);
assert.deepEqual(twoSum([2,3,4], 6), [1,3]);
assert.deepEqual(twoSum([-1,0], -1), [1,2]);
