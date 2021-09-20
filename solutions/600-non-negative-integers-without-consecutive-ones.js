/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
    const binStr = n.toString(2);

    // a[i] represents the number of binary numbers of length (i + 1)
    // that do not have any consecutive 1's and end with 0
    const a = [ 1 ];

    // b[i] represents the number of binary numbers of length (i + 1)
    // that do not have any consecutive 1's and end with 1
    const b = [ 1 ];

    // Count the number of binary numbers we can append a 0 or 1 to, while
    // making sure that the result does not have any consecutive 1's
    for (let i = 1; i < binStr.length; i += 1) {

        // We can append 0 to numbers ending in both 1 or 0
        a.push(a[i - 1] + b[i - 1]);

        // We can only append 1 to numbers ending in 0
        b.push(a[i - 1]);
    }

    // Get the maximum possible answer
    let ans = a[binStr.length - 1] + b[binStr.length - 1];

    // Subtract the number of solutions for numbers greater than n
    for (let i = 1; i < binStr.length; i += 1) {

        // Consecutive 1's, not need to subtract any more solutions
        if (binStr[i] === "1" && binStr[i - 1] === "1") {
            break;
        }

        // Consecutive 0's, subtract '01' solutions
        if (binStr[i] === "0" && binStr[i - 1] === "0") {
            ans -= b[binStr.length - 1 - i];
        }
    }

    return ans;
};
