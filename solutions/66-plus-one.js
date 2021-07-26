/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        digits[i] = (digits[i] + 1) % 10;

        if (digits[i] !== 0) {
            break;
        }
    }

    if (digits[0] === 0) {
        return [ 1, ...digits ];
    }

    return digits;
};
