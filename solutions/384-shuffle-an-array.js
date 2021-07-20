/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const arr = [ ...this.nums ];

    // Fisher-Yates Algorithm
    for (let i = 0; i < arr.length; i += 1) {
        const swapIndex = Math.floor(Math.random() * (arr.length - i)) + i;
        let tmp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = tmp;
    }

    return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
