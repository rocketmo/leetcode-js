const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    }

    // Which array does the pivot and target belong to?
    const isPivotInFront = existsInFront(left, num);
    const isTargetInFront = existsInFront(left, target);

    // Pivot and target are in the same sorted array
    if (isPivotInFront === isTargetInFront) {
      if (num < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // Pivot and target are in different sorted arrays
    else {

      // Pivot in front, target in the back
      if (isPivotInFront) {
        left = mid + 1;
      }

      // Target in first, pivot in the back
      else {
        right = mid;
      }
    }
  }

  return -1;

  function existsInFront(idx, element) {
    return nums[idx] <= element;
  }
};

assert.equal(search([4,5,6,7,0,1,2], 0), 4);
assert.equal(search([4,5,6,7,0,1,2], 3), -1);
assert.equal(search([1], 0), -1);
assert.equal(search([1], 1), 0);
