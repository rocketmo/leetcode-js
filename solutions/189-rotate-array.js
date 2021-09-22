const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    let idx = 0;
    k %= n;

    while (k > 0) {
        for (let i = 0; i < k; i += 1) {
            const tmp = nums[idx + i];
            const swapIdx = idx + n - k + i;
            nums[idx + i] = nums[swapIdx];
            nums[swapIdx] = tmp;
        }

        n -= k;
        idx += k;
        k %= n;
    }
};

const arr1 = [1,2,3,4,5,6,7];
rotate(arr1, 3);
assert.deepEqual(arr1, [5,6,7,1,2,3,4]);

const arr2 = [-1,-100,3,99];
rotate(arr2, 2);
assert.deepEqual(arr2, [3,99,-1,-100]);

const arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
rotate(arr3, 38);
assert.deepEqual(arr3, [17,18,19,20,21,22,23,24,25,26,27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
