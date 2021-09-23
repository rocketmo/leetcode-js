const assert = require("assert");

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let ans = 0;
    const subordinateMap = new Map();

    for (let i = 0; i < manager.length; i += 1) {
        if (manager[i] < 0) {
            continue;
        }

        if (subordinateMap.has(manager[i])) {
            subordinateMap.get(manager[i]).push(i);
        } else {
            subordinateMap.set(manager[i], [ i ]);
        }
    }

    dfs(headID, 0);
    return ans;

    function dfs(managerId, currTime) {
        if (informTime[managerId] === 0 || !subordinateMap.has(managerId)) {
            ans = Math.max(ans, currTime);
            return;
        }

        const subordinates = subordinateMap.get(managerId);
        for (const subordinate of subordinates) {
            dfs(subordinate, currTime + informTime[managerId]);
        }
    }
};

assert.equal(numOfMinutes(1, 0, [-1], [0]), 0);
assert.equal(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]), 1);
assert.equal(numOfMinutes(7, 6, [1,2,3,4,5,6,-1], [0,6,5,4,3,2,1]), 21);
assert.equal(numOfMinutes(15, 0, [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]),
    3);
assert.equal(numOfMinutes(4, 2, [3,3,-1,2], [0,0,162,914]), 1076);
