/**
 * First solution: Map
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const threshold = Math.floor(nums.length / 2);
    const numMap = new Map();

    for (const num of nums) {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }

        if (numMap.get(num) > threshold) {
            return num;
        }
    }

    // Should never happen
    return null;
};

/**
 * First solution: Boyer-Moore Voting Algorithm
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
