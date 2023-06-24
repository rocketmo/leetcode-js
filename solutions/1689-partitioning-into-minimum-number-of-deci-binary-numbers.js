/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let partitions = 0;

  for (const digit of n) {
    partitions = Math.max(partitions, Number(digit));

    if (partitions === 9) {
      return partitions;
    }
  }

  return partitions;
};
