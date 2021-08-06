/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const decoded = [ first ];

    for (const num of encoded) {
        const prev = decoded[decoded.length - 1];
        decoded.push(prev ^ num);
    }

    return decoded;
};
