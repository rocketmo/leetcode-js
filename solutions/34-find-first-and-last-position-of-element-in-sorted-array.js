const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let startIdx = -1;
  let endIdx = -1;

  const [targetPos, left, right] = find(0, nums.length);
  if (targetPos !== -1) {
    startIdx = findStartIdx(left, targetPos, targetPos);
    endIdx = findEndIdx(targetPos + 1, right, targetPos);
  }

  return [startIdx, endIdx];

  function find(left, right) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return [mid, left, right];
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return [-1, left, right];
  }

  function findStartIdx(left, right, prevStartIdx) {
    const [targetPos, newLeft] = find(left, right);

    if (targetPos === -1) {
      return prevStartIdx;
    }

    return findStartIdx(newLeft, targetPos, targetPos);
  }

  function findEndIdx(left, right, prevStartIdx) {
    const [targetPos, newLeft, newRight] = find(left, right);

    if (targetPos === -1) {
      return prevStartIdx;
    }

    return findEndIdx(targetPos + 1, newRight, targetPos);
  }
};

assert.deepEqual(searchRange([5,7,7,8,8,10], 8), [3,4]);
assert.deepEqual(searchRange([5,7,7,8,8,10], 6), [-1,-1]);
assert.deepEqual(searchRange([], 0), [-1,-1]);
assert.deepEqual(searchRange([5,7,7,7,7,8,8,10], 7), [1,4]);
assert.deepEqual(searchRange([5,7,8,8,10], 7), [1,1]);
