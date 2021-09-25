const assert = require("assert");
const _ = require("lodash");

/**
 * First solution: O(n) extra space
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefixes = _.fill(Array(n), 1);
    const suffixes = _.fill(Array(n), 1);

    for (let i = 0; i < n; i += 1) {
        const prevPrefix = i > 0 ? prefixes[i - 1] : 1;
        const prevSuffix = i > 0 ? suffixes[n - i] : 1;

        prefixes[i] = prevPrefix * nums[i];
        suffixes[n - i - 1] = prevSuffix * nums[n - i - 1];
    }

    return nums.map((val, idx) => {
        const prefix = idx > 0 ? prefixes[idx - 1] : 1;
        const suffix = idx < n - 1 ? suffixes[idx + 1] : 1;

        return prefix * suffix;
    });
};

/**
 * Second solution: O(1) extra space
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = _.fill(Array(n), 1);

    for (let i = 0; i < n; i += 1) {
        if (i > 0) {
            ans[i] = ans[i - 1] * nums[i - 1];
        }
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i -= 1) {
        if (i < n - 1) {
            ans[i] *= suffix;
        }

        suffix *= nums[i];
    }

    return ans;
};

assert.deepEqual(productExceptSelf([1,2,3,4]), [24,12,8,6]);
assert.deepEqual(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0]);
