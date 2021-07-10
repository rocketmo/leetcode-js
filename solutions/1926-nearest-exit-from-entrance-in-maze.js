/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let queue = [];
    let m = maze.length;
    let coordsSeen = new Set();

    pushToQueue(entrance[0], entrance[1], 0);

    while (queue.length) {
        const { x, y, steps} = queue.shift();

        if (x + 1 < m && maze[x + 1][y] === ".") {
            if (isAtBorder(x + 1, y)) {
                return steps + 1;
            } else {
                pushToQueue(x + 1, y, steps + 1);
            }
        }

        if (x > 0 && maze[x - 1][y] === ".") {
            if (isAtBorder(x - 1, y)) {
                return steps + 1;
            } else {
                pushToQueue(x - 1, y, steps + 1);
            }
        }

        if (maze[x][y + 1] === ".") {
            if (isAtBorder(x, y + 1)) {
                return steps + 1;
            } else {
                pushToQueue(x, y + 1, steps + 1);
            }
        }

        if (maze[x][y - 1] === ".") {
            if (isAtBorder(x, y - 1)) {
                return steps + 1;
            } else {
                pushToQueue(x, y - 1, steps + 1);
            }
        }
    }

    return -1;

    function isAtBorder (x, y) {
        return (x === 0 || x === maze.length - 1 || y === 0 || y === maze[0].length - 1) &&
            !coordsSeen.has(`${x},${y}`);
    }

    function pushToQueue(x, y, steps) {
        if (!coordsSeen.has(`${x},${y}`)) {
            coordsSeen.add(`${x},${y}`);
            queue.push({ x, y, steps });
        }
    }
};
