/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    // Get the max height in each row
    const rowMax = grid.map(row => {
        return Math.max(...row);
    });

    // Get the max height in each column
    const colMax = grid[0].map((val, i) => {
        let max = 0;
        for (let row = 0; row < grid.length; row += 1) {
            max = Math.max(grid[row][i], max);
        }

        return max;
    });

    // Sum the height difference between each house and the shortest house between the two
    // tallest houses in the same row and column
    let ans = 0;
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid.length; j += 1) {
            const max = Math.min(rowMax[i], colMax[j]);
            ans += (max - grid[i][j]);
        }
    }

    return ans;
};
