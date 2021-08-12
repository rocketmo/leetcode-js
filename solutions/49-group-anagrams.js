/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sorted = strs.map(str => {
        return str.split("").sort().join("");
    });

    const anaMap = new Map();
    const ans = [];

    for (let i = 0; i < strs.length; i += 1) {
        if (anaMap.has(sorted[i])) {
            const idx = anaMap.get(sorted[i]);
            ans[idx].push(strs[i]);
        } else {
            anaMap.set(sorted[i], ans.length);
            ans.push([ strs[i] ]);
        }
    }

    return ans;
};
