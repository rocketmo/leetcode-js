/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function(start, target) {
  const xDiff = Math.abs(start[0] - target[0]);
  const yDiff = Math.abs(start[1] - target[1]);

  return (xDiff + yDiff) % 2 === 0;
};
