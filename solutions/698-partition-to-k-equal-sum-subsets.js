const assert = require("assert");
const _ = require("lodash");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const n = nums.length;
    const sum = nums.reduce((acc, val) => {
        return acc + val;
    }, 0);

    if (sum % k !== 0) {
        return false;
    }

    nums.sort((a, b) => b - a);
    const targetSum = sum / k;
    const groupSums = _.fill(Array(k), 0);

    return dfs(0, 0);

    function dfs(currIdx) {
        if (currIdx >= n) {
            return true;
        }

        const num = nums[currIdx];
        for (let i = 0; i < groupSums.length; i += 1) {
            const groupSum = groupSums[i];
            if (groupSum + num > targetSum) {
                continue;
            }

            groupSums[i] += num;
            if (dfs(currIdx + 1)) {
                return true;
            }

            // Backtrack
            groupSums[i] -= num;
        }

        return false;
    }
};

assert(canPartitionKSubsets([4,3,2,3,5,2,1], 4));
assert(canPartitionKSubsets(
    [3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269], 5));
assert.equal(canPartitionKSubsets([1,2,3,4], 3), false);
