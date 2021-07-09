/**
 * First solution: Dynamic programming
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = _.fill(Array(nums.length), 1);
    let maxLen = 1;

    for (let i = 1; i < nums.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
};

/**
 * Second solution: Building a sequence with binary search
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const seq = [ nums[0] ];

    for (let i = 1; i < nums.length; i += 1) {

        // Greater than the max in the sequence, add to the sequence
        if (nums[i] > seq[seq.length - 1]) {
            seq.push(nums[i]);
            continue;
        }

        // Otherwise, replace the smallest number in the sequence that is >= nums[i]
        let lo = 0, hi = seq.length;

        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (seq[mid] >= nums[i]) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }

        seq[lo] = nums[i];
    }

    return seq.length;
};
