/**
 * Monotone Chain approach
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    // Sort trees left to right
    trees.sort(([x1, y1], [x2, y2]) => {
        return (x1 === x2) ? (y1 - y2) : (x1 - x2);
    });

    // Keeps track of the outer points
    const hull = [];

    // Scan left to right and add outer points to hull in counter-clockwise direction
    for (let i = 0; i < trees.length; i += 1) {
        while (hull.length >= 2 &&
            orientation(hull[hull.length - 2], hull[hull.length - 1], trees[i]) < 0) {
            hull.pop();
        }

        hull.push(trees[i]);
    }

    // Scan right to left and add outer points to hull in couter-clockwise direction
    for (let i = trees.length - 2; i >= 0; i -= 1) {
        while (hull.length >= 2 &&
            orientation(hull[hull.length - 2], hull[hull.length - 1], trees[i]) < 0) {
            hull.pop();
        }

        hull.push(trees[i]);
    }

    // Remove duplicate points from hull
    const treeSet = new Set(hull);
    return Array.from(treeSet.values());


    // Returns a positive number if the points are in counter-clockwise direction
    // Otherwise returns a negative number
    function orientation([p1, p2], [q1, q2], [r1, r2]) {
        return ((q2 - p2) * (r1 - q1)) - ((q1 - p1) * (r2 - q2));
    }
};
