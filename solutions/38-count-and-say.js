const assert = require("assert");

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = "1";

    for (let i = 1; i < n; i += 1) {
        const groups = groupDigits(ans);
        ans = convertGroupsToSequence(groups);
    }

    return ans;

    function groupDigits(value) {
        const groups = [];

        for (let digit of value) {
            if (groups.length === 0 || groups[groups.length - 1].digit !== digit) {
                groups.push({ digit, count: 1});
            } else {
                groups[groups.length -1].count += 1;
            }
        }

        return groups;
    }

    function convertGroupsToSequence(groups) {
        let ans = "";

        for (const group of groups) {
            ans += group.count;
            ans += group.digit;
        }

        return ans;
    }
};

assert.equal(countAndSay(1), "1");
assert.equal(countAndSay(2), "11");
assert.equal(countAndSay(3), "21");
assert.equal(countAndSay(4), "1211");
assert.equal(countAndSay(5), "111221");
assert.equal(countAndSay(6), "312211");
