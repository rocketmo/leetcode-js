/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ans = new Set();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];

        if (i !== num - 1) {
            if (nums[num - 1] === num) {
                ans.add(num);
            } else {
                const tmp = nums[num - 1];
                nums[num - 1] = num;
                nums[i] = tmp;
                i -= 1;
            }
        }
    }

    return Array.from(ans.values());
};
