const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {

    // Create an array with all workers
    // For each worker, store their quality and their wage/quality ratio
    const workers = [];
    for (let i = 0; i < quality.length; i += 1) {
        workers.push({
            ratio: wage[i] / quality[i],
            quality: quality[i]
        });
    }

    // Sort the array from lowest ratio to highest
    workers.sort((a, b) => a.ratio - b.ratio);

    let lowestWages = Number.MAX_VALUE;
    let currentQuality = 0;

    // Priority queue, takes in worker quality, highest quality has the highest priority
    const pq = new MaxPriorityQueue();

    // Loop through all workers, starting with worker with the lowest wage/quality ratio
    // Once we've reached k workers, start tracking the minimum total wage
    for (const worker of workers) {
        currentQuality += worker.quality;
        pq.enqueue(worker.quality);

        // If we're over the worker limit, pop the worker with the highest quality,
        // as they will require the highest wage
        if (pq.size() > k) {
            currentQuality -= pq.dequeue().element;
        }

        // Calculate the total wage of the group
        // Total wage is equal to the total quality of the group multiplied by the highest ratio of
        // the group
        if (pq.size() === k) {
            lowestWages = Math.min(lowestWages, currentQuality * worker.ratio);
        }
    }

    return lowestWages;
};
