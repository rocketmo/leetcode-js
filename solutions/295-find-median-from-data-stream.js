/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let lo = 0, hi = this.nums.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (num > this.nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  this.nums.splice(lo, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const mid = Math.floor(this.nums.length / 2);

  if (this.nums.length % 2 === 1) {
    return this.nums[mid];
  }

  return (this.nums[mid] + this.nums[mid - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
