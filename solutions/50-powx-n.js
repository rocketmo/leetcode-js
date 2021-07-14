/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Base cases
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let ans = x;

    // Split the calculation into powers of 2
    while (n > 1) {
        if (n % 2 === 0) {
            ans *= ans;
            n /= 2;
        } else { // Recurse if necessary
            ans *= myPow(ans * ans, Math.floor(n / 2));
            n = 1;
        }
    }

    return ans;
};
