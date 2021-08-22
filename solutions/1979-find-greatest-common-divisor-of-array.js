/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    let gcd = 1;

    for (let i = 2; i <= min; i += 1) {
        if (min % i === 0 && max % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};
