const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    let maxIdx = n - 1;
    let currIdx = maxIdx - 1;

    while (currIdx >= 0) {
        if (nums[currIdx] < nums[maxIdx]) {
            break;
        }

        maxIdx = currIdx;
        currIdx -= 1;
    }

    // Currently have the greatest permutation, sort nums in ascending order
    if (currIdx < 0) {
        nums.sort((a, b) => a - b);
        return;
    }

    // Otherwise, get the next permutation
    const sortedArr = nums.slice(currIdx);
    sortedArr.sort((a, b) => a - b);

    let original = nums[currIdx];
    let sortedIdx = maxIdx;

    for (let i = 0; i < sortedArr.length; i += 1) {
        nums[sortedIdx] = sortedArr[i];
        sortedIdx += 1;

        if (sortedArr[i] === original && sortedArr[i + 1] !== sortedArr[i]) {
            nums[currIdx] = sortedArr[i + 1];
            i += 1;
        }
    }
};

const arr1 = [1,2,3];
nextPermutation(arr1);
assert.deepEqual(arr1, [1,3,2]);

const arr2 = [3,2,1];
nextPermutation(arr2);
assert.deepEqual(arr2, [1,2,3]);

const arr3 = [1,3,4,2];
nextPermutation(arr3);
assert.deepEqual(arr3, [1,4,2,3]);

const arr4 = [1,3,2];
nextPermutation(arr4);
assert.deepEqual(arr4, [2,1,3]);

const arr5 = [1,5,1];
nextPermutation(arr5);
assert.deepEqual(arr5, [5,1,1]);
