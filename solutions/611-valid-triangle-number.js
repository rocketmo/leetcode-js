/**
 * First solution: Binary search
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (nums[i] === 0) { continue; }

        let lastLo = i; // Keeps the answer from the previous binary search
        for (let j = i + 1; j < nums.length - 1; j += 1) {
            let lo = Math.max(j + 1, lastLo), hi = nums.length;

            while (lo < hi) {
                let mid = Math.floor((lo + hi) / 2);
                if (nums[mid] >= nums[i] + nums[j]) {
                    hi = mid;
                } else {
                    lo = mid + 1;
                }
            }

            count += (lo - j - 1);
            lastLo = lo;
        }
    }

    return count;
};
