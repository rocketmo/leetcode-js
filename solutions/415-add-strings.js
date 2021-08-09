/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = "";

    while (i >= 0 || j >= 0) {
        let code;
        if (j < 0) {
            code = num1[i].charCodeAt(0) + carry;
        } else if (i < 0) {
            code = num2[j].charCodeAt(0) + carry;
        } else {
            let code1 = num1[i].charCodeAt(0);
            let code2 = num2[j].charCodeAt(0);
            code = code1 + code2 + carry - "0".charCodeAt(0);
        }


        carry = Math.floor((code - "0".charCodeAt(0)) / 10);
        code -= (carry > 0) ? 10 : 0;
        sum = `${String.fromCharCode(code)}${sum}`;
        i -= 1;
        j -= 1;
    }

    if (carry > 0) {
        sum = `${carry}${sum}`;
    }

    return sum;
};
