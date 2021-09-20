/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ans = 0;
    let ruleIdx = 0;

    if (ruleKey === "color") {
        ruleIdx = 1;
    } else if (ruleKey === "name") {
        ruleIdx = 2;
    }

    for (const item of items) {
        ans += (item[ruleIdx] === ruleValue) ? 1 : 0;
    }

    return ans;
};
