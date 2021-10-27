const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let redCount = 0;
    let whiteCount = 0;
    let blueCount = 0;

    for (let i = 0; i < nums.length - blueCount; i += 1) {
        const color = nums[i];

        if (color === 0) { // red
            if (whiteCount > 0) {
                nums[redCount] = 0;
                nums[i] = 1;
            }

            redCount += 1;
        } else if (color === 2) { // blue
            if (i !== nums.length - blueCount - 1) {
                nums[i] = nums[nums.length - blueCount - 1];
                nums[nums.length - blueCount - 1] = 2;
                i -= 1;
            }

            blueCount += 1;
        } else { // white
            whiteCount += 1;
        }
    }
};

const nums1 = [2,0,2,1,1,0];
sortColors(nums1);
assert.deepEqual(nums1, [0,0,1,1,2,2]);

const nums2 = [2,0,1];
sortColors(nums2);
assert.deepEqual(nums2, [0,1,2]);

const nums3 = [0];
sortColors(nums3);
assert.deepEqual(nums3, [0]);

const nums4 = [1];
sortColors(nums4);
assert.deepEqual(nums4, [1]);
