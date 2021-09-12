/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
    if (s.length === 2) {
        return 1;
    }

    let ans = 1;
    dfs(0, "", "");

    return ans;

    function dfs(idx, subStr1, subStr2) {
        if (idx >= s.length) {
            if (isPalindrome(subStr1) && isPalindrome(subStr2)) {
                ans = Math.max(ans, subStr1.length * subStr2.length);
            }

            return;
        }

        dfs(idx + 1, subStr1 + s[idx], subStr2);
        dfs(idx + 1, subStr1, subStr2 + s[idx]);
        dfs(idx + 1, subStr1, subStr2);
    }

    function isPalindrome(str) {
        let left = 0, right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
};
