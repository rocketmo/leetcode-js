/**
 * First solution: Binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];
  let dist = Math.abs(target - closest);

  if (dist === 0) { return target; }

  for (let i = 0; i < nums.length - 2; i += 1) {

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i- 1]) {
      continue;
    }

    // Break if any further combination is impossible to give closest answer
    const next = nums[i] + nums[i + 1] + nums[i + 2];
    if (next > target && (next - target) > dist) {
      break;
    }

    for (let j = i + 1; j < nums.length - 1; j += 1) {

      // Skip duplicates
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Break if third int is impossible to give closest answer
      const next2 = nums[i] + nums[j] + nums[j + 1];
      if (next2 > target && (next2 - target) > dist) {
        break;
      }

      // Binary search to find third int which gives closest answer
      let lo = j + 1, hi = nums.length;

      while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        let currClosest = nums[i] + nums[j] + nums[mid];
        let currDist = Math.abs(target - currClosest);

        if (target === currClosest) {
          return target;
        } else if (currDist < dist) {
          closest = currClosest;
          dist = currDist;
        }

        if (currClosest < target) {
          lo = mid + 1;
        } else {
          hi = mid;
        }
      }
    }
  }

  return closest;
};

/**
 * Second solution: Two pointer approach
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];
  let dist = Math.abs(target - closest);

  if (dist === 0) { return target; }

  for (let i = 0; i < nums.length - 2; i += 1) {

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i- 1]) {
      continue;
    }

    // Break if any further combination is impossible to give closest answer
    const next = nums[i] + nums[i + 1] + nums[i + 2];
    if (next > target && (next - target) > dist) {
      break;
    }

    // Use two pointers to find closest answer
    let lo = i + 1, hi = nums.length - 1;
    while (lo < hi) {
      let currClosest = nums[i] + nums[lo] + nums[hi];
      let currDist = Math.abs(target - currClosest);

      if (target === currClosest) {
        return target;
      } else if (currDist < dist) {
        closest = currClosest;
        dist = currDist;
      }

      if (currClosest < target) {
        lo += 1;
      } else {
        hi -= 1;
      }
    }
  }

  return closest;
};
