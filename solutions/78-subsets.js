/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    dfs([], nums);
    return ans;

    function dfs(curr, nums) {
        if (!nums.length) {
            ans.push([...curr]);
            return;
        }

        // Get subsets without the last number
        const last = nums.pop();
        dfs(curr, nums);

        // Get subsets with the last number
        curr.push(last);
        dfs(curr, nums);

        // Backtrack
        curr.pop();
        nums.push(last);
    }
};
