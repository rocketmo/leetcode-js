/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    let ans = 0;
    const areaMap = new Map(); // Maps group ID to area
    const areaGrid = []; // Assigns a group ID to each island in grid
    let currGroupId = 1; // Used to assign the next island a groupd ID

    // Populate areaGrid
    for (let i = 0; i < n; i += 1) {
        areaGrid.push(_.fill(Array(n), null));
    }

    // Search for all 0s in grid and the area if we changed that 0 to 1
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (grid[i][j] === 1) {
                continue;
            }

            ans = Math.max(ans, findArea(i, j));
        }
    }

    // No 0s, return the area of the entire grid
    if (ans === 0) {
        return n * n;
    }

    return ans;


    // Finds the area if we change the 0 at the given coordinate to a 1
    function findArea(x, y) {
        const groupIds = new Set();

        // Above, below, left and right
        const opts = [
            { cond: x > 0, row: x - 1, col: y },
            { cond: x < n - 1, row: x + 1, col: y },
            { cond: y > 0, row: x, col: y - 1 },
            { cond: y < n - 1, row: x, col: y + 1 },
        ];

        for (const opt of opts) {
            if (opt.cond) { // Coordinate must be within range
                const groupId = areaGrid[opt.row][opt.col];

                if (groupId) { // Group ID already assigned
                    groupIds.add(groupId);
                } else if(grid[opt.row][opt.col] === 1) { // Coordinate belongs to an island
                    const area = calcArea(opt.row, opt.col, currGroupId);
                    areaMap.set(currGroupId, area);
                    groupIds.add(currGroupId);
                    currGroupId += 1;
                }
            }
        }

        // Get total area
        let area = 1;
        for (const groupId of groupIds.values()) {
            area += areaMap.get(groupId);
        }

        return area;
    }

    // Calculates total area of the island at the given coordinate in depth-first search approach
    function calcArea(x, y, groupId) {
        // Coordinate out of range, is a 0, or was already assigned a group ID
        if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 0 || areaGrid[x][y]) {
            return 0;
        }

        // Assign the group ID
        areaGrid[x][y] = groupId;

        // Get the area from the four adjacent cells
        return 1 + calcArea(x - 1, y, groupId) + calcArea(x + 1, y, groupId) +
            calcArea(x, y - 1, groupId) + calcArea(x, y + 1, groupId);
    }
};
