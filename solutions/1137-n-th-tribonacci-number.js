const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let num1 = 0, num2 = 1, num3 = 1;
    for (let i = 3; i <= n; i += 1) {
        const tmp = num3;
        num3 = num3 + num2 + num1;
        num1 = num2;
        num2 = tmp;
    }

    return num3;
};

assert.equal(tribonacci(0), 0);
assert.equal(tribonacci(1), 1);
assert.equal(tribonacci(2), 1);
assert.equal(tribonacci(3), 2);
assert.equal(tribonacci(4), 4);
assert.equal(tribonacci(25), 1389537);
