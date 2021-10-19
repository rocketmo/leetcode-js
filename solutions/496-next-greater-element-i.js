const assert = require("assert");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    const startIdx = new Map();
    for (let i = 0; i < nums2.length; i += 1) {
        startIdx.set(nums2[i], i);
    }

    for (const num1 of nums1) {
        let nextEle = -1;

        for (let i = startIdx.get(num1) + 1; i < nums2.length; i += 1) {
            const num2 = nums2[i];
            if (num2 > num1) {
                nextEle = num2;
                break;
            }
        }

        ans.push(nextEle);
    }

    return ans;
};

assert.deepEqual(nextGreaterElement([4,1,2], [1,3,4,2]), [-1,3,-1]);
assert.deepEqual(nextGreaterElement([2,4], [1,2,3,4]), [3,-1]);
