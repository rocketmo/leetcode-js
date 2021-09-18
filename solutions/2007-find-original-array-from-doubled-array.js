/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 > 0) {
        return [];
    }

    changed.sort((a, b) => b - a);

    const numMap = new Map();
    const ans = [];

    for (let i = 0; i < changed.length; i += 1) {
        const num = changed[i];
        const doubled = num * 2;

        if (numMap.has(doubled)) {
            ans.push(num);
            if (numMap.get(doubled) === 1) {
                numMap.delete(doubled);
            } else {
                numMap.set(doubled, numMap.get(doubled) - 1);
            }
        } else {
            if (numMap.has(num)) {
                numMap.set(num, numMap.get(num) + 1);
            } else {
                numMap.set(num, 1);
            }
        }
    }

    if (numMap.size > 0) {
        return [];
    }

    return ans;
};
