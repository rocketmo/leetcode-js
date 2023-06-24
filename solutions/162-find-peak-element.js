/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // Check edges first, if either edge element is greater than its neighbour, we found a peak
  if (nums.length === 1 || nums[0] > nums[1]) {
    return 0;
  } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }

  // Otherwise, do a binary search on the remaining elements
  let lo = 1, hi = nums.length - 2;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    const num = nums[mid];

    // Element is greater than both neighbours, found a peak
    if (num > nums[mid - 1] && num > nums[mid + 1]) {
      return mid;
    }

    // Otherwise, search where the neighbour is greater than the current element
    // since we would be guaranteed to find a peek in that range.
    if (num < nums[mid - 1]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
