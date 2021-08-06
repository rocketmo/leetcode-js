/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const arr = Array(s.length);

    for (let i = 0; i < indices.length; i += 1) {
        arr[indices[i]] = s[i];
    }

    return arr.join("");
};
