/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {

  // Map integer to number of occurrences
  const counters = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    if (!counters.has(arr[i])) {
      counters.set(arr[i], 0);
    }

    counters.set(arr[i], counters.get(arr[i]) + 1);
  }

  // Convert counters into an array and sort from greatest to lowest
  const counts = Array.from(counters.values());
  counts.sort((a, b) => b - a);

  let removalsRequired = 0;
  let totalRemoved = 0;
  const half = arr.length / 2;

  for (let j = 0; j < counts.length; j += 1) {
    removalsRequired += 1;
    totalRemoved += counts[j];

    if (totalRemoved >= half) {
      return removalsRequired;
    }
  }

  return removalsRequired;
};
