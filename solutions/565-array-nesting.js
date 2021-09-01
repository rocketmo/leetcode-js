/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let ans = 0;
    const foundNumSet = new Set();

    for (let i = 0; i < nums.length; i += 1) {
        if (foundNumSet.has(nums[i])) {
            continue;
        }

        const numSet = new Set();
        let currIdx = i;

        while (true) {
            if (numSet.has(nums[currIdx])) {
                break;
            }

            foundNumSet.add(nums[currIdx]);
            numSet.add(nums[currIdx]);
            currIdx = nums[currIdx];
        }

        ans = Math.max(ans, numSet.size);

        if (ans === nums.length) {
            break;
        }
    }

    return ans;
};
