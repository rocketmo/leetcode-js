/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const numMap = new Map();

    for (const num of nums) {
        if (numMap.has(num)) {
            numMap.set(num, false);
        } else {
            numMap.set(num, true);
        }
    }

    let sum = 0;
    for (const key of numMap.keys()) {
        if (numMap.get(key)) {
            sum += key;
        }
    }

    return sum;
};
