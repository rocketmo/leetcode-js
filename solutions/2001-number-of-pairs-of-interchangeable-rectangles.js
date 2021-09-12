/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    const ratioMap = new Map();
    let ans = 0;

    for (let i = 0; i < rectangles.length; i += 1) {
        const ratio = rectangles[i][0] / rectangles[i][1];

        if (ratioMap.has(ratio)) {
            ans += ratioMap.get(ratio);
            ratioMap.set(ratio, ratioMap.get(ratio) + 1);
        } else {
            ratioMap.set(ratio, 1);
        }
    }

    return ans;
};
