/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
    let hasZero = false; // Set to true if binary has a `0` anywhere in the string
    let ans = 0;         // Our eventual answer
    let start = 0;       // Index where we should start counting unique subsequences

    // Binary string has a leading `0`
    if (binary[0] === "0") {
        hasZero = true;
        start += 1;

        // Increment start index until we reach a `1`
        for (let i = 1; i < binary.length; i += 1) {
            if (binary[i] === "0") {
                start += 1;
            } else {
                break;
            }
        }
    }

    // dp[i] represents the number of new unique subsequences we can create after reading the ith
    // digit following the previous (i - 1) digits. dp[0] is always 1 since we can only have 1
    // unique subsequence with one number. If start outside the bounds of the binary string, then
    // we don't need to record any values to dp.
    const dp = start < binary.length ? [ 1 ] : [];

    for (let i = start + 1; i < binary.length; i += 1) {
        // Update hasZero in case the binary string did not have a leading `0`
        hasZero = hasZero || (binary[i] === "0");

        // Compare the current digit in binary to the previous digit. If they match, then it means
        // we can only add the same number of unique new subsequences as the last digit did.
        if (binary[i] === binary[i - 1]) {
            dp.push(dp[i - start - 1]);
        }

        // If the current digit is different to the previous digit, the number of unique new
        // subsequences if equal to the sum of unique new subsequences from adding the previous
        // digits, where each of those digits matched each other, and plus the number of new
        // subsequences from adding the last digit read that matched the current digit, if any.
        else {
            let next = 0;
            for (let j = i - 1; j >= start; j -= 1) {
                next = modulo(next + dp[j - start]);
                if (binary[j] === binary[i]) {
                    break;
                }
            }

            dp.push(next);
        }
    }

    // If the binary string had a `0`, then it means we can create the subsequence `0` from it.
    // So add 1 to the answer.
    ans += (hasZero ? 1 : 0);

    // Now, just sum up all the unique new subsequences added at each step.
    for (let i = 0; i < dp.length; i += 1) {
        ans = modulo(ans + dp[i]);
    }

    return ans;

    // Returns num modulo (10^9 + 7)
    function modulo(num) {
        return num % (1e9 + 7);
    }
};
