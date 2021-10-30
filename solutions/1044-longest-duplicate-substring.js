/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const mod = (2 ** 47) - 1;
    const alphabetSize = 26;
    const totalSize = s.length;
    const minCharCode = "a".charCodeAt(0);
    const charArr = [ ...s ].map(char => char.charCodeAt(0) - minCharCode);

    let minLen = 1;
    let maxLen = totalSize + 1;
    let ans = "";

    while (minLen < maxLen) {
        const len = Math.floor((minLen + maxLen) / 2);
        const substrFound = findDupSubstring(len);

        if (substrFound) {
            minLen = len + 1;
            ans = substrFound;
        } else {
            maxLen = len;
        }
    }

    return ans;

    function findDupSubstring(len) {
        if (len === 0) {
            return null;
        }

        const hashSet = new Set();
        let hash = 0;
        let remover = 1;

        for (let i = 0; i < len; i += 1) {
            remover = (remover * alphabetSize) % mod;
            hash = ((hash * alphabetSize) + charArr[i]) % mod;
        }

        hashSet.add(hash);

        for (let i = len; i < totalSize; i += 1) {
            hash *= alphabetSize;
            hash -= (remover * charArr[i - len]) % mod;
            hash += mod;
            hash = (hash + charArr[i]) % mod;

            if (hashSet.has(hash)) {
                return s.substr(i - len + 1, len);
            }

            hashSet.add(hash);
        }

        return null;
    }
};
