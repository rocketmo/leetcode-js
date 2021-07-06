/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let currPal = s[0];   // Current palindrome
    let maxPal = currPal; // Longest palindrome
    let currPalStart = 0; // Start index of the current palindrome
    let currPalMid = 0;   // Middle index of the current palindrome


    for (let i = 1; i < s.length; i += 1) {
        const char = s[i];

        // Surrounding characters around the current palindrome match
        if (currPalStart > 0 && s[currPalStart - 1] === char) {
            currPal = s[currPalStart - 1] + currPal + char;
            currPalStart -= 1;
        }

        // Cannot make a palindrome with the current palindrome and previous/next characters
        // Move to next midpoint; only required if we are not on the last character
        else if (currPalMid + 1 < s.length) {

            // Start with double character midpoint if possible
            if (currPal.length % 2 === 1 && s[currPalMid] === s[currPalMid + 1]) {
                currPal = s.substr(currPalMid, 2);
                i = currPalMid + 1;
            }

            // Otherwise go to next single character midpoint
            else {
                currPalMid += 1;
                i = currPalMid;
                currPal = s[currPalMid];
            }

            currPalStart = currPalMid;
        }

        if (currPal.length > maxPal.length) {
            maxPal = currPal;
        }
    }

    return maxPal;
};
