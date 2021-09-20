/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groupMap = new Map();
    const ans = [];

    for (let i = 0; i < groupSizes.length; i += 1) {
        const size = groupSizes[i];
        if (groupMap.has(size)) {
            const group = groupMap.get(size);
            group.push(i);

            if (group.length === size) {
                ans.push(group);
                groupMap.delete(size);
            }
        } else if (size === 1) {
            ans.push([ i ]);
        } else {
            groupMap.set(size, [ i ]);
        }
    }

    return ans;
};
