/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const lastCharIndexMap = new Map();
    let maxLen = 0;
    let currLen = 0;

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];

        if (lastCharIndexMap.has(char)) {
            const diff = i - lastCharIndexMap.get(char);

            if (diff > currLen) {
                currLen += 1;
            } else {
                maxLen = Math.max(maxLen, currLen);
                currLen = diff;
            }
        } else {
            currLen += 1;
        }

        lastCharIndexMap.set(char, i);
    }

    return Math.max(maxLen, currLen);
};
