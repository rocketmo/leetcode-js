/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Store answers in dynamic programming approach
    // Value at ans[i][j] will be true if the string formed from the first i characters of s
    // match the pattern formed from the first j characters of p
    const ans = [];

    for (let i = 0; i <= s.length; i += 1) {
        ans.push([]);

        for (let j = 0; j <= p.length; j += 1) {

            // Pattern of length 0
            if (j === 0) {
                ans[i][j] = (i === 0);
            }

            // Zero or more wildcard (wc) character
            else if (p[j - 1] === "*") {
                const prev = p[j - 2]; // Guaranteed to be valid

                ans[i][j] = ans[i][j - 1] ||    // Substring matched with single char
                    (j > 1 && ans[i][j - 2]) || // Substring matched without wc char
                    (i > 0 && matchChar(s[i - 1], prev) && ans[i - 1][j]); // Multiple wc matches

            }

            // Last character in s and p match; or we have the single character wc
            else if (i > 0 && matchChar(s[i - 1], p[j - 1])) {
                ans[i][j] = ans[i - 1][j - 1];
            }

            else {
                ans[i][j] = false;
            }
        }
    }

    return ans[s.length][p.length];

    /**
     * Returns true if sChar matches the pattern character, pChar
     * @param {string} sChar - single character from s
     * @param {string} pChar - single character from p
     * @return {boolean}
     */
    function matchChar(sChar, pChar) {
        return pChar === "." || sChar === pChar;
    }
};
