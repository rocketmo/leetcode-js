const assert = require('assert');

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let highest = 0;
  let curr = 0;

  for (const diff of gain) {
    curr += diff;
    highest = Math.max(curr, highest);
  }

  return highest;
};

assert.equal(largestAltitude([-5,1,5,0,-7]), 1);
assert.equal(largestAltitude([-4,-3,-2,-1,4,3,2]), 0);
