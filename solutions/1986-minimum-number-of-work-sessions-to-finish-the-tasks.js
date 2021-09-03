/**
 * Depth-first search + backtracking
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    const numTasks = tasks.length;
    const sessions = [];
    let ans = numTasks;
    tasks.sort((a, b) => b - a);

    dfs(0);
    return ans;

    function dfs(idx) {
        if (sessions.length > ans) {
            return;
        }

        if (idx === numTasks) {
            ans = sessions.length;
        }

        for (let i = 0; i < sessions.length; i += 1) {
            if (sessions[i] + tasks[idx] <= sessionTime) {
                sessions[i] += tasks[idx];
                dfs(idx + 1);
                sessions[i] -= tasks[idx];
            }
        }

        sessions.push(tasks[idx]);
        dfs(idx + 1);
        sessions.pop();
    }
};
