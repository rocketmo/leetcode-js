/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    dfs([], nums);
    return ans;

    function dfs(curr, rem) {
        if (curr.length === nums.length) {
            ans.push(curr);
            return;
        }

        for (let i = 0; i < rem.length; i += 1) {
            const next = [ ...curr, rem[i] ];
            const nextRem = [ ...rem.slice(0, i), ...rem.slice(i + 1) ];
            dfs(next, nextRem);
        }
    }
};
