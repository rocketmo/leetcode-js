const assert = require("assert");
const { sum } = require("lodash");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const numsWithIdx = nums.map((num, idx) => {
        return { idx, val: num };
    });

    numsWithIdx.sort((a, b) => b.val - a.val);

    const topNums = numsWithIdx.slice(0, k);
    topNums.sort((a, b) => a.idx - b.idx);
    return topNums.map(numWithIdx => numWithIdx.val);
};

assert(sum(maxSubsequence([2,1,3,3], 2)), 6);
assert(sum(maxSubsequence([-1,-2,3,4], 3)), 6);
assert(sum(maxSubsequence([3,4,3,3], 2)), 7);
