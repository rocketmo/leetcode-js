/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
    // The total number of ones in arr must be divisible by 3 in order to be
    // separated into three equal parts
    const totalOnes = arr.reduce((acc, val) => acc + val, 0);
    if (totalOnes % 3 !== 0) {
        return [-1, -1];
    }

    // If no ones
    if (totalOnes === 0) {
        return [0, arr.length - 1];
    }

    // Find the intervals where each interval contains the same number of ones
    const onesPerPart = totalOnes / 3;
    let x1 = -1, x2 = -1, y1 = -1, y2 = -1, z1 = -1, z2 = -1;
    let currOne = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 1) {
            currOne += 1;

            if (currOne === 1) { x1 = i; }
            if (currOne === onesPerPart) { x2 = i; }
            if (currOne === onesPerPart + 1) { y1 = i; }
            if (currOne === onesPerPart * 2) { y2 = i; }
            if (currOne === (onesPerPart * 2) + 1) { z1 = i; }
            if (currOne === onesPerPart * 3) { z2 = i; }
        }
    }

    // Check if the numbers formed in each interval are equal
    const num1 = arr.slice(x1, x2 + 1).join("");
    const num2 = arr.slice(y1, y2 + 1).join("");
    const num3 = arr.slice(z1, z2 + 1).join("");

    if (num1 !== num2 || num1 !== num3) {
        return [-1, -1];
    }

    // Count the number of zeroes after each part
    let zero1 = y1 - x2 - 1;
    let zero2 = z1 - y2 - 1;
    let zero3 = arr.length - z2 - 1;

    // Parts 1 and 2 must have at least the same number of zeroes as in part 3
    if (zero1 < zero3 || zero2 < zero3) { return [ -1, -1 ]; }
    return [ x2 + zero3, y2 + zero3 + 1 ];

};
