/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const ans = _.fill(Array(boxes.length), 0);

    for (let i = 0; i < boxes.length; i += 1) {
        if (boxes[i] !== "1") {
            continue;
        }

        for (let j = 0; j < boxes.length; j += 1) {
            ans[j] += Math.abs(i - j);
        }
    }

    return ans;
};
