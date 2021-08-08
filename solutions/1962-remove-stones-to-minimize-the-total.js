/**
 * First solution: Brute force, sort piles when necessary
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    piles.sort((a, b) => b - a);
    let oldMax = null;
    let currIndex = 0;

    for (let i = 0; i < k; i += 1) {
        piles[currIndex] -= Math.floor(piles[currIndex] / 2);

        if (currIndex === piles.length - 1) {
            currIndex = 0;
            oldMax = null;
            continue;
        } else if (oldMax === null || piles[currIndex] > oldMax) {
            oldMax = piles[currIndex];
        }

        if (oldMax > piles[currIndex + 1] && i + 1 < k) {
            piles.sort((a, b) => b - a);
            currIndex = 0;
            oldMax = null;
        } else if (piles[currIndex + 1] > piles[currIndex]) {
            currIndex += 1;
        }
    }

    return piles.reduce((acc, val) => acc + val, 0);
};

// TODO: Solve with a priority queue
