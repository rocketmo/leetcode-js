/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
    const charCountMap = new Map();
    const orderSet = new Set();

    // Count number of each character in str
    for (const char of str) {
        if (!charCountMap.has(char)) {
            charCountMap.set(char, 1);
        } else {
            charCountMap.set(char, charCountMap.get(char) + 1);
        }
    }

    // Append characters found in str to newStr, in the same order as `order`
    let newStr = "";

    for (const char of order) {
        orderSet.add(char);
        if (charCountMap.has(char)) {
            newStr = newStr + char.repeat(charCountMap.get(char));
        }
    }

    // Add any remaining characters in str that were not in `order`
    for (const char of str) {
        if (!orderSet.has(char)) {
            newStr = newStr + char;
        }
    }

    return newStr;
};
