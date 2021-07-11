/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const neighbourMap = new Map(); // Maps node to neighbours

    for (const [ src, dest, time ] of times) {
        if (!neighbourMap.has(src)) {
            neighbourMap.set(src, []);
        }

        const neighbours = neighbourMap.get(src);
        neighbours.push([ dest, time ]);
    }

    const visitedMap = new Map(); // Maps node to visit time
    visitedMap.set(k, 0);

    const toCheck = [ k ];
    let index = 0;

    while (index < toCheck.length) {
        const curr = toCheck[index];
        const neighbours = neighbourMap.get(curr);
        const currTime = visitedMap.get(curr);
        index += 1;

        if (!neighbours) { continue; }

        for (const [ dest, timeToDest ] of neighbours) {
            const currTimeToDest = currTime + timeToDest;
            if (!visitedMap.has(dest) || currTimeToDest < visitedMap.get(dest)) {
                visitedMap.set(dest, currTimeToDest);
                toCheck.push(dest);
            }
        }
    }


    if (visitedMap.size === n) {
        return Math.max(...visitedMap.values());
    }

    return -1;
};
