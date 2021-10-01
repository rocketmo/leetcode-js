/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const ans = [];
    dfs("", 0);
    return ans;

    function dfs(currStr, idx) {
        if (currStr.length === s.length) {
            ans.push(currStr);
            return;
        }

        // Alphabetic
        if (isNaN(s[idx])) {
            dfs(currStr + s[idx].toLowerCase(), idx + 1);
            dfs(currStr + s[idx].toUpperCase(), idx + 1);
        }

        // Numeric
        else {
            dfs(currStr + s[idx], idx + 1);
        }
    }
};
