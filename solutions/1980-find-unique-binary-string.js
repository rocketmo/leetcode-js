/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const set = new Set();
    const n = nums[0].length;

    for (const num of nums) {
        set.add(parseInt(num, 2));
    }

    let i = 0;
    while (true) {
        if (!set.has(i)) {
            break;
        }

        i += 1;
    }

    let binStr = i.toString(2);
    while (binStr.length < n) {
        binStr = "0" + binStr;
    }

    return binStr;
};
