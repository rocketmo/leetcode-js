/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    const stoneCounts =[ 0, 0, 0 ];

    for (const stone of stones) {
        stoneCounts[stone % 3] += 1;
    }

    if (stoneCounts[1] === 0 && stoneCounts[2] === 0) {
        return false;
    }

    const min = Math.min(stoneCounts[1], stoneCounts[2]);
    const max = Math.max(stoneCounts[1], stoneCounts[2]);

    if (stoneCounts[0] % 2 === 0) {
        return min !== 0;
    } else if ((min === 0 && max > 2) || (max - 2 > min && min > 0)) {
        return true;
    }

    return false;
};
