const _ = require("lodash");

/**
 * First solution: Brute force
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const islandMap = [];
    for (let i = 0; i < grid.length; i += 1) {
        islandMap.push(_.fill(Array(grid[i].length), null));
    }

    let currIsland = 1;
    const closedIslandMap = new Map();

    for (let i = 0; i < grid.length; i += 1) {
        for (let j  = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === 1) { continue; }

            const aboveIsland = getIsland(i - 1, j);
            const leftIsland = getIsland(i, j - 1);

            if (!aboveIsland && !leftIsland) { // new island
                islandMap[i][j] = currIsland;
                currIsland += 1;
                closedIslandMap.set(islandMap[i][j], !isOnEdge(i, j));
            }

            if (aboveIsland && !leftIsland) { // connected island above
                islandMap[i][j] = aboveIsland;
                closedIslandMap.set(aboveIsland,
                    closedIslandMap.get(aboveIsland) && !isOnEdge(i, j));
            }

            if (!aboveIsland && leftIsland) { // connected island to the left
                islandMap[i][j] = leftIsland;
                closedIslandMap.set(leftIsland, closedIslandMap.get(leftIsland) && !isOnEdge(i, j));
            }

            if (aboveIsland && leftIsland) { // connected island above and to the left

                // connected to same island
                if (aboveIsland === leftIsland) {
                    closedIslandMap.set(aboveIsland,
                        closedIslandMap.get(aboveIsland) && !isOnEdge(i, j));
                }

                // connected to different islands
                else {
                    closedIslandMap.set(aboveIsland, closedIslandMap.get(aboveIsland)
                        && closedIslandMap.get(leftIsland) && !isOnEdge(i, j));
                    closedIslandMap.set(leftIsland, aboveIsland);
                }


                islandMap[i][j] = aboveIsland;
            }
        }
    }

    return Array.from(closedIslandMap.values()).reduce((acc, val) => {
        if (typeof val === "number") { return acc; }
        return (val ? acc + 1 : acc);
    }, 0);


    function isOnEdge(i, j) {
        return (i === 0) || (i === grid.length - 1) || (j === 0) || (j === grid[0].length - 1);
    }

    function getIsland(i, j) {
        if (i < 0 || j < 0) { return null; }

        let island = islandMap[i][j];

        while (island && typeof closedIslandMap.get(island) === "number") {
            island = closedIslandMap.get(island);
        }

        return island;
    }
};

/**
 * Second solution: Depth first search
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j] === 0) {
                count += dfs(i, j);
            }
        }
    }

    return count;


    // Depth first search to determine if grid block surrounded by water
    function dfs(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return 0;
        }

        if (grid[i][j] > 0) {
            return 1;
        }


        grid[i][j] = 2;
        return dfs(i + 1, j) * dfs(i - 1, j) * dfs(i, j + 1) * dfs(i, j - 1);
    }
};
