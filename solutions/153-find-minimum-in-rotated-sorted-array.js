/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let left = 0, right = nums.length, min = nums[0], foundSmaller = false;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (!foundSmaller) {
            if (nums[mid] > min) {
                left = mid + 1;
            } else {
                min = nums[mid];
                right = mid;
                foundSmaller = true;
            }
        } else {
            if (nums[mid] < min) {
                min = nums[mid];
                right = mid;
            } else {
                left = mid + 1;
            }
        }
    }

    return min;
};
