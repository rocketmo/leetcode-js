/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const charIndexMap = new Map();
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        charIndexMap.set(char, i);
    }

    const palSet = new Set();
    const uniqueCharSet = new Set();

    for (let i = 0; i < s.length - 2; i += 1) {
        const char1 = s[i];
        if (uniqueCharSet.has(char1)) { continue; }
        uniqueCharSet.add(char1);

        for (let j = i + 1; j < s.length - 1; j += 1) {
            const char2 = s[j];
            const pal = `${char1}${char2}${char1}`;

            if (charIndexMap.get(char1) > j) {
                palSet.add(pal);
            }
        }
    }

    return palSet.size;
};
