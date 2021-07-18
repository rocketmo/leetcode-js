/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let numAddedRungs = 0;

    for (let i = -1; i < rungs.length - 1; i += 1) {
        let currHeight = i === -1 ? 0 : rungs[i];
        let nextHeight = rungs[i + 1];
        let diff = nextHeight - currHeight;

        if (diff > dist) {
            numAddedRungs += Math.floor(diff / dist);

            if (diff % dist === 0) {
                numAddedRungs -= 1;
            }
        }
    }

    return numAddedRungs;
};
