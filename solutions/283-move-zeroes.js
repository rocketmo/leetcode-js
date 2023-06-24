const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      idx += 1;
    }
  }

  for (let i = idx; i < nums.length; i += 1) {
    nums[i] = 0;
  }
};

const arr1 = [0,1,0,3,12];
moveZeroes(arr1);
assert.deepEqual(arr1, [1,3,12,0,0]);

const arr2 = [0];
moveZeroes(arr2);
assert.deepEqual(arr2, [0]);
