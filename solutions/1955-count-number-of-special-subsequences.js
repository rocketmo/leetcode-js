/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
    const dp = [ 1, 0, 0, 0 ];
    for (const num of nums) {
        const idx = num + 1;
        dp[idx] += dp[idx] + dp[idx - 1];
        dp[idx] = modulo(dp[idx]);
    }

    return dp[3];

    function modulo(num) {
        return num % (1e9 + 7);
    }
};
