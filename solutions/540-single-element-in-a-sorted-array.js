const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = (nums.length + 1) / 2;

  while (left < right) {
    let mid = Math.floor((left + right) / 2) * 2;

    // Reached the end of nums
    if (mid + 1 === nums.length) {
      if ((left * 2) < mid) {
        mid = left * 2;
      } else {
        break;
      }
    }

    if (nums[mid] === nums[mid + 1]) {
      left = (mid / 2) + 1;
    } else {
      right = (mid / 2);
    }
  }

  return nums[left * 2];
};

assert.equal(singleNonDuplicate([1,1,2,3,3,4,4,8,8]), 2);
assert.equal(singleNonDuplicate([3,3,7,7,10,11,11]), 10);
assert.equal(singleNonDuplicate([1,2,2]), 1);
assert.equal(singleNonDuplicate([1,1,2]), 2);
assert.equal(singleNonDuplicate([1,1,2,2,3]), 3);
assert.equal(singleNonDuplicate([1,1,2,2,4,4,5,5,9]), 9);
