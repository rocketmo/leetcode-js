/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const m = grid.length;
    const n = grid[0].length;

    // Extract all numbers from the grid
    const nums = [];
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            nums.push(grid[i][j]);
        }
    }

    // Check if it's impossible to have all elements equal
    for (let i = 1; i < nums.length; i += 1) {
        if ((nums[i] - nums[0]) % x !== 0) {
            return -1;
        }
    }

    // Find the median
    nums.sort((a, b) => a - b);
    const midIdx = Math.floor(nums.length / 2);

    // Odd number of numbers
    if (nums.length % 2 === 1) {
        const median = nums[midIdx];
        let ans = 0;

        for (const num of nums) {
            const diff = Math.abs(median - num);
            ans += (diff / x);
        }

        return ans;
    }

    // Even number of numbers
    const highMedian = nums[midIdx];
    const lowMedian = nums[midIdx - 1];

    let highAns = 0;
    let lowAns = 0;

    for (const num of nums) {
        const highDiff = Math.abs(highMedian - num);
        const lowDiff = Math.abs(lowMedian - num);
        highAns += (highDiff / x);
        lowAns += (lowDiff / x);
    }

    return Math.min(highAns, lowAns);
};
