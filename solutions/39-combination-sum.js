/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const curr = [];
    let currSum = 0;
    dfs(0);

    return ans;

    function dfs(minIdx) {
        if (currSum === target) {
            ans.push([...curr]);
            return;
        }

        for (let i = minIdx; i < candidates.length; i += 1) {
            let num = candidates[i];
            if (currSum + num <= target) {
                curr.push(num);
                currSum += num;

                dfs(i);

                curr.pop();
                currSum -= num;
            }
        }
    }
};
