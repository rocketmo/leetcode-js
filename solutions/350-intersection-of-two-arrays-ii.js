/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numCount1 = countNums(nums1);
    const numCount2 = countNums(nums2);
    const ans = [];

    for (const num of numCount1.keys()) {
        if (numCount2.has(num)) {
            const numIntersect = Math.min(numCount1.get(num), numCount2.get(num));
            for (let i = 0; i < numIntersect; i += 1) {
                ans.push(num);
            }
        }
    }

    return ans;

    function countNums(numArr) {
        const numCount = new Map();

        for (const num of numArr) {
            if (numCount.has(num)) {
                numCount.set(num, numCount.get(num) + 1);
            } else {
                numCount.set(num, 1);
            }
        }

        return numCount;
    }
};
