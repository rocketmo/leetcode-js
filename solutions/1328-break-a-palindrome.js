const assert = require("assert");

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const midIndex = palindrome.length % 2 === 1 ? Math.floor(palindrome.length / 2) : -1;

    for (let i = 0; i < palindrome.length; i += 1) {
        if (palindrome[i] !== "a" && i !== midIndex) {
            return (palindrome.slice(0, i) + "a" + palindrome.slice(i + 1));
        }
    }

    for (let i = palindrome.length - 1; i >= 0; i -= 1) {
        if (palindrome[i] !== "z" && i !== midIndex) {
            const charCode = palindrome.charCodeAt(i);
            return (palindrome.slice(0, i) + String.fromCharCode(charCode + 1)
                + palindrome.slice(i + 1));
        }
    }

    return "";
};

assert.equal(breakPalindrome("abccba"), "aaccba");
assert.equal(breakPalindrome("a"), "");
assert.equal(breakPalindrome("aa"), "ab");
assert.equal(breakPalindrome("aba"), "abb");
