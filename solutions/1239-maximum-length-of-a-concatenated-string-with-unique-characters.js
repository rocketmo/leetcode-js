const assert = require("assert");

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const wordSet = new Set([""]);
    let ans = 0;

    for (const str of arr) {
        const newWords = [];
        for (const word of wordSet.values()) {
            const charSet = new Set(word);
            let canAppend = true;

            for (const char of str) {
                if (charSet.has(char)) {
                    canAppend = false;
                    break;
                }

                charSet.add(char);
            }

            if (canAppend) {
                newWords.push(word + str);
            }
        }

        for (const newWord of newWords) {
            wordSet.add(newWord);
            ans = Math.max(ans, newWord.length);
        }
    }

    return ans;
};

assert.equal(maxLength(["un","iq","ue"]), 4);
assert.equal(maxLength(["aa","bb"]), 0);
assert.equal(maxLength(["cha","r","act","ers"]), 6);
assert.equal(maxLength(["abcdefghijklmnopqrstuvwxyz"]), 26);
