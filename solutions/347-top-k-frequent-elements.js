const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const countMap = new Map();

  for (const num of nums) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  const arr = [];
  for (const key of countMap.keys()) {
    arr.push({ num: key, count: countMap.get(key) });
  }

  arr.sort((a, b) => {
    return b.count - a.count;
  });

  return arr.slice(0, k).map(obj => obj.num);
};

assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2), [1,2]);
assert.deepEqual(topKFrequent([1], 1), [1]);
