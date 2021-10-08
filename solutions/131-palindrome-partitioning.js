/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = [];
    dfs([], 0);

    return ans;

    function dfs(palPartition, sIdx) {
        if (sIdx >= s.length) {
            ans.push([ ...palPartition ]);
            return;
        }

        for (let i = sIdx; i < s.length; i += 1) {
            const subStr = s.slice(sIdx, i + 1);
            if (isPalindrome(subStr)) {
                palPartition.push(subStr);
                dfs(palPartition, i + 1);

                // Backtrack
                palPartition.pop();
            }
        }
    }

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left <= right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
};
