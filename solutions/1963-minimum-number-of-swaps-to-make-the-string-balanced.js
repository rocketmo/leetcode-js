/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let misplaced = 0;
    const stack = [];

    for (const bracket of s) {
        if (bracket === "[") {
            stack.push(1);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                misplaced += 1;
            }
        }
    }

    return Math.ceil(misplaced / 2);
};
