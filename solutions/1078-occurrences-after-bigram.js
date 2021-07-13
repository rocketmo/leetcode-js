/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(" ");
    const thirds = [];

    for (let i = 0; i < words.length - 2; i += 1) {
        let word1 = words[i], word2 = words[i + 1], word3 = words[i + 2];

        if (word1 === first && word2 === second) {
            thirds.push(word3);
        }
    }

    return thirds;
};
