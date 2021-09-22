const assert = require("assert");

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xSet = new Set();
    for (const point of points) {
        xSet.add(point[0]);
    }

    const xArr = Array.from(xSet.values());
    xArr.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 1; i < xArr.length; i += 1) {
        ans = Math.max(ans, xArr[i] - xArr[i - 1]);
    }

    return ans;
};

assert.equal(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]), 1);
assert.equal(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]), 3);
