/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let totalAbsent = 0;
    let consecLate = 0;

    for (const char of s) {
        if (char === "A") {
            totalAbsent += 1;
            consecLate = 0;

            if (totalAbsent > 1) {
                return false;
            }
        } else if (char === "L") {
            consecLate += 1;

            if (consecLate >= 3) {
                return false;
            }
        } else {
            consecLate = 0;
        }
    }

    return true;
};
