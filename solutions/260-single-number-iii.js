/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var xor = nums.reduce((acc, val) => acc ^ val, 0);
    var lastBitPos = xor.toString(2).length - 1;
    var xor2 = nums.filter(val => (val >> lastBitPos & 1) == 0)
        .reduce((acc, val) => acc ^ val, 0);
    return [xor2, xor2 ^ xor];
};
