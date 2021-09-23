const assert = require("assert");

/**
 * First solution: Pivot back to original array, then conduct binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let pivot = 0;
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i + 1] < nums[i]) {
            pivot = i + 1;
        }
    }

    const pivotArr = nums.slice(pivot);
    pivotArr.splice(pivotArr.length, 0, ...nums.slice(0, pivot));

    let left = 0;
    let right = pivotArr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const num = pivotArr[mid];

        if (num === target) {
            return true;
        } else if (num < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return false;
};

/**
 * Second solution: Binary search only
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
            return true;
        }

        if (!canReduceSearchSpace(left, num)) {
            left += 1;
            continue;
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

    return false;

    function existsInFront(idx, element) {
        return nums[idx] <= element;
    }

    function canReduceSearchSpace(idx, element) {
        return nums[idx] !== element;
    }
};

assert(search([3,4,4,4,4,5,5,6,7,8,8,1,1,2,2], 7));
assert(search([8,1,2,3,3,4,5,6,7,7,7], 8));
assert(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2));
assert.equal(search([8,1,2,3,3,4,5,6,7,7,7], 10), false);
assert.equal(search([8,1,2,3,3,4,5,6,7,7,7], 0), false);
