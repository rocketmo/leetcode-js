/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const tokens = sentence.trim().split(/\s+/g);
    let valid = 0;
    const regex = /^([a-z]+(-?[a-z]+)?)?[ !.,]?$/;

    for (const token of tokens) {
        if (regex.test(token)) {
            valid += 1;
        }
    }

    return valid;
};
