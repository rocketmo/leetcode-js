const assert = require("assert");

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
let guess = num => {};

function createGuessFn(num) {
    return g => {
        if (g === num) {
            return 0;
        } else if (g < num) {
            return 1;
        }

        return -1;
    };
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n + 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const guessResult = guess(mid);

        if (guessResult === 0) {
            return mid;
        } else if (guessResult < 0) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

guess = createGuessFn(6);
assert.equal(guessNumber(10), 6);

guess = createGuessFn(1);
assert.equal(guessNumber(1), 1);
assert.equal(guessNumber(2), 1);

guess = createGuessFn(2);
assert.equal(guessNumber(2), 2);
