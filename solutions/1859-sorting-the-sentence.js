/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const sorted = _.fill(Array(words.length), "");

    for (const word of words) {
        const idx = parseInt(word.substr(word.length - 1));
        const original = word.substr(0, word.length - 1);

        sorted[idx - 1] = original;
    }

    return sorted.join(" ");
};
