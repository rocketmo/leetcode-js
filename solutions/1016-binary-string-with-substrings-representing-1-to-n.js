/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    for (let i = 1; i <= n; i += 1) {
        const bin = i.toString(2);
        if (!s.match(bin)) {
            return false;
        }
    }

    return true;
};
