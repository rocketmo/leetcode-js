/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let factor = 1e3;
    let newNum = 0;
    let wasReplaced = false;

    while (num > 0) {
        let digit = Math.floor(num / factor);
        num -= factor * digit;

        if (!wasReplaced && digit === 6) {
            digit = 9;
            wasReplaced = true;
        }

        newNum = newNum + (factor * digit);
        factor /= 10;
    }

    return newNum;
};
