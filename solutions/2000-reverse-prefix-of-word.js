/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let ans = word;

    for (let i = 0; i < word.length; i += 1) {
        if (word[i] === ch) {
            ans = word.substring(0, i + 1).split("").reverse().join("") + word.substr(i + 1);
            break;
        }
    }

    return ans;
};
