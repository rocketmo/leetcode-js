const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const n = s.length;
    const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const s1 = s.substr(0, n / 2);
    const s2 = s.slice(n / 2);

    return countVowels(s1) === countVowels(s2);

    function countVowels(str) {
        let count = 0;
        for (const char of str) {
            if (vowelSet.has(char)) {
                count += 1;
            }
        }

        return count;
    }
};

assert.equal(halvesAreAlike("book"), true);
assert.equal(halvesAreAlike("textbook"), false);
assert.equal(halvesAreAlike("MerryChristmas"), false);
assert.equal(halvesAreAlike("AbCdEfGh"), true);
