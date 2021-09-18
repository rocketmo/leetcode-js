/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
    rides.sort((a, b) => {
        return a[1] - b[1];
    });

    const dp = _.fill(Array(n + 1), 0);
    let currRideIdx = 0;
    for (let i = 1; i <= n; i += 1) {
        dp[i] = dp[i - 1];

        while (currRideIdx < rides.length) {
            const [ start, end, tip ] = rides[currRideIdx];
            if (end <= i) {
                dp[end] = Math.max(dp[end], dp[start] + (end - start + tip));
                currRideIdx += 1;
            } else {
                break;
            }
        }
    }

    return dp[n];
};
