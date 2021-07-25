/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const chars = s.split("");
    const nums = chars.map(char => {
        return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    });

    let numStr = nums.join("");

    for (let i = 0; i < k; i += 1) {
        const digits = numStr.split("");
        const sum = digits.reduce((acc, digit) => {
            return acc + Number(digit);
        }, 0);

        numStr = String(sum);
    }

    return Number(numStr);
};
