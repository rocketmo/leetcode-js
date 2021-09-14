/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let leftIdx = 0, rightIdx = s.length - 1;
    const split = s.split("");
    const regex = /[A-Za-z]/;

    while (leftIdx < rightIdx) {
        const alphaLeft = regex.test(split[leftIdx]);
        const alphaRight = regex.test(split[rightIdx]);

        if (alphaLeft && alphaRight) {
            const tmp = split[leftIdx];
            split[leftIdx] = split[rightIdx];
            split[rightIdx] = tmp;
            leftIdx += 1;
            rightIdx -= 1;
            continue;
        }

        if (!alphaLeft) {
            leftIdx += 1;
        }

        if (!alphaRight) {
            rightIdx -= 1;
        }
    }

    return split.join("");
};
