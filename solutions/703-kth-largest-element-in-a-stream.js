/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let left = 0, right = this.nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (val >= this.nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  this.nums.splice(left, 0, val);
  return this.nums[this.nums.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
