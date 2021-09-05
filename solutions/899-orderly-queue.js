/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k === 1) {
        let ans = s;
        for (let i = 1; i < s.length; i += 1) {
            let tmp = s.slice(i) + s.slice(0, i);

            if (tmp < ans) {
                ans = tmp;
            }
        }

        return ans;
    }

    const split = s.split("");
    split.sort((a, b) => {
        return a < b ? -1 : 1;
    });

    return split.join("");
};
