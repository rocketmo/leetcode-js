/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const mTotal = rolls.reduce((acc, val) => acc + val, 0);
    const target = mean * (n + rolls.length);

    let ans = [];
    const nMean = (target - mTotal) / n;
    if (nMean >= 1 && nMean <= 6) {
        ans = _.fill(Array(n), 6);
        let nTotal = 6 * n;
        let nTarget = target - mTotal;

        for (let i = 0; i < n; i += 1) {
            if (nTotal - 5 > nTarget) {
                ans[i] = 1;
                nTotal -= 5;
            } else {
                ans[i] -= nTotal - nTarget;
                break;
            }
        }
    }

    return ans;
};
