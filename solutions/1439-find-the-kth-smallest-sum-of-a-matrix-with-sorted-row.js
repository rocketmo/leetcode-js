const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    const m = mat.length;

    // Keep a max priority queue with all possible combinations seen so far
    let pq = new MaxPriorityQueue();
    pq.enqueue(0);

    for (let i = 0; i < m; i += 1) {

        // Go through each row and update the priority queue by combining each value in the row
        // with a value already in the priority queue
        const row = mat[i];
        const nextPq = new MaxPriorityQueue();
        const prevVals = pq.toArray().map(obj => obj.priority);

        for (let prevVal of prevVals) {
            for (let rowVal of row) {
                nextPq.enqueue(prevVal + rowVal);
            }
        }

        // Trim the priority queue so it only keeps the first k values
        while (nextPq.size() > k) {
            nextPq.dequeue();
        }

        pq = nextPq;
    }

    // Return the first combination in the priority queue
    return pq.dequeue().priority;
};
