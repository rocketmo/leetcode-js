/**
 * 1st attempt: Kinda ugly
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    // Sort tasks from longest time to shortest
    tasks.sort((a, b) => b - a);

    let ans = 0;

    // Maps total task time to an array of indices in tasks where the total time of those tasks
    // equals the total task time used as the key
    let taskMap = new Map();

    // Keep repeating until we've exhausted all tasks
    while (tasks.length > 0) {

        // Loop through all the tasks and update taskMap
        for (let i = 0; i < tasks.length; i += 1) {
            const taskTime = tasks[i];

            // Get all the task times currently in the task map and store in array; this is used
            // to avoid adding the same task twice to any task array in taskMap
            const currTimes = Array.from(taskMap.keys());

            for (const key of currTimes) {
                // Check if we can add new task time to map. We only want to add new times to
                // taskMap as existing task arrays in the map will have a shorter or equal length
                // to any we can replace it with.
                if (key + taskTime <= sessionTime && !taskMap.has(key + taskTime)) {
                    const newTimes = [...taskMap.get(key), i];
                    taskMap.set(key + taskTime, newTimes);
                }
            }

            // Add standalone task if necessary; it may have already been added previously
            if (!taskMap.has(taskTime)) {
                taskMap.set(taskTime, [ i ]);
            }

            // We have an array of tasks whose time matches the session time.
            // Create a session from that.
            if (taskMap.has(sessionTime)) {
                break;
            }
        }

        // Find the array of tasks that has the greatest total task time
        let taskIdxChosen = null;
        for (let i = sessionTime; i >= 0; i -= 1) {
            if (taskMap.has(i)) {
                taskIdxChosen = taskMap.get(i);
                break;
            }
        }

        // Increment our session total
        ans += 1;

        // Replace tasks array with a new one with the tasks used in our session removed
        const newTasks = [];
        let currChosenTask = 0;
        for (let i = 0; i < tasks.length; i += 1) {
            if (i === taskIdxChosen[currChosenTask]) {
                currChosenTask += 1;
            } else {
                newTasks.push(tasks[i]);
            }
        }

        // Reset tasks and taskMap
        tasks = newTasks;
        taskMap = new Map();
    }

    return ans;
};
