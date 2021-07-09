/**
 * First solution: Generate roman numerals by digit
 * @param {number} num - in the range [1, 3999]
 * @return {string}
 */
var intToRoman = function(num) {

    // 1, 5 and 10 - for ones, tens, hundreds and thousands digit
    const config = [
        ["I", "V", "X"],
        ["X", "L", "C"],
        ["C", "D", "M"],
        ["M", "", ""]
    ];

    let roman = "";
    for (const romNums of config) {
        roman = digitToRoman(num % 10, romNums[0], romNums[1], romNums[2]) + roman;
        num = Math.floor(num / 10);
        if (num === 0) { return roman; }
    }

    return roman;

    /**
     * @params {number} digit
     * @params {string} romanOne - character if 1
     * @params {string} romanFive - character if 5
     * @params {string} romanTen - character if 10
     * @returns {string}
     */
    function digitToRoman(digit, romanOne, romanFive, romanTen) {
        let str = "";

        while (digit > 0) {
            if (romanTen && digit === 9) {
                str += romanOne + romanTen;
                digit = 0;
            } else if (romanFive && digit >= 5) {
                str += romanFive;
                digit -= 5;
            } else if (romanFive && digit === 4) {
                str += romanOne + romanFive;
                digit = 0;
            } else {
                str += romanOne.repeat(digit);
                digit = 0;
            }
        }

        return str;
    }
};

/**
 * Second solution: Keep a dictionary with each possible digit
 * @param {number} num - in the range [1, 3999]
 * @return {string}
 */
var intToRoman = function(num) {
    const dict = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
        ["", "M", "MM", "MMM"]                                        // thousands
    ];

    let roman = "";
    for (const digitDict of dict) {
        roman = digitDict[num % 10] + roman;
        num = Math.floor(num / 10);
        if (num === 0) { return roman; }
    }

    return roman;
};
